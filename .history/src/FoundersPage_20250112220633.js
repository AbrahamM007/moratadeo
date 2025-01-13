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
            Innovating, inspiring, and driving the future of our company.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <div className="founder-info">
            <h2 className="founder-name">Founder 1</h2>
            <h3 className="founder-title">CEO & Co-Founder</h3>
            <p className="founder-bio">
              Founder 1 brings over a decade of visionary leadership to the
              team. Their innovative thinking and dedication to excellence have
              redefined our industry.
            </p>
            <blockquote className="founder-quote">
              "Our mission is to empower people to achieve the extraordinary."
            </blockquote>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <div className="founder-info">
            <h2 className="founder-name">Founder 2</h2>
            <h3 className="founder-title">COO & Co-Founder</h3>
            <p className="founder-bio">
              With a talent for operations and strategy, Founder 2 ensures
              every aspect of the business runs smoothly. Their passion for
              collaboration fuels our success.
            </p>
            <blockquote className="founder-quote">
              "Success is measured by the impact we create for others."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
