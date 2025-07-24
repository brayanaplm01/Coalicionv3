"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
 
  { name: "Quienes Somos", link: "#about", isContacto: false, isScroll: true },
  { name: "Miembros", link: "#members", isContacto: false, isScroll: true },
  { name: "Actividades", link: "#activities", isContacto: false, isScroll: true },
  { name: "Contacto", link: "#", isContacto: true, isScroll: false },
];

interface SimpleNavbarProps {
  onContactClick?: () => void;
}

export default function SimpleNavbar({ onContactClick }: SimpleNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Obtener la altura real del navbar dinámicamente
      const navbar = document.querySelector('nav');
      let navbarHeight = 80; // fallback
      
      if (navbar) {
        navbarHeight = navbar.getBoundingClientRect().height;
      }
      
      // Usar un offset más grande negativo para mostrar más contenido hacia abajo
      const additionalOffset = -60; // Aumentado para mostrar más contenido abajo
      const totalOffset = navbarHeight + additionalOffset;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, item: typeof navigationItems[0]) => {
    e.preventDefault();
    
    if (item.isContacto && onContactClick) {
      onContactClick();
    } else if (item.isScroll) {
      if (item.link === "#home") {
        scrollToTop();
      } else {
        const sectionId = item.link.substring(1); // remove '#' from link
        scrollToSection(sectionId);
      }
    }
    
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element)?.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-500 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#063740]/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-[#063740]/60 backdrop-blur-sm border-b border-white/5"
      }`}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
        border: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-28 py-1 sm:py-2">
          {/* Logo izquierdo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/inicial/logo-fotter.png"
                alt="FACTO - Coalición Nacional Contra la Desinformación Electoral"
                width={140}
                height={40}
                className="h-12 sm:h-16 lg:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Espaciador flexible */}
          <div className="flex-1"></div>

          {/* Menú desktop en el lado derecho */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                className="group relative   text-sm lg:text-base  lg:font-light  transition-all duration-300 px-2 py-2 text-white hover:text-emerald-300 transform hover:scale-105"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Línea animada debajo */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></div>
                {/* Efecto de brillo sutil */}
                
              </Link>
            ))}
          </div>

          {/* Botón hamburguesa para móvil */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg transition-all duration-200 text-white hover:bg-white/10 transform hover:scale-110 active:scale-95 ml-2 sm:ml-4"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <IconX className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 rotate-180" />
              ) : (
                <IconMenu2 className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 rotate-0" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden relative transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-80 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Fondo blur inmediato */}
        <div 
          className={`absolute inset-0 backdrop-blur-lg transition-opacity duration-200 ${
            isMobileMenuOpen ? "opacity-100 bg-[#063740]" : "opacity-0 bg-transparent"
          }`}
        />
        
        {/* Contenido del menú */}
        <div className="relative px-4 pt-4 pb-6 space-y-3 shadow-lg z-10">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={(e) => handleNavClick(e, item)}
              className={`group relative flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white hover:text-emerald-300 transition-all duration-300 transform hover:scale-105 ${
                isMobileMenuOpen 
                  ? `animate-slideIn animation-delay-${index * 100}` 
                  : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Línea animada lateral */}
              <div className="absolute left-4 top-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-8 transform -translate-y-1/2"></div>
              {/* Línea animada derecha */}
              <div className="absolute right-4 top-1/2 w-0 h-0.5 bg-gradient-to-l from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-8 transform -translate-y-1/2"></div>
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 rounded-lg opacity-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
