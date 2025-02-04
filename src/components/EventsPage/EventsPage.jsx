import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./FullOverlay";
import "./EventsPage.css";
import eventsbgv from "../../videos/eventsbgv.mp4";
import aadharimg1 from "/images/aadhar1.webp";
import aadharimg2 from "/images/aadhar2.webp";
import aadharimg3 from "/images/aadhar3.webp";

const EventsPage = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const lazyImages = document.querySelectorAll(".lazy-image");
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const imgSrc = img.getAttribute("data-src");
          if (imgSrc) {
            img.src = imgSrc; // Set the image source
            img.classList.remove("lazy-image"); // Remove the lazy-image class
          }
          observer.unobserve(img); // Stop observing once the image is loaded
        }
      });
    }, options);

    cards.forEach((card) => cardObserver.observe(card));
    lazyImages.forEach((img) => imageObserver.observe(img));
  }, []);

  const handleRegisterClick = (eventTitle) => {
    if (eventTitle === "ROBO WAR") {
      setOverlayMessage(
        "Sorry, the registrations are full this year. Please try again in Aadhar 14."
      );
      setShowOverlay(true);
    } else {
      navigate("/registration");
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      {showOverlay && (
        <Overlay message={overlayMessage} onClose={closeOverlay} />
      )}
      <video
        src={eventsbgv}
        loop
        muted
        autoPlay
        className="background-video"
      ></video>
      <div className="aadhar">
        <div className="aadhar-text">
          <section id="target-aadhar">
            <p className="heading">Introduction To AADHAR</p>
          </section>
          <p className="description">
            The Zircon Club launched an initiative called AADHAR with the goal
            of enhancing a person's entire talents. Every talent needs a
            platform, and the club hosts AADHAR every year to give that
            opportunity. In order to foster cooperation and teamwork among
            students and to highlight their skill, Poornima students began this
            initiative back in 2007. Both the workplace and the inventory are
            excellent. The opportunity for first-year students to implement
            their academic knowledge in real-world settings is provided via this
            platform. This festival is a wonderful resource for the Poornima
            pupils because of the dedication and commitment of the Zircon Club.
          </p>
        </div>
        <div className="aadhar-images">
          <img src={aadharimg1} alt="img 1" />
          <img src={aadharimg2} alt="img 2" />
          <img src={aadharimg3} alt="img 3" />
        </div>
      </div>

      <div className="class">
        <section id="target-section">
          <p className="heading">Our Events</p>
        </section>
      </div>

      <div className="card-container">
        {eventsData.map((event, index) => (
          <div className="card" key={index}>
            <div className="card-left">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-desc">{event.description}</p>
              <button
                className="register-button"
                onClick={() => handleRegisterClick(event.title)}
              >
                Register Now
              </button>
            </div>
            <div className="card-gap"></div>
            <div className="card-right">
              <img
                className="lazy-image"
                data-src={event.image}
                alt={event.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const eventsData = [
  {
    title: "CIRCUITRY",
    description:
      "Circuitry is the science of designing electronic or electric circuits, or it is the detailed layout of an electric circuit. The most crucial component of electronics is circuitry.",
    image: "/images/circuitry.webp",
  },
  {
    title: "MACHINE O MANIA",
    description:
      "A hand on opportunities to explore and expand your imagination. Design the machine you desire.",
    image: "/images/mom.webp",
  },
  {
    title: "ROBO SOCCER",
    description:
      "The basic purpose of this game is to direct your robots to score as many goals as you can. A specialized autonomous robot is a soccer robot.",
    image: "/images/robosoccer.webp",
  },
  {
    title: "SPUD GUN",
    description:
      "A toy gun that shoots a potato plug by forcing the air in the barrel to condense.",
    image: "/images/spudgun.webp",
  },
  {
    title: "COSMO CLENCH",
    description:
      "The participating teams must build a manually controlled gripper bot (wired or wireless).",
    image: "/images/cosmo.webp",
  },
  {
    title: "ROBO RACE",
    description:
      "Autonomous or wired racing robots are the focus of the competition.",
    image: "/images/race.webp",
  },
  {
    title: "MICROMOUSE",
    description:
      "A Micromouse is a small autonomous robotic vehicle designed to solve and navigate through a maze.",
    image: "/images/race.webp",
  },
];

export default EventsPage;
