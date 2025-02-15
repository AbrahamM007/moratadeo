import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./FoundersPage.css";

const founders = [
  {
    name: "John Doe",
    title: "Co-Founder & CEO",
    image: "https://source.unsplash.com/500x300/?man,ceo",
    description: "Passionate about innovation and leadership in the tech space.",
  },
  {
    name: "Jane Smith",
    title: "Co-Founder & CTO",
    image: "https://source.unsplash.com/500x300/?woman,tech",
    description: "Tech visionary focused on building scalable solutions.",
  },
  {
    name: "Mark Johnson",
    title: "Head of Design",
    image: "https://source.unsplash.com/500x300/?designer,man",
    description: "Crafting visually stunning and user-friendly experiences.",
  },
];

const FoundersPage = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="founders-container">
      <div className="founders-header">
        <div className="text-section">
          <h2 className="gradient-text">Meet Our Founders</h2>
          <p className="founders-description">
            Our leadership team is dedicated to driving innovation and creating a meaningful impact.
          </p>
          <button className="view-more-button">View More</button>
        </div>
        <div className="scroll-controls">
          <button className="scroll-button" onClick={scrollLeft}>←</button>
          <button className="scroll-button" onClick={scrollRight}>→</button>
        </div>
      </div>
      <div className="founders-list" ref={scrollRef}>
        {founders.map((founder, index) => (
          <motion.div className="founder-card" key={index} whileHover={{ scale: 1.05 }}>
            <img src={founder.image} alt={founder.name} className="founder-image" />
            <div className="play-button">▶</div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-title">{founder.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
