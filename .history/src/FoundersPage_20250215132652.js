import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./FoundersPage.css";

const FoundersPage = () => {
  const founders = [
    {
      name: "Abraham Mora-Tadeo",
      role: "CEO & Visionary",
      image: "abraham.jpg')",
    },
    {
      name: "Sabina Cervantes",
      role: "CTO & Innovator",
      image: "url('https://source.unsplash.com/random/800x800/?entrepreneur,woman')",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="founders-container">
      {/* Floating Particles Background */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30 },
            color: { value: ["#4ADE80", "#3B82F6", "#F59E0B"] },
            opacity: { value: 0.5 },
            size: { value: 1 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
        }}
        className="particles"
      />

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
            transition={{ duration: 5, repeat: Infinity }}
          >
            Meet The Visionaries
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Revolutionizing community agriculture through
            <br />
            <span className="highlight-text">innovation & sustainability</span>
          </motion.p>
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
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
            className="founder-card"
          >
            <div 
              className="founder-image"
              style={{ backgroundImage: founder.image }}
            >
              <motion.div 
                className="social-overlay"
                initial={{ y: 100 }}
                whileHover={{ y: 0 }}
              >
                {[FaLinkedin, FaTwitter, FaGithub].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="social-icon" />
                  </motion.a>
                ))}
              </motion.div>
              <div className="image-shimmer"></div>
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
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;