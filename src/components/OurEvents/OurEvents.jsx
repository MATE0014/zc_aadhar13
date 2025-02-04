import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurEvents.css";
import MOMImg from "/images/MOM-card.webp";
import CircuitryImg from "/images/Circuitry-card.webp";
import SoccerImg from "/images/Soccer-card.webp";
import SpudGunImg from "/images/SpudGun-card.webp";
import CosmoImg from "/images/Cosmo-card.webp";
import RaceImg from "/images/RC-card.webp";
import MicroMouseImg from "/images/MicroMouse-card.webp";
import HackathonImg from "/images/Hackathon-card.webp";

const OurEvents = () => {
  const navigate = useNavigate();
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  const events = [
    { title: "Open Innovation - MoM", image: MOMImg },
    { title: "Open Innovation - Circuitry", image: CircuitryImg },
    { title: "Robo Soccer", image: SoccerImg },
    { title: "Spud Gun", image: SpudGunImg },
    { title: "Cosmo Clench", image: CosmoImg },
    { title: "Robo Race", image: RaceImg },
    { title: "MicroMouse", image: MicroMouseImg },
    { title: "Hackathon", image: HackathonImg },
  ];

  const handleCardClick = (index) => {
    if (clickedCardIndex === index) {
      // Redirect on the second click
      navigate("/events");
    } else {
      // Set the clicked card index to trigger animation
      setClickedCardIndex(index);
    }
  };

  return (
    <div className="our-events-container">
      {events.map((event, index) => (
        <div
          key={index}
          className={`eventcard ${clickedCardIndex === index ? "clicked" : ""}`}
          onClick={() => handleCardClick(index)}
          style={{
            backgroundImage: `url("${event.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card-front">
            <div className="overlay"></div>
            <h3>{event.title}</h3>
            <button className="explore-button">Explore More</button>
          </div>
          <div className="card-back">
            <h2>{event.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurEvents;
