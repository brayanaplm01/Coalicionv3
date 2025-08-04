"use client";

import React from "react";

import { ThreeDMarqueeDemo } from "../ui/ThreeDMarquee";
import { LinkPreview } from "@/app/components/ui/link-preview";


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

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const navbarHeight = 80;
      const elementPosition = footer.offsetTop - navbarHeight;
      
      window.scrollTo({ 
        top: elementPosition, 
        behavior: "smooth" 
      });
    } else {
      // Fallback - scroll al final de la página
      window.scrollTo({ 
        top: document.body.scrollHeight, 
        behavior: "smooth" 
      });
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#F8F5F3] mb-1 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Juntos Contra la
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#CBA135] mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Desinformación Electoral
            </h1>
            <div className="text-md font-semibold text-justify sm:text-base md:text-lg lg:text-xl  text-[#F8F5F3] mb-1 sm:mb-4">
              Coalición Nacional que reúne a {" "}
              <LinkPreview 
                url="https://www.undp.org/"
                className="font-bold text-amber-300 "
              > <span className="font-bold text-[#CBA135] ">17 organizaciones</span>
              </LinkPreview>{" "}
              comprometidas con la integridad de la información electoral en
              Bolivia
            </div>
            <div className="text-md text-justify sm:text-base md:text-lg lg:text-xl font-semibold text-[#F8F5F3]">
              Trabajamos juntos para fortalecer la confianza ciudadana en los
              procesos electorales, combatiendo la desinformación y
              promoviendo una participación democrática informada de cara a
              las{" "}
              <LinkPreview
                url="https://chequeatuvoto.chequeabolivia.bo/"
                className="font-bold text-[#FFC44D]"
              >
                <span className="font-bold text-[#CBA135] ">elecciones generales 2025.</span>
                
              </LinkPreview>
            </div>
            
            {/* Botón de Contacto */}
            <div className="mt-8 sm:mt-10">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#CBA135]/20 hover:border-[#CBA135]/40 backdrop-blur-sm"
              >
                <span>Contacto</span>
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
