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
    <section className="design-phase-section">
      <h2 className="section-title">
        <span>Your Path</span> to Success
      </h2>
      <div className="phase-container">
        {phases.map((phase, index) => (
          <div className={`phase-card card-${index + 1}`} key={index}>
            <div className="icon">{phase.icon}</div>
            <div className="content">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignPhaseSection;
