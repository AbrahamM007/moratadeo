import React from "react";
import { motion } from "framer-motion";
import "./FoundersPage.css"; // Import the CSS file

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
        <button className="gradient-button">Learn More</button>
      </div>
      
      {/* Founders Section */}
      <div className="founders-grid">
        {[1, 2, 3].map((founder, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="founder-card"
          >
            <div className="founder-image"></div> 
            <h3 className="founder-name">Founder Name</h3>
            <p className="founder-role">Founder Role</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
