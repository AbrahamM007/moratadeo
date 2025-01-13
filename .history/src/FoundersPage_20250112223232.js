import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Section */}
      <section className="founders-hero">
        <h1 className="founders-hero-title">Meet Our Founders</h1>
        <h2 className="founders-hero-subtitle">Innovators. Visionaries. Leaders.</h2>
        <p className="hero-paragraph">
          Get to know the brilliant minds behind our vision. Their passion,
          expertise, and commitment to innovation drive us forward every day.
        </p>
        <button className="hero-button">Learn More</button>
      </section>

      {/* Founders Section */}
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <div className="founder-image-container">
            <img
              src="/path-to-founder1-image.jpg"
              alt="Founder 1"
              className="founder-image"
            />
          </div>
          <h2 className="founder-name">Founder 1</h2>
          <h3 className="founder-title">CEO & Co-Founder</h3>
          <p className="founder-bio">
            A trailblazer in innovation, Founder 1 has led the company to
            groundbreaking success through visionary leadership and dedication.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <div className="founder-image-container">
            <img
              src="/path-to-founder2-image.jpg"
              alt="Founder 2"
              className="founder-image"
            />
          </div>
          <h2 className="founder-name">Founder 2</h2>
          <h3 className="founder-title">COO & Co-Founder</h3>
          <p className="founder-bio">
            Founder 2 is the operational mastermind ensuring seamless execution
            of our ambitious goals while fostering a culture of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
