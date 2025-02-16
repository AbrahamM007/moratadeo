import React, { useState, useEffect } from "react";
import "./DesignPhaseSection.css";

const DesignPhaseSection = () => {
  const phases = [
    {
      title: "Discovery & Strategy",
      description: "Deep dive into your vision and business objectives",
      icon: "🔍",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      particles: 20,
      parallaxSpeed: 0.2,
    },
    {
      title: "Brand Crafting",
      description: "Design system development and visual identity creation",
      icon: "✨",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      particles: 25,
      parallaxSpeed: 0.3,
    },
    {
      title: "Digital Architecture",
      description: "Full-stack development with cutting-edge technologies",
      icon: "🧩",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      particles: 30,
      parallaxSpeed: 0.4,
    },
    {
      title: "Global Launch",
      description: "Performance optimization and worldwide deployment",
      icon: "🌍",
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      particles: 35,
      parallaxSpeed: 0.5,
    },
  ];

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhaseIndex((prev) => (prev + 1) % phases.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [phases.length]);

  return (
    <div className="phase-container">
      {/* Parallax Background */}
      <div className="parallax-background" 
           style={{ background: phases[currentPhaseIndex].gradient }}>
        <div className="parallax-layer" data-speed="0.1"></div>
        <div className="parallax-layer" data-speed="0.3"></div>
        <div className="parallax-layer" data-speed="0.5"></div>
      </div>

      {/* Floating Particles */}
      <div className="particle-field">
        {[...Array(phases[currentPhaseIndex].particles)].map((_, i) => (
          <div key={i} className="particle" 
               style={{ 
                 animationDelay: `${i * 0.1}s`,
                 background: phases[currentPhaseIndex].gradient 
               }} />
        ))}
      </div>

      {/* Main Content */}
      <div className="phase-content-wrapper">
        <div className="holographic-card">
          <div className="phase-icon" 
               style={{ background: phases[currentPhaseIndex].gradient }}>
            {phases[currentPhaseIndex].icon}
          </div>
          <h3>{phases[currentPhaseIndex].title}</h3>
          <p>{phases[currentPhaseIndex].description}</p>
        </div>
      </div>

      {/* Futuristic Navigation */}
      <div className="phase-progress">
        {phases.map((_, i) => (
          <div key={i} 
               className={`progress-line ${i === currentPhaseIndex ? 'active' : ''}`}
               onClick={() => setCurrentPhaseIndex(i)}
               style={{ '--gradient': phases[i].gradient }} />
        ))}
      </div>
    </div>
  );
};

export default DesignPhaseSection;