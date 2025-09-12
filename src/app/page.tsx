"use client";

import { useState } from "react";
import { Footer } from "./components/layouts/footer";
import SimpleNavbar from "./components/layouts/simple-navbar";
import ContactoModal from "./components/ContactoModal";

// Importar componentes de recursos
import { RecursosHeroSection } from "./recursos/components/RecursosHeroSection";
import { AgendaElectoralSection } from "./recursos/components/AgendaElectoralSection";
import { MaterialDescargableSection } from "./recursos/components/MaterialDescargableSection";
import { GuiasElectoralesSection } from "./recursos/components/GuiasElectoralesSection";
import { VerificacionHechosSection } from "./recursos/components/VerificacionHechosSection";
import { PublicacionesSection } from "./recursos/components/PublicacionesSection";
import { MultimediaSection } from "./recursos/components/MultimediaSection";
import { NoticiasSection } from "./recursos/components/NoticiasSection";

export default function Home() {
  const [showContactoModal, setShowContactoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <SimpleNavbar onContactClick={() => setShowContactoModal(true)} />
      
      {/* Main Content - Ahora mostrando recursos como página principal */}
      <main>
        <RecursosHeroSection />
        <AgendaElectoralSection />
        <MaterialDescargableSection />
        <GuiasElectoralesSection />
        <VerificacionHechosSection />
        <PublicacionesSection />
        <MultimediaSection />
        <NoticiasSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ContactoModal 
        open={showContactoModal} 
        onClose={() => setShowContactoModal(false)} 
      />
    </div>
  );
}
