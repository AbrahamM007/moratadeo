import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FeaturesPage.css";
import "./FeaturesIndividualPage.css";

const featureData = [
  {
    id: "photography",
    title: "Photography",
    description: "Capture moments with professional-grade photography.",
    detail: "Explore high-resolution galleries and creative storytelling.",
    icon: "📷",
    heroColor: "linear-gradient(135deg, #ff7eb3, #ffb400)",
    interactiveDemo: "Drag to explore our gallery!",
    youtubeId: "xzlD3tUOKnw", // Replace with actual ID
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Create responsive, dynamic websites.",
    detail: "Experience prototypes of captivating website designs.",
    icon: "🌐",
    heroColor: "linear-gradient(135deg, #007bff, #00d4ff)",
    interactiveDemo: "Hover to see the magic of web design.",
    youtubeId: "GFCBokDHmN4",
  },
  {
    id: "app-development",
    title: "App Design & Development",
    description: "User-friendly apps for all platforms.",
    detail: "Dive into innovative app designs and prototypes.",
    icon: "📱",
    heroColor: "linear-gradient(135deg, #ffb400, #00ff9d)",
    interactiveDemo: "Tap to simulate app features.",
    youtubeId: "GFCBokDHmN4",
  },
  {
    id: "brand-development",
    title: "Brand Development",
    description: "Build a unique brand identity.",
    detail: "Discover how your brand connects with audiences.",
    icon: "🏷️",
    heroColor: "linear-gradient(135deg, #ff7eb3, #007bff)",
    interactiveDemo: "Click to generate branding ideas.",
    youtubeId: "ozMCb0wOnMU",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Innovating the future with AI and ML solutions.",
    detail: "Implement intelligent systems that learn and adapt.",
    icon: "🤖",
    heroColor: "linear-gradient(135deg, #00ff9d, #007bff)",
    interactiveDemo: "Interact with our AI simulation.",
    youtubeId: "v1I_EZQKC_U",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    description: "Designing scalable and robust cloud infrastructures.",
    detail: "Leverage cloud solutions for reliable service delivery.",
    icon: "☁️",
    heroColor: "linear-gradient(135deg, #00d4ff, #ffb400)",
    interactiveDemo: "Explore our cloud architecture models.",
    youtubeId: "N0SYCyS2xZA",
  },
  {
    id: "server-side",
    title: "Server-Side Development",
    description: "Robust backend solutions for seamless experiences.",
    detail: "Build efficient and scalable server-side applications.",
    icon: "💾",
    heroColor: "linear-gradient(135deg, #ff7eb3, #00d4ff)",
    interactiveDemo: "Experience our server simulations.",
    youtubeId: "QSEDr2e1gSQ",
  },
  {
    id: "vr-ar",
    title: "VR & AR Experiences",
    description: "Step into immersive virtual and augmented reality.",
    detail: "Engage with interactive 3D environments and augmented overlays.",
    icon: "🕶️",
    heroColor: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    interactiveDemo: "Put on your headset to explore VR worlds.",
    youtubeId: "58PC1nocuY0",
  },
  // {
  //   id: "blockchain",
  //   title: "Blockchain Solutions",
  //   description: "Secure and transparent decentralized systems.",
  //   detail: "Implement smart contracts and blockchain networks.",
  //   icon: "⛓️",
  //   heroColor: "linear-gradient(135deg, #00ff9d, #ff7eb3)",
  //   interactiveDemo: "Interact with our blockchain simulator.",
  //   youtubeId: "YOUR_BLOCKCHAIN_VIDEO_ID",
  // },
  // {
  //   id: "cybersecurity",
  //   title: "Cybersecurity",
  //   description: "Protecting digital assets with cutting-edge techniques.",
  //   detail: "Discover robust security protocols and threat mitigation.",
  //   icon: "🔒",
  //   heroColor: "linear-gradient(135deg, #ff4e50, #f9d423)",
  //   interactiveDemo: "Test out our security vulnerability scanner.",
  //   youtubeId: "YOUR_CYBERSECURITY_VIDEO_ID",
  // },
  // {
  //   id: "gaming",
  //   title: "Game Development",
  //   description: "Creating immersive gaming experiences.",
  //   detail: "Dive into interactive demos and gameplay prototypes.",
  //   icon: "🎮",
  //   heroColor: "linear-gradient(135deg, #f12711, #f5af19)",
  //   interactiveDemo: "Play a mini-game to see our capabilities.",
  //   youtubeId: "YOUR_GAMING_VIDEO_ID",
  // },
  // {
  //   id: "iot",
  //   title: "IoT Solutions",
  //   description: "Connecting devices for a smarter future.",
  //   detail: "Integrate hardware and software for seamless IoT systems.",
  //   icon: "🔌",
  //   heroColor: "linear-gradient(135deg, #43cea2, #185a9d)",
  //   interactiveDemo: "Simulate IoT device interactions.",
  //   youtubeId: "YOUR_IOT_VIDEO_ID",
  // },
];

const featuresList = featureData.map(({ id, title, icon, description }) => ({
  id,
  title,
  icon,
  description,
}));

export const FeaturePage = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const feature = featureData.find((f) => f.id === featureId);
  const [scrollY, setScrollY] = useState(0);

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver effect for autoplaying video when in view
  useEffect(() => {
    const videoContainer = document.querySelector(".video-container");
    let observer;
    if (videoContainer && feature?.youtubeId) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const iframe = videoContainer.querySelector("iframe");
              if (iframe && !iframe.src.includes("autoplay=1")) {
                const separator = iframe.src.includes("?") ? "&" : "?";
                iframe.src = `${iframe.src}${separator}autoplay=1&mute=1`;
              }
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the container is visible
      );
      observer.observe(videoContainer);
    }
    return () => {
      if (observer && videoContainer) observer.unobserve(videoContainer);
    };
  }, [feature?.youtubeId]);

  if (!feature) {
    return <div className="feature-detail">Feature not found.</div>;
  }

  return (
    <div className="feature-page">
      {/* Particle Background Overlay */}
      <div className="particle-overlay"></div>

      {/* Hero Section */}
      <div
        className="feature-hero"
        style={{
          background: feature.heroColor,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <h1 className="feature-title">{feature.title}</h1>
        <p className="feature-subtitle">{feature.description}</p>
        <div className="scroll-indicator">↓ Scroll Down</div>
        <div className="abstract-shape"></div>
        {/* Additional Neon Orbs for extra flair */}
        <div className="neon-orb orb-top-left"></div>
        <div className="neon-orb orb-bottom-right"></div>
      </div>

      {/* Interactive Section */}
      <div className="interactive-section">
        <h2>Interactive Demo</h2>
        <p>{feature.interactiveDemo}</p>
        <div className="interactive-box">
          {feature.youtubeId ? (
            <div className="video-container">
              <iframe
                className="youtube-video"
                src={`https://www.youtube.com/embed/${feature.youtubeId}`}
                title={`${feature.title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="interactive-placeholder detail-icon">
              {feature.icon}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="feature-content">
        <h2>What Makes It Special?</h2>
        <p>{feature.detail}</p>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back to Features
      </button>

      {/* Floating Icons */}
      <div
        className="floating-icon"
        style={{ top: `${scrollY * 0.3}px`, left: "10%" }}
      >
        {feature.icon}
      </div>
      <div
        className="floating-icon"
        style={{ top: `${scrollY * 0.5}px`, right: "15%" }}
      >
        {feature.icon}
      </div>
    </div>
  );
};

export const FeaturesPage = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (id) => {
    navigate(`/features/${id}`);
  };

  return (
    <div className="features-container">
      <div className="interactive-background"></div>
      <div className="features-header">
        <h1 className="gradient-heading">Explore Our Expertise</h1>
        <p>Click on a feature to dive deeper into what we offer!</p>
      </div>
      <div className="features-grid">
        {featuresList.map((feature) => (
          <div
            key={feature.id}
            className="feature-card"
            onClick={() => handleFeatureClick(feature.id)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
