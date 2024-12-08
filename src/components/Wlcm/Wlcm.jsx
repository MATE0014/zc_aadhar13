import React from "react";
import "./Wlcm.css";
import backgroundImg from "../../images/logobackground.jpeg";
import logoImg from "../../images/Aadhar Logo.png"; // Update path as per your project

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
