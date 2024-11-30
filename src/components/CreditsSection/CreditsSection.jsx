import React from "react";
import "./CreditsSection.css";

import shristiimg from "../../images/shristi.png";
import moxitimg from "../../images/moxit.png";
import sakshamimg from "../../images/saksham.png";
import prakritiimg from "../../images/prakriti.png";
import backgroundImage from "../../images/creditsbg.jpg";

const CreditsSection = () => {
  const developers = [
    {
      name: "Shristi Sharma",
      role: "Full Stack Developer",
      image: shristiimg,
      bgSize: "contain",
    },
    {
      name: "Moxit Rewar",
      role: "Full Stack Developer",
      image: moxitimg,
      bgSize: "contain",
    },
    {
      name: "Saksham Shakya",
      role: "UI/UX Designer",
      image: sakshamimg,
      bgSize: "contain",
    },
    {
      name: "Prakriti",
      role: "Frontend Developer",
      image: prakritiimg,
      bgSize: "contain",
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
              backgroundSize: dev.bgSize, // Apply the custom backgroundSize
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="credits-card-info">
              <h3 className="credits-card-name">{dev.name}</h3>
              <p className="credits-card-role">{dev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsSection;
