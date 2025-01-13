import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Section */}
      <section className="founders-hero">
        <h1 className="founders-hero-title">Meet Our Founders</h1>
        <h2 className="founders-hero-subtitle">Visionaries Leading the Way</h2>
        <p className="hero-paragraph">
          Discover the brilliant minds driving our innovation. Their passion and
          expertise push us toward a brighter future.
        </p>
        <button className="hero-button">Explore Their Journey</button>

        {/* Abstract Shapes */}
        <div className="abstract-shape shape1"></div>
        <div className="abstract-shape shape2"></div>
        <div className="abstract-shape shape3"></div>
      </section>

      {/* Founders Section */}
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <div className="founder-image-container">
            <img
              src="/abraham.png"
              alt="Founder 1"
              className="founder-image"
            />
          </div>
          <h2 className="founder-name">Founder 1</h2>
          <h3 className="founder-title">CEO & Visionary</h3>
          <p className="founder-bio">
            A visionary innovator leading the company to groundbreaking heights
            with unparalleled creativity.
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
          <h3 className="founder-title">COO & Strategist</h3>
          <p className="founder-bio">
            A strategic genius orchestrating seamless execution of innovative
            ideas with a focus on excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
