import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Section */}
      <section className="founders-hero">
        <div className="hero-content">
          <h1 className="founders-hero-title">
            Meet <span>Our Founders</span>
          </h1>
          <p className="founders-hero-subtitle">
            Innovators. Visionaries. Leaders shaping a better tomorrow.
          </p>
        </div>

        {/* Decorative Circles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={`circle circle${index + 1}`}></div>
        ))}
      </section>

      {/* Founders Section */}
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <img
            src="/path-to-founder1-image.jpg" // Replace with actual image path
            alt="Founder 1"
            className="founder-image"
          />
          <h2 className="founder-name">Founder 1</h2>
          <h3 className="founder-title">CEO & Co-Founder</h3>
          <p className="founder-bio">
            With an unrelenting passion for innovation, Founder 1 has paved the
            way for groundbreaking solutions and led the company toward
            excellence.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <img
            src="/path-to-founder2-image.jpg" // Replace with actual image path
            alt="Founder 2"
            className="founder-image"
          />
          <h2 className="founder-name">Founder 2</h2>
          <h3 className="founder-title">COO & Co-Founder</h3>
          <p className="founder-bio">
            As a strategic thinker and operational mastermind, Founder 2 ensures
            the seamless execution of the company's vision while fostering
            collaboration and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
