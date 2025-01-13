import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-content">
        <h1>
          Build the <span>Future</span> with Us
        </h1>
        <p>
          Empower your vision with world-class design, cutting-edge technology,
          and innovation that makes an impact. Let’s create something amazing.
        </p>
        {/* Use Link component for routing */}
        <Link to="https://calendly.com/mora78606/30min" className="hero-action-button">
          Get Started
        </Link>
      </div>
      <div className="hero-background-elements">
        <div className="background-circle blue-circle"></div>
        <div className="background-circle green-circle"></div>
        <div className="background-circle yellow-circle"></div>
      </div>
    </section>
  );
};

export default HeroSection;
