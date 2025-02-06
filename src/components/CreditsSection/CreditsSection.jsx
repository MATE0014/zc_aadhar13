import React from "react";
import "./CreditsSection.css";

import shristiimg from "/images/shristi.webp";
import moxitimg from "/images/moxit.webp";
import sakshamimg from "/images/saksham.webp";
import prakritiimg from "/images/prakriti.png";
import backgroundImage from "/images/creditsbg.webp";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const CreditsSection = () => {
  const developers = [
    {
      name: "Moxit Rewar",
      role: "Full Stack Developer",
      image: moxitimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/moxit-rewar-b54928290",
      email: "moxitrewar777@gmail.com",
    },
    {
      name: "Shristi Sharma",
      role: "Full Stack Developer",
      image: shristiimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/shristi-sharma-b9a0a0291",
      email: "2023pcecashristi050@poornima.org",
    },
    {
      name: "Saksham Shakya",
      role: "UI/UX Designer",
      image: sakshamimg,
      bgSize: "contain",
      linkedin: "https://www.linkedin.com/in/saksham-shakya-8540282b7",
      email: "2023pcecasaksham044@poornima.org",
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
