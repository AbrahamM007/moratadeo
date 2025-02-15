import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1 className="brand-name">Mora Tadeo</h1>
          <p>Empowering your digital transformation.</p>
        </div>

        {/* Links Section */}
        {/* <div className="footer-links">
          <ul>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#custom">Custom Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div> */}

        {/* Social Media Section */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Mora Tadeo. All rights reserved.</p>
        <div className="policies">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
