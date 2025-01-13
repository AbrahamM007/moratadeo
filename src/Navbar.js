import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './mora.svg';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo-link">
        <div className="navbar-logo-container">
          <div className="navbar-logo-icon">
          <img src={logo} alt="Logo" className="navbar-logo-image" />

          </div>
          <span className="navbar-logo-text">Mora Tadeo</span>
        </div>
      </Link>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
      </button>
      <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/features" onClick={toggleMenu}>
          Features
        </Link>
        <Link to="/pricing" onClick={toggleMenu}>
          Pricing
        </Link>
        <a href="https://calendly.com/mora78606/30min?month=2025-01" onClick={toggleMenu}>
          Contact
        </a>
        <a href="https://calendly.com/mora78606/30min?month=2025-01" className="navbar-highlight" onClick={toggleMenu}>
          Get a Demo
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
