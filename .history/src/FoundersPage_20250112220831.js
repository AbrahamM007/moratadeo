import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Section with Gradient and Circles */}
      <section className="founders-hero">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="hero-content">
          <h1 className="founders-hero-title">Meet Our Visionaries</h1>
          <p className="founders-hero-subtitle">
            Driving innovation, inspiring change, and shaping the future.
          </p>
        </div>
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
            With a decade of industry-defining work, Founder 1 combines vision,
            leadership, and innovation to guide the company toward excellence.
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
            Known for strategic brilliance and operational excellence, Founder
            2 ensures the seamless execution of the company's bold vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
