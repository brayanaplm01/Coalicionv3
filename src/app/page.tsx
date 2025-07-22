"use client";

import { useState } from "react";
import { HeroSection } from "./components/layouts/hero-section";
import { SliderLogos } from "./components/layouts/slider-logos";
import { AboutSection } from "./components/layouts/about-section";
import { Footer } from "./components/layouts/footer";
import SimpleNavbar from "./components/layouts/simple-navbar";
import ObjectivesSection from "./components/ObjectivesSection";
import MembersSection from "./components/MembersSection";
import ActivitiesSection from "./components/ActivitiesSection";
import MiembrosModal from "./components/MiembrosModal";
import CronologiaModal from "./components/CronologiaModal";
import ContactoModal from "./components/ContactoModal";

export default function Home() {
  const [showMiembrosModal, setShowMiembrosModal] = useState(false);
  const [showCronologiaModal, setShowCronologiaModal] = useState(false);
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
        
        {/* Members Section */}
        <MembersSection onMoreInfoClick={() => setShowMiembrosModal(true)} />
        
        {/* Activities Section */}
        <ActivitiesSection onTimelineClick={() => setShowCronologiaModal(true)} />

        {/* Objectives Section - Moved to the end */}
        <ObjectivesSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Modals */}
      <MiembrosModal 
        open={showMiembrosModal} 
        onClose={() => setShowMiembrosModal(false)} 
      />
      
      <CronologiaModal 
        open={showCronologiaModal} 
        onClose={() => setShowCronologiaModal(false)} 
      />
      
      <ContactoModal 
        open={showContactoModal} 
        onClose={() => setShowContactoModal(false)} 
      />
    </div>
  );
}
