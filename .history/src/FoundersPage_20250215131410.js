import React from "react";
import { motion } from "framer-motion";
import "./FoundersPage.css";

const founders = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    image: "/images/alex.jpg",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
  {
    name: "Jamie Lee",
    role: "CTO & Co-Founder",
    image: "/images/jamie.jpg",
    linkedin: "https://linkedin.com/in/jamielee",
  },
];

const FoundersPage = () => {
  return (
    <div className="founders-container">
      {/* Header Section */}
      <div className="header-section">
        <div>
          <h2 className="gradient-text">Meet Our Founders</h2>
          <p className="subtitle">
            Our team is dedicated to revolutionizing the way communities connect through local produce.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="founder-card"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="founder-image"
              style={{ backgroundImage: `url(${founder.image})` }}
            ></div>
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <a href={founder.linkedin} className="linkedin-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
