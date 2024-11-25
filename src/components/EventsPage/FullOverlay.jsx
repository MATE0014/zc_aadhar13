import React from "react";
import "./FullOverlay.css"; // We'll define the CSS for the overlay here

const FullOverlay = ({ message, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{message}</h2>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FullOverlay;
