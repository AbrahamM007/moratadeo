import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./FoundersPage.css";

const FoundersPage = () => {
  const founders = [
    {
      name: "Alex Chen",
      role: "CEO & Visionary",
      bio: "Alex is a visionary leader with a passion for sustainable agriculture.",
      image: "url('https://source.unsplash.com/random/800x800/?entrepreneur,man')",
    },
    {
      name: "Samantha Wu",
      role: "CTO & Innovator",
      bio: "Samantha is a tech enthusiast who believes in the power of technology to transform agriculture.",
      image: "url('https://source.unsplash.com/random/800x800/?entrepreneur,woman')",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: { value: 40 },
      color: { 
        value: ["#ffffff", "#e5e7eb", "#94a3b8"],
        animation: {
          enable: true,
          speed: 20,
          sync: false
        }
      },
      opacity: { value: { min: 0.1, max: 0.3 } },
      size: { value: { min: 0.5, max: 1.5 } },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1 },
        direction: "none",
        outModes: "bounce",
        trail: {
          enable: true,
          length: 4,
          fillColor: "#ffffff"
        }
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: {
          polygon: { sides: 5 }
        }
      },
      wobble: {
        enable: true,
        distance: 3,
        speed: 0.5
      }
    }
  };

  return (
    <div className="founders-container">
      {/* Metallic Particles */}
      <div className="metallic-dust">
        <Particles
          init={particlesInit}
          options={particlesConfig}
        />
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}

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