import React, { useState, useEffect } from "react";
import "./DesignPhaseSection.css";

const DesignPhaseSection = () => {
  const phases = [
    {
      title: "Schedule a Discovery Call",
      description: "Outline your vision, goals, and plan for your custom website.",
      icon: "📞",
      gradient: "linear-gradient(135deg, #007bff, #00bfff)",
    },
    {
      title: "Create Your Brand",
      description: "Craft unique designs and build a brand that resonates.",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #ff6f61, #ffb400)",
    },
    {
      title: "Build Your Dream Site",
      description: "Develop a website perfectly tailored to your needs.",
      icon: "💻",
      gradient: "linear-gradient(135deg, #6a11cb, #2575fc)",
    },
    {
      title: "Launch to the World",
      description: "Go live with SEO, analytics, and support tools.",
      icon: "🚀",
      gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    },
  ];

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhaseIndex((prevIndex) => (prevIndex + 1) % phases.length);
    }, 8000); // Transition every 8 seconds
    return () => clearInterval(intervalId);
  }, [phases.length]);

  const currentPhase = phases[currentPhaseIndex];

  return (
    <div className="single-phase-container">
      <section className={`phase-section phase-${currentPhaseIndex}`}>
        <div className="phase-content">
          <div className="icon" style={{ background: currentPhase.gradient }}>
            {currentPhase.icon}
          </div>
          <h3>{currentPhase.title}</h3>
          <p>{currentPhase.description}</p>
        </div>
      </section>
      <div className="phase-navigation">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentPhaseIndex ? 'active' : ''}`}
            onClick={() => setCurrentPhaseIndex(index)}
            style={{ background: phase.gradient }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DesignPhaseSection;