import React from "react";
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

  return (
    <div className="scroll-container">
      <h2 className="section-title">
        <span>Your Path</span> to Success
      </h2>
      {phases.map((phase, index) => (
        <section className="phase-section" key={index}>
          <div className="phase-content">
            <div className="icon">{phase.icon}</div>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DesignPhaseSection;
