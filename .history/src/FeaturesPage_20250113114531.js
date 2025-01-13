import React, { useEffect, useState } from "react";
import "./FeaturesPage.css";

const featureData = [
  {
    id: "photography",
    title: "Photography",
    description: "Capture moments with professional-grade photography.",
    detail: "Explore high-resolution galleries and creative storytelling.",
    icon: "📷",
    heroColor: "linear-gradient(135deg, #ff7eb3, #ffb400)",
    youtubeId: "xzlD3tUOKnw",
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Create responsive, dynamic websites.",
    detail: "Experience prototypes of captivating website designs.",
    icon: "🌐",
    heroColor: "linear-gradient(135deg, #007bff, #00d4ff)",
    youtubeId: "GFCBokDHmN4",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Innovating the future with AI and ML solutions.",
    detail: "Implement intelligent systems that learn and adapt.",
    icon: "🤖",
    heroColor: "linear-gradient(135deg, #00ff9d, #007bff)",
    youtubeId: "v1I_EZQKC_U",
  },
  // Add more features as needed...
];

const FeaturesPage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="features-page">
      <div className="features-header">
        <h1>Explore Our Expertise</h1>
        <p>Discover all the amazing services we offer in one place!</p>
      </div>
      {featureData.map((feature) => (
        <section
          key={feature.id}
          id={feature.id}
          className="feature-section"
          style={{
            background: feature.heroColor,
          }}
        >
          <div className="feature-content">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <p>{feature.detail}</p>
            {feature.youtubeId && (
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${feature.youtubeId}`}
                  title={feature.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeaturesPage;
