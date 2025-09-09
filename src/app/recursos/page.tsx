import React from "react";
import SimpleNavbar from "../components/layouts/simple-navbar";
import { Footer } from "../components/layouts/footer";
import { RecursosHeroSection } from "./components/RecursosHeroSection";
import { GuiasElectoralesSection } from "./components/GuiasElectoralesSection";
import { VerificacionHechosSection } from "./components/VerificacionHechosSection";
import { PublicacionesSection } from "./components/PublicacionesSection";
import { MultimediaSection } from "./components/MultimediaSection";
import { NoticiasSection } from "./components/NoticiasSection";

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <main>
        <RecursosHeroSection />
        <GuiasElectoralesSection />
        <VerificacionHechosSection />
        <PublicacionesSection />
        <MultimediaSection />
        <NoticiasSection />
      </main>
      <Footer />
    </div>
  );
}
