"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { IconChevronLeft, IconChevronRight, IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';

interface Logo {
  src: string;
  alt: string;
  name: string;
}

const logos: Logo[] = [
  {              )}
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center mt-8 space-x-2">
            {logos.slice(0, Math.min(logos.length, 8)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index + totalLogos)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor((currentIndex - totalLogos) % totalLogos) === index
                    ? 'bg-red-800 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a organización ${index + 1}`}
              />
            ))}
          </div>
        </div>: '/logos/ONU-mujeres.avif', alt: 'ONU Mujeres', name: 'ONU Mujeres' },
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
  const [currentIndex, setCurrentIndex] = useState(logos.length); // Empezamos en el conjunto del medio
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Drag/Swipe state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Para el carrusel continuo - triplicamos los logos
  const totalLogos = logos.length;
  const tripleLogos = [...logos, ...logos, ...logos];

  // Ancho de cada logo
  const logoWidth = 150; // Ajustado para mejor spacing

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => prev - 1); // Navegación de uno en uno
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1); // Navegación de uno en uno
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Drag/Swipe handlers
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setDragStartIndex(currentIndex);
    setIsPlaying(false); // Pause autoplay during drag
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    setStartX(clientX);
    setStartY(clientY);
    
    if ('touches' in e) {
      // Touch events
      document.addEventListener('touchmove', handleDragMove as any);
      document.addEventListener('touchend', handleDragEnd as any);
    } else {
      // Mouse events
      document.addEventListener('mousemove', handleDragMove as any);
      document.addEventListener('mouseup', handleDragEnd as any);
      e.preventDefault();
    }
  }, [currentIndex]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;
    
    // Detect if this is a horizontal swipe (more horizontal than vertical)
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
      
      // Sin resistencia para arrastre más directo
      setTranslateX(deltaX);
    }
  }, [isDragging, startX, startY]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determine if we should change slide based on drag distance
    const threshold = 30; // Threshold más bajo para que sea más fácil cambiar de logo
    
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        // Dragged right - go to previous slide (solo uno para control más preciso)
        setCurrentIndex((prev) => prev - 1);
      } else {
        // Dragged left - go to next slide (solo uno para control más preciso)
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      // Snap back to current slide
      setCurrentIndex(dragStartIndex);
    }
    
    setTranslateX(0);
    setIsPlaying(true); // Resume autoplay
    
    // Clean up event listeners
    document.removeEventListener('mousemove', handleDragMove as any);
    document.removeEventListener('mouseup', handleDragEnd as any);
    document.removeEventListener('touchmove', handleDragMove as any);
    document.removeEventListener('touchend', handleDragEnd as any);
  }, [isDragging, translateX, dragStartIndex, handleDragMove]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ':
          event.preventDefault();
          togglePlayPause();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, togglePlayPause]);

  // Auto-play functionality - movimiento más pausado y controlado
  useEffect(() => {
    if (isPlaying && !isHovered && !isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000); // Movimiento cada 2 segundos, más pausado
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, isDragging]);

  // Reset seamless para carrusel infinito
  useEffect(() => {
    // Cuando llegamos al final del segundo conjunto, saltamos al inicio del segundo conjunto
    if (currentIndex >= totalLogos * 2) {
      setTimeout(() => {
        setCurrentIndex(totalLogos);
      }, 0);
    }
    // Cuando vamos hacia atrás y llegamos al inicio, saltamos al final del segundo conjunto
    else if (currentIndex < totalLogos) {
      setTimeout(() => {
        setCurrentIndex(totalLogos * 2 - 1);
      }, 0);
    }
  }, [currentIndex, totalLogos]);

  // Cleanup effect for drag events
  useEffect(() => {
    return () => {
      // Clean up any remaining event listeners
      document.removeEventListener('mousemove', handleDragMove as any);
      document.removeEventListener('mouseup', handleDragEnd as any);
      document.removeEventListener('touchmove', handleDragMove as any);
      document.removeEventListener('touchend', handleDragEnd as any);
    };
  }, [handleDragMove, handleDragEnd]);

  // Mouse wheel navigation
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    
    // Throttle wheel events
    if (isDragging) return;
    
    const delta = e.deltaY;
    const threshold = 30; // Threshold más bajo para mejor respuesta
    
    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        // Scroll down - next slides
        setCurrentIndex((prev) => prev + 2);
      } else {
        // Scroll up - previous slides
        setCurrentIndex((prev) => prev - 2);
      }
    }
  }, [isDragging]);

  return (
    <div id="organizations" className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-regular text-gray-900 mb-4">
            Organizaciones <span className="bg-gradient-to-r from-red-800 to-amber-600 bg-clip-text text-transparent">Aliadas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos junto a 17 organizaciones comprometidas con la integridad electoral en Bolivia
          </p>
        </div>

        <div className="relative group">
          {/* Botón Anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-200"
            aria-label="Logo anterior"
          >
            <IconChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Botón Siguiente */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-200"
            aria-label="Logo siguiente"
          >
            <IconChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Botón Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-200"
            aria-label={isPlaying ? "Pausar carousel" : "Reproducir carousel"}
          >
            {isPlaying ? (
              <IconPlayerPause className="w-4 h-4 text-gray-700" />
            ) : (
              <IconPlayerPlay className="w-4 h-4 text-gray-700" />
            )}
          </button>

          {/* Container del slider */}
          <div 
            ref={sliderRef}
            className={`relative overflow-hidden select-none ${
              isDragging 
                ? 'cursor-grabbing' 
                : 'cursor-grab'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onWheel={handleWheel}
            style={{ 
              userSelect: 'none',
              WebkitUserSelect: 'none',
              touchAction: 'pan-y pinch-zoom'
            }}
          >
            {/* Gradientes laterales para fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className={`flex ${
                isDragging ? '' : 'transition-transform duration-75 ease-linear'
              }`}
              style={{
                transform: `translateX(${-currentIndex * logoWidth + (isDragging ? translateX : 0)}px)`,
                transitionDuration: isDragging ? '0ms' : '75ms' // Transición más rápida para movimiento fluido
              }}
            >
              {/* Carrusel infinito con triple repetición de logos */}
              {tripleLogos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex-none" style={{ width: `${logoWidth}px` }}>
                  <div className="logo-container group cursor-pointer px-4">
                    <div 
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto transition-all duration-300"
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-110 pointer-events-none"
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                        draggable={false}
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
