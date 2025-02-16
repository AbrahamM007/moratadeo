import React, { useEffect } from "react";
import "./RoadmapSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection = () => {
  const steps = [
    { title: "Discover", description: "Aligning vision with strategic goals" },
    { title: "Strategize", description: "Crafting success blueprints" },
    { title: "Design", description: "Creating digital masterpieces" },
    { title: "Launch", description: "Global deployment executed flawlessly" },
    { Title: "Evolve", description: "Continuous innovation & growth" },
  ];

  useEffect(() => {
    gsap.utils.toArray(".roadmap-step").forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: i * 0.3,
        rotateX: -20,
        transformOrigin: "left center",
      });
    });

    gsap.to(".timeline-path", {
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      strokeDashoffset: 0,
      duration: 2,
    });
  }, []);

  return (
    <section className="roadmap-section">
      <h2 className="holographic-heading">
        <span className="glitch-text">Journey</span> Through Innovation
      </h2>
      
      <div className="roadmap-container">
        <svg className="timeline" viewBox="0 0 10 1000">
          <path 
            className="timeline-path"
            d="M5 0 V1000"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>

        {steps.map((step, index) => (
          <div 
            className="roadmap-step"
            key={index}
            data-index={index}
          >
            <div className="step-orb">{index + 1}</div>
            <div className="holographic-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="energy-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;