import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      {/* Hero Banner */}
      <section className="founders-hero">
        <div className="hero-overlay">
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
          <div className="founder-card-inner">
            <img
              src="/path-to-founder1-image.jpg" // Replace with actual image path
              alt="Founder 1"
              className="founder-image"
            />
            <div className="founder-info">
              <h2 className="founder-name">Founder 1</h2>
              <h3 className="founder-title">CEO & Co-Founder</h3>
              <p className="founder-bio">
                With a decade of industry-defining work, Founder 1 combines
                vision, leadership, and innovation to guide the company toward
                excellence.
              </p>
              <blockquote className="founder-quote">
                "Our mission is not just to succeed but to make an impact that
                truly matters."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <div className="founder-card-inner">
            <img
              src="/path-to-founder2-image.jpg" // Replace with actual image path
              alt="Founder 2"
              className="founder-image"
            />
            <div className="founder-info">
              <h2 className="founder-name">Founder 2</h2>
              <h3 className="founder-title">COO & Co-Founder</h3>
              <p className="founder-bio">
                Known for strategic brilliance and operational excellence,
                Founder 2 ensures the seamless execution of the company's bold
                vision.
              </p>
              <blockquote className="founder-quote">
                "True success is measured by the lives we touch and the legacy
                we leave."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
