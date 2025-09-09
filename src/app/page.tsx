"use client";

import { useState } from "react";
import { HeroSection } from "./components/layouts/hero-section";
import { SliderLogos } from "./components/layouts/slider-logos";
import { LatestNewsSection } from "./components/layouts/latest-news-section";
import { HowToParticipateSection } from "./components/layouts/how-to-participate-section";
import { PublicacionesCoalicionSeccion } from "./components/layouts/publicaciones-coalicion-seccion";

import { Footer } from "./components/layouts/footer";
import SimpleNavbar from "./components/layouts/simple-navbar";
import { FAQSection } from "./components/layouts/FAQ";
// import MembersSection from "./components/MembersSection";
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
        
       
        
        {/* Latest News Section - Últimas Noticias */}
        <LatestNewsSection />
        
        {/* Slider Logos Section - Organizaciones Aliadas */}
        <SliderLogos />
        
        {/* How to Participate Section - Cómo participar de la red */}
        <HowToParticipateSection />
        
        {/* Publicaciones Coalición Section */}
        <PublicacionesCoalicionSeccion />
        
        {/* Members Section */}
        {/* <MembersSection /> */}
        
        {/* Activities Section */}
        <ActivitiesSection />

        {/* FAQ Section */}
        <FAQSection />

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
