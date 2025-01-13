import React from "react";
import "./FounderSection.css";
import founderVideo from "./background-video.mp4"; // Replace with your actual video file

const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="video-wrapper">
        <video className="video-background" autoPlay loop muted>
          <source src={founderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="content">
        <h1>Meet Our Founder</h1>
        <p>
          Our founder’s vision is to empower businesses, organizations, and
          individuals to create platforms that truly make an impact. With years
          of experience in the digital space, they have led with innovation,
          creativity, and a passion for helping others succeed.
        </p>
      </div>
    </section>
  );
};

export default FounderSection;
