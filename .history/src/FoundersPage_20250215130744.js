import React from "react";
import { motion } from "framer-motion";
import "./FoundersPage.css";

const founders = [
  {
    name: "John Doe",
    title: "Co-Founder & CEO",
    image: "https://source.unsplash.com/300x400/?man,ceo",
    description: "Passionate about innovation and leadership in the tech space.",
  },
  {
    name: "Jane Smith",
    title: "Co-Founder & CTO",
    image: "https://source.unsplash.com/300x400/?woman,tech",
    description: "Tech visionary focused on building scalable solutions.",
  },
  {
    name: "Mark Johnson",
    title: "Head of Design",
    image: "https://source.unsplash.com/300x400/?designer,man",
    description: "Crafting visually stunning and user-friendly experiences.",
  },
];

const FoundersPage = () => {
  return (
    <div className="founders-container">
      <h2 className="gradient-text">Meet Our Founders</h2>
      <p className="founders-description">
        Our leadership team is dedicated to driving innovation and creating a meaningful impact.
      </p>
      <div className="founders-list">
        {founders.map((founder, index) => (
          <motion.div
            className="founder-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={founder.image} alt={founder.name} className="founder-image" />
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-title">{founder.title}</p>
              <p className="founder-desc">{founder.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button className="view-more-button" whileHover={{ scale: 1.1 }}>
        View More
      </motion.button>
    </div>
  );
};

export default FoundersPage;
