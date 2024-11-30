import React, { useState } from "react";
import "./Registration.css";
import eventDetails from "./eventDetails";
import regbgv from "../../videos/regbgv.mp4";
import Loader from "../Loader/Loader";

const Registration = () => {
  const [formData, setFormData] = useState({
    event: "",
    college: "",
    teamName: "",
    leaderName: "",
    leaderContact: "",
    leaderEmail: "",
    teamSize: "",
    teamMembers: [],
    transactionId: "",
  });

  const [showRules, setShowRules] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // State to toggle confirmation overlay
  const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);
  const [errors, setErrors] = useState({}); // To store validation errors
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeamMemberChange = (index, value) => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = value;
    setFormData({ ...formData, teamMembers: updatedTeamMembers });
  };

  const validateForm = () => {
    const newErrors = {};
    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "" && key !== "teamMembers") {
        newErrors[key] = "This field is required.";
      }
    });

    // Validate leader contact (must be 10 digits)
    if (!/^\d{10}$/.test(formData.leaderContact)) {
      newErrors.leaderContact = "Contact number must be 10 digits.";
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.leaderEmail)) {
      newErrors.leaderEmail = "Please enter a valid email.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowLoader(true); //loading started
      try {
        const response = await fetch(
          "https://zc-aadhar13-backend.onrender.com/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          console.log("Form Data Submitted Successfully:", formData);
          setShowLoader(false); //loader off - success
          setShowConfirmation(true); // Show confirmation overlay if form is valid
        } else {
          console.error("Failed to submit form data");
          setShowLoader(false); //loader off - err
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        setShowLoader(false); //loader off - err
      }
    }
  };

  const handleTeamSizeChange = (e) => {
    const size = e.target.value;
    setFormData({
      ...formData,
      teamSize: size,
      teamMembers: size > 1 ? Array(parseInt(size) - 1).fill("") : [],
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false); // Close confirmation overlay
    // Optionally reset form data if needed
    setFormData({
      event: "",
      college: "",
      teamName: "",
      leaderName: "",
      leaderContact: "",
      leaderEmail: "",
      teamSize: "",
      teamMembers: [],
      transactionId: "",
    });
  };

  const closePaymentOverlay = () => {
    setShowPaymentOverlay(false); // Close payment overlay
  };

  return (
    <div className="registration-container">
      <video className="background-video" autoPlay loop muted>
        <source src={regbgv} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="content">
        <div className="left-side">
          <h2 className="text-center">Register For AADHAR 13</h2>
        </div>

        <div className="right-side">
          <form className="registration-form" onSubmit={handleSubmit}>
            {/* Pick Event */}
            <div className="form-group">
              <label htmlFor="event">Pick Event:</label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an event
                </option>
                {Object.keys(eventDetails.rules).map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {errors.event && <p className="error">{errors.event}</p>}
            </div>
            {/* View Rules Button */}
            {formData.event && (
              <button
                type="button"
                className="btn-view-rules"
                onClick={() => setShowRules(true)}
              >
                View Rules
              </button>
            )}
            <br />
            <br />
            {/* College/School Name */}
            <div className="form-group">
              <label htmlFor="college">Enter College/School Name:</label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
              {errors.college && <p className="error">{errors.college}</p>}
            </div>

            {/* Team Name */}
            <div className="form-group">
              <label htmlFor="teamName">Enter Team Name:</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
              {errors.teamName && <p className="error">{errors.teamName}</p>}
            </div>

            {/* Team Leader Details */}
            <div className="form-group">
              <label htmlFor="leaderName">Enter Team Leader Name:</label>
              <input
                type="text"
                id="leaderName"
                name="leaderName"
                value={formData.leaderName}
                onChange={handleChange}
                required
              />
              {errors.leaderName && (
                <p className="error">{errors.leaderName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="leaderContact">
                Team Leader's Contact Number:
              </label>
              <input
                type="tel"
                id="leaderContact"
                name="leaderContact"
                value={formData.leaderContact}
                onChange={handleChange}
                required
              />
              {errors.leaderContact && (
                <p className="error">{errors.leaderContact}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="leaderEmail">College Email ID:</label>
              <input
                type="email"
                id="leaderEmail"
                name="leaderEmail"
                value={formData.leaderEmail}
                onChange={handleChange}
                required
              />
              {errors.leaderEmail && (
                <p className="error">{errors.leaderEmail}</p>
              )}
            </div>

            {/* Team Size */}
            {formData.event && (
              <div className="form-group">
                <label htmlFor="teamSize">Select Team Size:</label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleTeamSizeChange}
                  required
                >
                  <option value="" disabled>
                    Select team size
                  </option>
                  {eventDetails.teamSizes[formData.event].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                {errors.teamSize && <p className="error">{errors.teamSize}</p>}
              </div>
            )}

            {/* Team Members */}
            {formData.teamSize > 1 &&
              formData.teamMembers.length > 0 &&
              formData.teamMembers.map((_, index) => (
                <div className="form-group" key={index}>
                  <label htmlFor={`teamMember${index}`}>
                    Enter Team Member {index + 1} Name:
                  </label>
                  <input
                    type="text"
                    id={`teamMember${index}`}
                    value={formData.teamMembers[index]}
                    onChange={(e) =>
                      handleTeamMemberChange(index, e.target.value)
                    }
                    required
                  />
                </div>
              ))}

            <button
              type="button"
              className="btn-pay-here"
              onClick={() => setShowPaymentOverlay(true)}
            >
              Pay Here
            </button>
            <br />
            <br />
            {/* Transaction ID */}
            <div className="form-group">
              <label htmlFor="transactionId">Transaction ID:</label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
              />
              {errors.transactionId && (
                <p className="error">{errors.transactionId}</p>
              )}
            </div>

            <button type="submit" className="btn-submit">
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Overlay for Event Rules */}
      {showRules && (
        <div className="rules-overlay">
          <div className="rules-content">
            <h3>Rules for {formData.event}:</h3>
            <ul>
              {eventDetails.rules[formData.event].map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <button className="close-rules" onClick={() => setShowRules(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Overlay */}
      {showConfirmation && (
        <div className="confirmation-overlay show">
          <div className="confirmation-content">
            <h3>Registration Successful!</h3>
            <p>
              Your registration for the event {formData.event} has been
              confirmed. <br />
              Thank You For Registering For Aadhar 13, We Will Contact You Soon.
            </p>
            <button className="close-confirmation" onClick={closeConfirmation}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Show loader */}
      {showLoader && <Loader />}
      {/* Payment Overlay */}
      {showPaymentOverlay && (
        <div className="payment-overlay">
          <div className="payment-content">
            <h3>Scan QR to Pay</h3>
            <p>
              Please scan the QR code below using any UPI app to complete the
              payment.
            </p>
            <img
              src="../src/images/Aadhar Logo.png"
              alt="QR Code"
              className="qr-code"
            />
            <button className="close-payment" onClick={closePaymentOverlay}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
