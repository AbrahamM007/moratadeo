import React, { useState, useEffect } from "react";
import "./DesignPhaseSection.css";

const DesignPhaseSection = () => {
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
    }, 8000); // Change phase every 8 seconds

    return () => clearInterval(intervalId);
  }, [phases.length]);

  const currentPhase = phases[currentPhaseIndex];

  return (
    <section className={`phase-section phase-${currentPhaseIndex}`}>
      <div className="phase-overlay"></div>
      <div className="phase-content">
        <div className="icon">{currentPhase.icon}</div>
        <h3>{currentPhase.title}</h3>
        <p>{currentPhase.description}</p>
      </div>
    </section>
  );
};

export default DesignPhaseSection;
