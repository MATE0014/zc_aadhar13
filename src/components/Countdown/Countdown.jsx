import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate, backgroundVideo }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format time as two digits
  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="countdown">
      {/* Black Overlay */}
      <div className="countdown-overlay"></div>
      {/* Countdown Content (time boxes only) */}
      <div className="timer">
        <div className="time-box">
          <span>{formatTime(timeLeft.days)}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.hours)}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.minutes)}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span>{formatTime(timeLeft.seconds)}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

// Helper Function: Calculate time left
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  return {
    days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
    seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
  };
};

export default Countdown;
