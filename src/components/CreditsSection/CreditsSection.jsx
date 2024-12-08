import React from "react";
import "./CreditsSection.css";

import shristiimg from "../../images/shristi.png";
import moxitimg from "../../images/moxit.png";
import sakshamimg from "../../images/saksham.png";
import prakritiimg from "../../images/prakriti.png";
import backgroundImage from "../../images/creditsbg.jpeg";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const CreditsSection = () => {
  const developers = [
    {
      name: "Shristi Sharma",
      role: "Full Stack Developer",
      image: shristiimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/shristi-sharma",
      email: "shristi@example.com",
    },
    {
      name: "Moxit Rewar",
      role: "Full Stack Developer",
      image: moxitimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/moxit-rewar",
      email: "moxit@example.com",
    },
    {
      name: "Saksham Shakya",
      role: "UI/UX Designer",
      image: sakshamimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/saksham-shakya",
      email: "saksham@example.com",
    },
    {
      name: "Prakriti",
      role: "Frontend Developer",
      image: prakritiimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/prakriti",
      email: "prakriti@example.com",
    },
  ];

  return (
    <div
      className="credits-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="credits-title">Credits</h2>
      <div className="credits-grid">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="credits-card"
            style={{
              backgroundImage: `url(${dev.image})`,
              backgroundSize: dev.bgSize,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="credits-card-info">
              <h3 className="credits-card-name">{dev.name}</h3>
              <p className="credits-card-role">{dev.role}</p>
              <div className="credits-icons">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaLinkedin />
                </a>
                <a href={`mailto:${dev.email}`} className="icon-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsSection;
