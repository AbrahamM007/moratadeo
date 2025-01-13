import React from "react";
import "./FoundersPage.css";

// Import images
import founder1Image from "./abraham.png";
import founder2Image from "./IMG_155$.JPG";

// Data for founders
const founders = [
  {
    name: "Founder 1",
    title: "CEO & Visionary",
    bio: "A visionary innovator leading the company to groundbreaking heights with unparalleled creativity.",
    image: founder1Image,
  },
  {
    name: "Founder 2",
    title: "COO & Strategist",
    bio: "A strategic genius orchestrating seamless execution of innovative ideas with a focus on excellence.",
    image: founder2Image,
  },
];

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
        {founders.map((founder, index) => (
          <div className="founder-card" key={index}>
            <div className="founder-image-container">
              <img
                src={founder.image}
                alt={`${founder.name}`}
                className="founder-image"
              />
            </div>
            <h2 className="founder-name">{founder.name}</h2>
            <h3 className="founder-title">{founder.title}</h3>
            <p className="founder-bio">{founder.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
