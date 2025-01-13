import React, { useState, useEffect } from "react";
import "./DesignPhase Section.css";

const NextLevelPhaseSection = () => {
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

  const currentPhase = phases[currentPhaseIndex];

  return (
    <div className="next-level-phase-container">
      <header className="next-level-header">
        <h1 className="next-level-title">Your Next-Level Journey</h1>
        <p>Discover the phases that lead to your dream website.</p>
      </header>

      <div className="next-level-stage">
        <div className="phase-preview">
          <div className="phase-icon">{currentPhase.icon}</div>
          <h2 className="phase-preview-title">{currentPhase.title}</h2>
          <p className="phase-preview-description">{currentPhase.description}</p>
        </div>
        <div className="phase-cards">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`phase-card ${index === currentPhaseIndex ? "active" : ""}`}
              onClick={() => setCurrentPhaseIndex(index)}
            >
              <div className="card-content">
                <span className="card-icon">{phase.icon}</span>
                <h3>{phase.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="next-level-footer">
        <div className="navigation-dots">
          {phases.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPhaseIndex ? "active" : ""}`}
              onClick={() => setCurrentPhaseIndex(index)}
            ></span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default NextLevelPhaseSection;
