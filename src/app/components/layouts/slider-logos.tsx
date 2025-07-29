"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
  name: string;
  url: string;
}

const logos: Logo[] = [
  { src: '/logos/ONU-mujeres.avif', alt: 'ONU Mujeres', name: 'ONU Mujeres', url: 'https://www.unwomen.org/es' },
  { src: '/logos/OEP.png', alt: 'OEP', name: 'OEP', url: 'https://www.oep.org.bo/' },
  { src: '/logos/pnud.webp', alt: 'PNUD', name: 'PNUD', url: 'https://www.undp.org/es/bolivia' },
  { src: '/logos/logo-periodistas.webp', alt: 'Periodistas', name: 'Periodistas', url: 'https://anpb.org.bo/' },
  { src: '/logos/LOGO-MUY-WASO.webp', alt: 'Muy Waso', name: 'Muy Waso', url: 'https://muywaso.com/' },
  { src: '/logos/logo-ipicom.webp', alt: 'IPICOM', name: 'IPICOM', url: 'https://ipicom.org.bo/' },
  { src: '/logos/logo-guardiana.webp', alt: 'Guardiana', name: 'Guardiana', url: 'https://guardiana.org/' },
  { src: '/logos/Logo-fespng.webp', alt: 'FES', name: 'FES', url: 'https://www.fes.de/' },
  { src: '/logos/logo-coordinadora-de-la-mujer.jpg', alt: 'Coordinadora de la Mujer', name: 'Coordinadora de la Mujer', url: 'https://coordinadoradelamujer.org.bo/' },
  { src: '/logos/logo-cibeEr.webp', alt: 'CiberEr', name: 'CiberEr', url: 'https://ciberwarmis.org/' },
  { src: '/logos/logo-chequea.webp', alt: 'Chequea', name: 'Chequea', url: 'https://chequeabolivia.org/' },
  { src: '/logos/LOGO-bolivia.png', alt: 'Bolivia Verifica', name: 'Bolivia Verifica', url: 'https://boliviaverifica.bo/' },
  { src: '/logos/ibf.webp', alt: 'IBF', name: 'IBF', url: 'https://www.internetbolivia.org/' },
  { src: '/logos/fundacion-construir.webp', alt: 'Fundación Construir', name: 'Fundación Construir', url: 'https://fundacionconstruir.org/' },
  { src: '/logos/DW-Academie.jpg', alt: 'DW Academie', name: 'DW Academie', url: 'https://www.dw.com/es/dw-akademie/s-12120' },
  { src: '/logos/aru.webp', alt: 'ARU', name: 'ARU', url: 'https://www.aru.org.bo/' },
  { src: '/logos/aboic.png', alt: 'ABOIC', name: 'ABOIC', url: 'https://aboic.org.bo/' }
];

export function SliderLogos() {
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => prev - 1); // Movimiento muy suave, 1px por vez
    }, 50); // Cada 50ms para movimiento fluido

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleLogoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const moveLeft = () => {
    setTranslateX(prev => prev + 300); // Mueve 300px a la izquierda
    setIsAutoPlay(false); // Pausa auto-scroll
    
    // Reanuda auto-scroll después de 4 segundos de inactividad
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 4000);
  };

  const moveRight = () => {
    setTranslateX(prev => prev - 300); // Mueve 300px a la derecha
    setIsAutoPlay(false); // Pausa auto-scroll
    
    // Reanuda auto-scroll después de 4 segundos de inactividad
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 4000);
  };

  return (
    <div id="organizations" className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-regular text-gray-900 mb-4">
            Organizaciones <span className="bg-gradient-to-r text-[#CBA135] bg-clip-text">Aliadas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            17 organizaciones comprometidas con la integridad electoral en Bolivia
          </p>
        </div>

        <div className="relative">
          {/* Gradientes laterales para fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Botón Izquierdo */}
          <button
            onClick={moveLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-white hover:border-[#CBA135]/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Mover slider a la izquierda"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-[#CBA135] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Botón Derecho */}
          <button
            onClick={moveRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-white hover:border-[#CBA135]/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Mover slider a la derecha"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-[#CBA135] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="logos-track">
            <div 
              className="logos-slider-infinite"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {/* Triplicamos los logos para un efecto seamless perfecto */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="logo-item">
                  <div 
                    className="logo-container group cursor-pointer"
                    onClick={() => handleLogoClick(logo.url)}
                    title={`Visitar ${logo.name}`}
                  >
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                        sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 128px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
