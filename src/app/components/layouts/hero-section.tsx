"use client";

import React from "react";

import { ThreeDMarqueeDemo } from "../ui/ThreeDMarquee";



interface HeroSectionProps {
  onContactClick?: () => void;
}

export function HeroSection({ }: HeroSectionProps) {
  const scrollToNext = () => {
    const organizationsSection = document.getElementById("organizations");
    if (organizationsSection) {
      const navbarHeight = 80; // altura del navbar
      const elementPosition = organizationsSection.offsetTop - navbarHeight;
      
      window.scrollTo({ 
        top: elementPosition, 
        behavior: "smooth" 
      });
    } else {
      // Fallback si no encuentra la sección
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
 
  return (
    <div className="w-full overflow-hidden  h-screen relative flex items-center justify-center">
      {/* ThreeDMarqueeDemo como fondo */}
      <div className="absolute  inset-0 w-full h-full ">
        <ThreeDMarqueeDemo className="h-full w-full !m-0 " />
        
        {/* Máscara black sobre el fondo */}
        <div className="absolute inset-0  bg-black/50 backdrop-blur-[0.5px] hero-black-mask hero-mask-layer"></div>

        {/* Overlay adicional para mejor contraste */}
        <div className="absolute inset-0 hero-content-overlay hero-overlay-layer"></div>
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative hero-content-layer inset-0 flex items-center justify-center w-full h-full px-4 pt-[0px] sm:pt-16 lg:pt-0">
        <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
          <div className="hero-content-card p-6 sm:p-8 rounded-xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#F8F5F3] mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Juntos Contra la
            <br />
            <span className="text-3xl font-montserrat sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#CBA135] mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Desinformación Electoral
            </span>
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#F8F5F3] mb-3 sm:mb-4">
              Defendemos la democracia, participación ciudadana informada y nuestros derechos en las elecciones
            </div>
            
            {/* Botones de Información */}
            <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-center max-w-5xl mx-auto">
              <button
                onClick={() => {/* No redirecciona por ahora */}}
                className="w-full lg:w-auto inline-flex items-center justify-center px-4 lg:px-6 py-3 bg-gradient-to-r from-[#CBA135]/50 to-[#B8941F]/50 text-white font-semibold text-sm lg:text-base rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#CBA135]/30 hover:border-[#CBA135]/50 backdrop-blur-md hover:from-[#CBA135]/80 hover:to-[#B8941F]/80"
              >
                <span className="font-montserrat text-center">1. ¿Qué es la desinformación?</span>
              </button>
              
              <button
                onClick={() => {/* No redirecciona por ahora */}}
                className="w-full lg:w-auto inline-flex items-center justify-center px-4 lg:px-6 py-3 bg-gradient-to-r from-red-700/50 to-red-600/50 text-white font-semibold text-sm lg:text-base rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-red-700/30 hover:border-red-700/50 backdrop-blur-md hover:from-red-700/80 hover:to-red-600/80"
              >
                <span className="font-montserrat text-center">2. El problema de la desinformación</span>
              </button>
              
              <button
                onClick={() => {/* No redirecciona por ahora */}}
                className="w-full lg:w-auto inline-flex items-center justify-center px-4 lg:px-6 py-3 bg-gradient-to-r from-emerald-600/50 to-teal-600/50 text-white font-semibold text-sm lg:text-base rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-emerald-600/30 hover:border-emerald-600/50 backdrop-blur-md hover:from-emerald-600/80 hover:to-teal-600/80"
              >
                <span className="font-montserrat text-center">3. Combatiendo la desinformación</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ícono de scroll animado */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-60">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center animate-scrollBounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
            aria-label="Hacer scroll hacia abajo"
          >
            <span className="text-[#F5F5F5] text-sm mb-2 font-bold animate-scrollPulse group-hover:text-white transition-colors duration-300 font-opensans">
              
            </span>
            
          </button>
        </div>
      </div>
    </div>
  );
}
