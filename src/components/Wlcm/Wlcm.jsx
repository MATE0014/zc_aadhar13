import React from "react";
import "./Wlcm.css";
import videoSrc from "../../videos/logobgv.mp4"; // Update path as per your project
import logoImg from "../../images/Aadhar Logo.png"; // Update path as per your project

const Wlcm = () => {
  return (
    <div className="logo">
      {/* Background video */}
      <video src={videoSrc} loop muted autoPlay></video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Image (logo) */}
      <img src={logoImg} alt="Logo" />
    </div>
  );
};

export default Wlcm;
