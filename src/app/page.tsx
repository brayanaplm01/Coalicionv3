"use client";

import { useState } from "react";
import { HeroSection } from "./components/layouts/hero-section";
import { SliderLogos } from "./components/layouts/slider-logos";
import { AboutSection } from "./components/layouts/about-section";
import MissionVisionSection from "./components/layouts/mission-vision-section";
import { Footer } from "./components/layouts/footer";
import SimpleNavbar from "./components/layouts/simple-navbar";
import MembersSection from "./components/MembersSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ContactoModal from "./components/ContactoModal";

export default function Home() {
  const [showContactoModal, setShowContactoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <SimpleNavbar onContactClick={() => setShowContactoModal(true)} />
      
      {/* Main Content */}
      <main className="pt-20 lg:pt-28">
        {/* Hero Section */}
        <div id="home" className="-mt-20 sm:-mt-14 lg:-mt-28">
          <HeroSection />
        </div>
        
        {/* Slider Logos Section */}
        <SliderLogos />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Mission, Vision & Objectives Section */}
        <MissionVisionSection />
        
        {/* Members Section */}
        <MembersSection />
        
        {/* Activities Section */}
        <ActivitiesSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Modals */}
      <ContactoModal 
        open={showContactoModal} 
        onClose={() => setShowContactoModal(false)} 
      />
    </div>
  );
}
