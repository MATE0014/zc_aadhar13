import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./FullOverlay";
import "./EventsPage.css";

const EventsPage = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false); // State to control overlay visibility
  const [overlayMessage, setOverlayMessage] = useState(""); // State to control the overlay message

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  const handleRegisterClick = (eventTitle) => {
    if (eventTitle === "ROBO WAR") {
      setOverlayMessage(
        "Sorry, the registrations are full this year. Please try again in Aadhar 14."
      );
      setShowOverlay(true); // Show the overlay when clicked
    } else {
      navigate("/registration"); // For other events, navigate to registration page
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false); // Close the overlay
  };

  return (
    <div>
      {showOverlay && (
        <Overlay message={overlayMessage} onClose={closeOverlay} />
      )}

      <video
        src="./src/videos/eventsbgv.mp4"
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
          <img
            src="./src/images/Aadhar Logo.png"
            alt="img 1"
            style={{ height: "250px", width: "270px" }}
          />
          <img
            src="./src/images/Aadhar Logo.png"
            alt="img 2"
            style={{ height: "250px", width: "270px" }}
          />
          <img
            src="./src/images/Aadhar Logo.png"
            alt="img 3"
            style={{ height: "250px", width: "270px" }}
          />
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
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <button
                className="register-button"
                onClick={() => handleRegisterClick(event.title)} // Trigger overlay or registration
              >
                Register Now
              </button>
            </div>
            <div className="card-gap"></div>
            <div className="card-right">
              <video src={event.video} controls></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const eventsData = [
  {
    title: "ROBO WAR",
    description:
      "The primary tactic used by either side, whether it be defending or attacking, is taken into account while creating the bots. There is a 5 person maximum per squad. Five minutes will be allotted for each match. Only timeouts lasting 30 seconds and a maximum of twice a game allow teams to shift their bots. It is not permitted to strike engines or cables, just certain body parts.",
    video: "./src/videos/ROBOWAR.mp4",
  },
  {
    title: "CIRCUITRY",
    description:
      "Circuitry is the science of designing electronic or electric circuits, or it is the detailed layout of an electric circuit. The most crucial component of electronics is circuitry.",
    video: "./src/videos/CIRCUITRY.mp4",
  },
  {
    title: "MACHINE O MANIA",
    description:
      "A hand on opportunities to explore and expand your imagination. Design the machine you desire.",
    video: "./src/videos/MOM.mp4",
  },
  {
    title: "ROBO SOCCER",
    description:
      "The basic purpose of this game is to direct your robots to score as many goals as you can. A specialized autonomous robot is a soccer robot.",
    video: "./src/videos/ROBOSOCCER.mp4",
  },
  {
    title: "SPUD GUN",
    description:
      "A toy gun that shoots a potato plug by forcing the air in the barrel to condense.",
    video: "./src/videos/SPUDGUN.mp4",
  },
  {
    title: "COSMO CLENCH",
    description:
      "The participating teams must build a manually controlled gripper bot (wired or wireless).",
    video: "./src/videos/COSMO CLENCH.mp4",
  },
  {
    title: "ROBO RACE",
    description:
      "Autonomous or wired racing robots are the focus of the competition.",
    video: "./src/videos/ROBO RACE.mp4",
  },
  {
    title: "MICROMOUSE",
    description:
      "A Micromouse is a small autonomous robotic vehicle designed to solve and navigate through a maze.",
    video: "./src/videos/MICROMOUSE.mp4",
  },
];

export default EventsPage;
