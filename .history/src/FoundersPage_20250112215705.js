import React from "react";
import "./FoundersPage.css";

const FoundersPage = () => {
  return (
    <div className="founders-page">
      <header className="founders-header">
        <h1 className="founders-title">Meet Our Founders</h1>
        <p className="founders-subtitle">The visionaries behind our success</p>
      </header>

      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <img
            src="/path-to-founder1-image.jpg" // Replace with actual image path
            alt="Founder 1"
            className="founder-image"
          />
          <div className="founder-info">
            <h2 className="founder-name">Founder 1</h2>
            <h3 className="founder-title">CEO & Co-Founder</h3>
            <p className="founder-bio">
              Founder 1 has over 15 years of experience in tech innovation,
              driving our company's vision and leading the team to success.
              Their passion for solving complex problems has made a significant
              impact in the industry.
            </p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <img
            src="/path-to-founder2-image.jpg" // Replace with actual image path
            alt="Founder 2"
            className="founder-image"
          />
          <div className="founder-info">
            <h2 className="founder-name">Founder 2</h2>
            <h3 className="founder-title">COO & Co-Founder</h3>
            <p className="founder-bio">
              With a strong background in operations and strategic planning,
              Founder 2 ensures the company runs smoothly and achieves its
              ambitious goals. They are committed to fostering innovation and
              collaboration across the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersPage;
