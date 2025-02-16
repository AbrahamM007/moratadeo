import React from "react";
import "./RoadmapSection.css";

const RoadmapSection = () => {
  const steps = [
    { title: "Discover", description: "Understanding your goals and aligning your vision." },
    { title: "Strategize", description: "Developing a custom roadmap for your success." },
    { title: "Design", description: "Creating visually stunning and functional solutions." },
    { title: "Launch", description: "Seamlessly deploying your platform to the world." },
    { title: "Evolve", description: "Providing continuous support and enhancements." },
  ];

  return (
    <section className="roadmap-section">
      <h2 className="roadmap-heading">
        Your Path, <span>Reimagined</span>
      </h2>
      <div className="roadmap-container">
        {steps.map((step, index) => (
          <div className="roadmap-step" key={index}>
            <div className="step-circle">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
