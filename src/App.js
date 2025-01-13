import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import RoadmapSection from "./RoadmapSection";
import DesignPhaseSection from "./DesignPhaseSection";
import HeroBanner from "./HeroBanner";
import Footer from "./Footer";
import PricingPage from "./PricingPage";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component

// Import both FeaturesPage and FeaturePage from the merged file
import { FeaturesPage, FeaturePage } from "./FeaturesPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll resets to top on route change */}
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InfoSection />
                <RoadmapSection />
                {/* <HeroBanner /> */}
                <DesignPhaseSection />
                <Footer />
              </>
            }
          />
          {/* Features List */}
          <Route path="/features" element={<FeaturesPage />} />
          {/* Dynamic Feature Detail Page */}
          <Route path="/features/:featureId" element={<FeaturePage />} />
          {/* Pricing Page */}
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
