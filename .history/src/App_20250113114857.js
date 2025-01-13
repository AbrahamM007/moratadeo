import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import RoadmapSection from "./RoadmapSection";
import DesignPhaseSection from "./DesignPhaseSection";
import PricingPage from "./PricingPage";
import FoundersPage from "./FoundersPage";
import FeaturesPage from "./FeaturesPage"; // Updated import for default export

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InfoSection />
                <RoadmapSection />
                <DesignPhaseSection />
                <Footer />
              </>
            }
          />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/founders" element={<FoundersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
