import React, { useState, useEffect } from "react";
import "./Wlcm.css";
import backgroundImg from "/images/logobackground.webp";
import logoImg from "/images/Aadhar Logo.webp";

const Wlcm = () => {
  const [showPrizePool, setShowPrizePool] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrizePool(true);
    }, 3500); // Delay of 3.5 seconds

    return () => clearTimeout(timer); // Cleanup function
  }, []);

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

      {/* Prize Pool with conditional rendering */}
      {showPrizePool && (
        <div className="prize-pool">Total Prize Pool Worth ₹40,000</div>
      )}
    </div>
  );
};

export default Wlcm;
