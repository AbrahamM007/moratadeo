import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Section */}
      <section className="founders-hero">
        <h1 className="founders-hero-title">Meet Our Founders</h1>
        <h2 className="founders-hero-subtitle">Visionaries Shaping the Future</h2>
        <p className="hero-paragraph">
          Discover the inspiring individuals behind our company’s success.
          Their dedication and innovative spirit have led us to new heights.
        </p>
        <button className="hero-button">Explore Our Vision</button>

        {/* Decorative Overlapping Shapes */}
        <div className="decorative-block block1"></div>
        <div className="decorative-block block2"></div>
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
            A pioneer in innovation, Founder 1 has transformed industries with
            their forward-thinking mindset.
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
            With operational brilliance, Founder 2 ensures seamless execution
            of our bold vision.
          </p>
        </div>
      </div>

      <div className="founders-scroll-indicator">
        Scroll to explore more founders →
      </div>
    </div>
  );
};

export default FoundersPage;
