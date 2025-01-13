import React, { useState, useEffect } from "react";
import "./.css";

const StunningPhaseSection = () => {
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
    <div className="stunning-phase-container">
      <header className="stunning-header">
        <h1>Your Stunning Journey</h1>
        <p>Follow these phases to achieve your perfect website.</p>
      </header>

      <div className="stunning-phase-grid">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`phase-card ${index === currentPhaseIndex ? "active" : ""}`}
            onClick={() => setCurrentPhaseIndex(index)}
          >
            <div className="card-content">
              <div className="phase-icon">{phase.icon}</div>
              <h2 className="phase-title">{phase.title}</h2>
              <p className="phase-description">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="stunning-phase-dots">
        {phases.map((_, index) => (
          <span
            key={index}
            className={`phase-dot ${index === currentPhaseIndex ? "active" : ""}`}
            onClick={() => setCurrentPhaseIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StunningPhaseSection;
