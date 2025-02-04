import React from "react";
import logoImg from "/images/zircon logo.webp";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-design"></div>
      <div className="container footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo flex items-center">
            <img src={logoImg} alt="Zircon Club" />
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="footer-link">
                Aadhar
              </Link>
            </li>
            <li>
              <Link to="/events" className="footer-link">
                Events
              </Link>
            </li>
            <li>
              <Link to="/registration" className="footer-link">
                Registration
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact-us">
          <h4 className="contact-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>Email: zirconclub@poornima.org</li>
            <li>Phone: +91 6350101543</li>
            <li>Address: Zircon Club, PCE, Jaipur</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
