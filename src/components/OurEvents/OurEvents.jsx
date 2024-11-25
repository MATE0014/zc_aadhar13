import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurEvents.css"; // Assuming you have the corresponding CSS file for styling
import RoboWarImg from "../../images/RoboWar.png";
import CircuitryImg from "../../images/Circuitry.png";
import SoccerImg from "../../images/Soccer.png";
import SpudGunImg from "../../images/SpudGun.png";
import CosmoImg from "../../images/Cosmo.png";
import RaceImg from "../../images/RC.png";
import MicroMouseImg from "../../images/MicroMouse.png";
import HackathonImg from "../../images/Aadhar Logo.png";

const OurEvents = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/events");
  };

  return (
    <div className="our-events-container">
      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${RoboWarImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Robo War</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Robo War</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${CircuitryImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Open Innovation</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Open Innovation</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${SoccerImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Robo Soccer</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Robo Soccer</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${SpudGunImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Spud Gun</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Spud Gun</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${CosmoImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Cosmo Clench</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Cosmo Clench</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${RaceImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Robo Race</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Robo Race</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${MicroMouseImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>MicroMouse</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>MicroMouse</h2>
        </div>
      </div>

      <div
        className="eventcard"
        onClick={handleNavigation}
        style={{
          backgroundImage: `url("${HackathonImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-front">
          <div className="overlay"></div>
          <h3>Hackathon</h3>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="card-back">
          <h2>Hackathon</h2>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
