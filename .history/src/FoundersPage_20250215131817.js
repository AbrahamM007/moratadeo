import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./FoundersPage.css";

const FoundersPage = () => {
  const founders = [
    {
      name: "Alex Chen",
      role: "CEO & Visionary",
      image: "url('https://source.unsplash.com/random/800x800/?portrait,man')",
    },
    {
      name: "Samantha Wu",
      role: "CTO & Innovator",
      image: "url('https://source.unsplash.com/random/800x800/?portrait,woman')",
    },
  ];

  return (
    <div className="founders-container">
      {/* Animated Background Elements */}
      <div className="animated-blob"></div>
      <div className="animated-blob2"></div>

      {/* Header Section */}
      <motion.div 
        className="header-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.h2 
            className="gradient-text"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Meet Our Visionaries
          </motion.h2>
          <p className="subtitle">
            Pioneering the future of community-driven agriculture through
            <br />
            <span className="highlight-text">technology & sustainability</span>
          </p>
        </div>
      </motion.div>

      {/* Founders Section */}
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="founder-card"
          >
            <div 
              className="founder-image"
              style={{ backgroundImage: founder.image }}
            >
              <div className="social-overlay">
                <motion.a whileHover={{ scale: 1.1 }}><FaLinkedin /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }}><FaTwitter /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }}><FaGithub /></motion.a>
              </div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <motion.div 
                className="accent-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;