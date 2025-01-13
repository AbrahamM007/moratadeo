import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const logos = [
    "logo1.png", // Replace with your actual logo image paths
    "logo2.png",
    "logo3.png",
    "logo4.svg",
    "logo5.svg",
    "logo6.svg",
  ];

  return (
    <section className="testimonials-section">
      <div className="content-wrapper">
        <h2>Trusted by companies, ministries, and businesses alike.</h2>
        <div className="carousel">
          <div className="carousel-track">
            {logos.map((logo, index) => (
              <div className="carousel-item" key={index}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <div className="carousel-item" key={`dup-${index}`}>
                <img src={logo} alt={`Logo Duplicate ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
