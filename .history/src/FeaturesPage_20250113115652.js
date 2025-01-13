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
    youtubeId: "xzlD3tUOKnw", // Photography YouTube video ID
  },
  {
    title: "AI & Machine Learning",
    youtubeId: "v1I_EZQKC_U", // AI & Machine Learning YouTube video ID
  },
  {
    title: "Virtual Reality & Augmented Reality",
    youtubeId: "58PC1nocuY0", // VR & AR YouTube video ID
  },
  {
    title: "Brand Development | Cloud Engineering | Server-Side Development",
    placeholders: ["Brand Development", "Cloud Engineering", "Server-Side Development"],
  },
];

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <div className="features-indicators">
        {featureSections.map((_, index) => (
          <div key={index} className="indicator"></div>
        ))}
      </div>
      {featureSections.map((section, index) => (
        <div key={index} className="feature-section">
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
