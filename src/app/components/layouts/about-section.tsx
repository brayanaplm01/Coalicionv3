"use client";

import React from "react";

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#CBA135]/10 to-red-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-red-400/10 to-[#CBA135]/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-montserrat font-regular text-gray-900 mb-6">
          ¿Quiénes <span className="text-[#CBA135]">Somos</span>?
        </h2>
        
        {/* Red underline with gradient */}
        <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto mb-12 rounded-full shadow-sm"></div>
        
        {/* Content Card with enhanced styling */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
          {/* Card decorative elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#CBA135]/20 to-red-400/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-red-400/20 to-[#CBA135]/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative z-10">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-opensans">
              Somos una <span className="font-semibold text-red-600 bg-red-50 px-1 rounded">Coalición Nacional</span> formada por organizaciones de la 
              sociedad civil, medios de comunicación, instituciones académicas 
              y organismos internacionales, unidos en la lucha contra la 
              desinformación electoral en Bolivia.
            </p>
          </div>
          
          {/* Bottom subtle border */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      </div>
      
      {/* Additional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#CBA135] rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-500 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#CBA135] rounded-full"></div>
      </div>
    </section>
  );
}
