"use client";

import React from "react";

import { ThreeDMarqueeDemo } from "../ui/ThreeDMarquee";
import { LinkPreview } from "@/app/components/ui/link-preview";
import { IconChevronDown } from "@tabler/icons-react";

export function HeroSection() {
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
        
        {/* Máscara verde sobre el fondo */}
        <div className="absolute inset-0  bg-black/50 backdrop-blur-[0.5px] hero-green-mask hero-mask-layer"></div>
        
        {/* Overlay adicional para mejor contraste */}
        <div className="absolute inset-0 hero-content-overlay hero-overlay-layer"></div>
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative hero-content-layer inset-0 flex items-center justify-center w-full h-full px-4 pt-[150px] sm:pt-16 lg:pt-0">
        <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
          <div className="hero-content-card p-6 sm:p-8 rounded-xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-regular text-[#F8F5F3] mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Juntos Contra la
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-regular text-[#CBA135] mb-4 sm:mb-6 bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70 text-center">
              Desinformación Electoral
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-regular text-[#F8F5F3] mb-3 sm:mb-4">
              Coalición Nacional que reúne a {" "}
              <LinkPreview 
                url="https://www.undp.org/"
                className="font-bold text-amber-300 "
              > <span className="font-bold text-[#CBA135] ">17 organizaciones</span>
              </LinkPreview>{" "}
              comprometidas con la integridad de la información electoral en
              Bolivia
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-regular text-[#F8F5F3]">
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
          </div>
        </div>

        {/* Ícono de scroll animado */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-60">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center animate-scrollBounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
            aria-label="Hacer scroll hacia abajo"
          >
            <span className="text-[#F5F5F5] text-sm mb-2 font-bold animate-scrollPulse group-hover:text-white transition-colors duration-300">
              Desliza
            </span>
            <IconChevronDown className="h-6 w-6 font-bold text-[#F5F5F5] animate-scrollPulse group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
