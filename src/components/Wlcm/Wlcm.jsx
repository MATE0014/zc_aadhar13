import React from "react";
import "./Wlcm.css";
import backgroundImg from "/images/logobackground.webp";
import logoImg from "/images/Aadhar Logo.webp";

const Wlcm = () => {
  return (
    <div
      className="logo"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Image (logo) */}
      <img src={logoImg} alt="Logo" />
    </div>
  );
};

export default Wlcm;
