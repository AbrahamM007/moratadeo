import React from "react";
import "./PricingPage.css";

const pricingPlans = [
  {
    title: "Basic",
    price: "399",
    features: ["1 Project", "Basic Support", "5 GB Storage"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Pro",
    price: "$799",
    features: ["5 Projects", "Priority Support", "50 GB Storage"],
    buttonText: "Most Popular",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited Projects", "24/7 Support", "Unlimited Storage"],
    buttonText: "Contact Us",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Header Section */}
      <div className="pricing-header">
        <h1 className="gradient-text">Choose Your Plan</h1>
        <p>Tailored pricing options to meet your business needs.</p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && <div className="badge">Most Popular</div>}
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {/* Button replaced with a link */}
            <a
              href="https://calendly.com/mora78606/30min?month=2025-01"
              className="pricing-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="floating-elements">
        <div className="circle circle-blue"></div>
        <div className="circle circle-pink"></div>
        <div className="circle circle-orange"></div>
      </div>
    </div>
  );
};

export default PricingPage;
