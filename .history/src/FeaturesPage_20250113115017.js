import React from "react";
import "./FeaturesPage.css";

const featureSections = [
  {
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
    title: "Photography",
    videoPlaceholder: true,
  },
  {
    title: "AI & Machine Learning",
    videoPlaceholder: true,
  },
  {
    title: "Virtual Reality & Augmented Reality",
    videoPlaceholder: true,
  },
  {
    title: "Brand Development | Cloud Engineering | Server-Side Development",
    placeholders: ["Brand Development", "Cloud Engineering", "Server-Side Development"],
  },
];

const FeaturesPage = () => {
  return (
    <div className="features-page">
      {featureSections.map((section, index) => (
        <div key={index} className="feature-section">
          <h2>{section.title}</h2>
          <div className="feature-content">
            {section.features &&
              section.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="feature-image"
                  />
                  <p>{feature.name}</p>
                </div>
              ))}
            {section.videoPlaceholder && (
              <div className="video-placeholder">YouTube Video</div>
            )}
            {section.placeholders &&
              section.placeholders.map((placeholder, idx) => (
                <div key={idx} className="placeholder-card">
                  {placeholder}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesPage;
