"use client";

import React from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
  name: string;
}

const logos: Logo[] = [
  { src: '/logos/ONU-mujeres.avif', alt: 'ONU Mujeres', name: 'ONU Mujeres' },
  { src: '/logos/OEP.png', alt: 'OEP', name: 'OEP' },
  { src: '/logos/pnud.webp', alt: 'pnud', name: 'pnud' },
  { src: '/logos/logo-periodistas.webp', alt: 'Periodistas', name: 'Periodistas' },
  { src: '/logos/LOGO-MUY-WASO.webp', alt: 'Muy Waso', name: 'Muy Waso' },
  { src: '/logos/logo-ipicom.webp', alt: 'IPICOM', name: 'IPICOM' },
  { src: '/logos/logo-guardiana.webp', alt: 'Guardiana', name: 'Guardiana' },
  { src: '/logos/Logo-fespng.webp', alt: 'FES', name: 'FES' },
  { src: '/logos/logo-coordinadora-de-la-mujer.jpg', alt: 'Coordinadora de la Mujer', name: 'Coordinadora de la Mujer' },
  { src: '/logos/logo-cibeEr.webp', alt: 'CiberEr', name: 'CiberEr' },
  { src: '/logos/logo-chequea.webp', alt: 'Chequea', name: 'Chequea' },
  { src: '/logos/LOGO-bolivia.png', alt: 'Bolivia', name: 'Bolivia' },
  { src: '/logos/ibf.webp', alt: 'IBF', name: 'IBF' },
  { src: '/logos/fundacion-construir.webp', alt: 'Fundación Construir', name: 'Fundación Construir' },
  { src: '/logos/DW-Academie.jpg', alt: 'DW Academie', name: 'DW Academie' },
  { src: '/logos/aru.webp', alt: 'ARU', name: 'ARU' },
  { src: '/logos/aboic.png', alt: 'ABOIC', name: 'ABOIC' }
  
];

export function SliderLogos() {
  return (
    <div id="organizations" className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Organizaciones Aliadas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos junto a 17 organizaciones comprometidas con la integridad electoral en Bolivia
          </p>
        </div>

        <div className="relative">
          {/* Gradientes laterales para fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="logos-track">
            <div className="logos-slider-infinite">
              {/* Triplicamos los logos para un efecto seamless perfecto */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="logo-item">
                  <div className="logo-container group cursor-pointer">
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

        {/* Estadísticas */}
        
      </div>
    </div>
  );
}
