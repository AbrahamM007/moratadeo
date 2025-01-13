import React, { useState, useEffect } from "react";
import "./EnhancedPhaseSection.css";

const EnhancedPhaseSection = () => {
  const phases = [
    {
      title: "Schedule a Discovery Call",
      description: "Outline your vision, goals, and plan for your custom website.",
      icon: "📞",
    },
    {
      title: "Create Your Brand",
      description: "Craft unique designs and build a brand that resonates.",
      icon: "🎨",
    },
    {
      title: "Build Your Dream Site",
      description: "Develop a website perfectly tailored to your needs.",
      icon: "💻",
    },
    {
      title: "Launch to the World",
      description: "Go live with SEO, analytics, and support tools.",
      icon: "🚀",
    },
  ];

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhaseIndex((prevIndex) => (prevIndex + 1) % phases.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [phases.length]);

  return (
    <div className="enhanced-phase-container">
      <header className="phase-header">
        <h1 className="phase-title">Your Journey to a Stunning Website</h1>
      </header>
      <div className="phase-wrapper">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`phase-card ${index === currentPhaseIndex ? "active" : ""}`}
            onClick={() => setCurrentPhaseIndex(index)}
          >
            <div className="phase-icon">{phase.icon}</div>
            <div className="phase-details">
              <h2>{phase.title}</h2>
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="phase-footer">
        <div className="phase-dots">
          {phases.map((_, index) => (
            <span
              key={index}
              className={`phase-dot ${index === currentPhaseIndex ? "active" : ""}`}
              onClick={() => setCurrentPhaseIndex(index)}
            ></span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default EnhancedPhaseSection;
