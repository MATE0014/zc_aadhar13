import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import zirconLogo from "/images/zircon logo.webp";

const Navbar = () => {
  const eventsRef = useRef(null); // Ref for the EVENTS section
  const navigate = useNavigate(); // React Router navigation

  const handleEventsClick = () => {
    navigate("/events"); // Navigate to the Events page
    setTimeout(() => {
      // Scroll to the desired section after navigation
      const eventsSection = document.getElementById("target-section");
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleAadharClick = () => {
    navigate("/events"); // Navigate to the Events page
    setTimeout(() => {
      // Scroll to the Aadhar section after navigation
      const aadharSection = document.getElementById("aadhar-text");
      if (aadharSection) {
        aadharSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={zirconLogo} alt="Zircon Club Logo" className="logo-image" />
        </Link>
      </div>
      {/* Right: Navigation Menu */}
      <ol className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            HOME
          </Link>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={handleEventsClick}>
            EVENTS
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={handleAadharClick}>
            AADHAR
          </button>
        </li>
        <li className="navbar-item">
          <Link to="/registration" className="navbar-link">
            REGISTRATION
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
