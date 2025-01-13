import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./InfoSection.css";
import infoImage from "./phone.JPG"; // Replace with your image

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-wrapper">
        <div className="info-image-container">
          <div className="info-gradient-shape"></div>
          <img src={infoImage} alt="Info" />
        </div>
        <div className="info-content">
          <h2>
            Your Vision, <span>Our Expertise</span>
          </h2>
          <p>
            Empower your message with a platform that stands out. With innovative
            tools and creative solutions, we’re here to ensure your success.
          </p>
          <div className="info-cta">
            {/* Replace buttons with Link components */}
            <Link to="/features" className="info-button">
              Discover More
            </Link>
            <Link to="https://calendly.com/mora78606/30min?month=2025-01" className="info-outline-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
