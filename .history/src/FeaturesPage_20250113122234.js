import React, { useState, useEffect, useRef } from "react";
import "./FeaturesPage.css";

const featureSections = [
  {
    id: "website-development",
    title: "Website/App Development & Design",
    features: [
      {
        name: "Dynamic UI/UX Design",
        image: "ui-ux.jpg", // Replace with your actual image path
      },
      {
        name: "Rapid Development",
        image: "rapid-dev.jpg", // Replace with your actual image path
      },
      {
        name: "Seamless Launch",
        image: "seamless-launch.jpg", // Replace with your actual image path
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    youtubeId: "xzlD3tUOKnw", // Photography YouTube video ID
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    youtubeId: "v1I_EZQKC_U", // AI & Machine Learning YouTube video ID
  },
  {
    id: "vr-ar",
    title: "Virtual Reality & Augmented Reality",
    youtubeId: "58PC1nocuY0", // VR & AR YouTube video ID
  },
];

const FeaturesPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sectionRefs.current.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="features-page">
      <div className="features-indicators">
        {featureSections.map((_, index) => (
          <div
            key={index}
            className={`indicator ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
          ></div>
        ))}
      </div>
      {featureSections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className="feature-section"
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <h2 className="gradient-text">{section.title}</h2>
          <div className="feature-content">
            {section.features &&
              section.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="feature-image"
                  />
                  <p className="feature-name">{feature.name}</p>
                </div>
              ))}
            {section.youtubeId && (
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${section.youtubeId}`}
                  title={section.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesPage;
