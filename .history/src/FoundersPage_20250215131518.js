import React from "react";
import { motion } from "framer-motion";
import "./FoundersPage.css";

const founders = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    image: "/images/alex.jpg",
    linkedin: "https://linkedin.com/in/alexjohnson",
    bio: "Passionate about connecting communities through fresh produce and technology.",
  },
  {
    name: "Jamie Lee",
    role: "CTO & Co-Founder",
    image: "/images/jamie.jpg",
    linkedin: "https://linkedin.com/in/jamielee",
    bio: "Bringing cutting-edge solutions to local food distribution.",
  },
];

const FoundersPage = () => {
  return (
    <div className="founders-container">
      {/* Animated Background */}
      <div className="background-animation"></div>

      {/* Header Section */}
      <div className="header-section">
        <motion.h2
          className="gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Founders
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our team is dedicated to revolutionizing the way communities connect through local produce.
        </motion.p>
      </div>

      {/* Founders Section */}
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="founder-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div
              className="founder-image"
              style={{ backgroundImage: `url(${founder.image})` }}
            ></div>
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <motion.p
              className="founder-bio"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {founder.bio}
            </motion.p>
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
