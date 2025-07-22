"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { IconEye, IconTarget, IconUsers, IconShield } from "@tabler/icons-react";

// Custom hook para animar contadores
const useCounter = (target: number, duration: number = 2000, startDelay: number = 0) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [inView, target, duration, startDelay]);

  return { count, ref: nodeRef };
};

const features = [
  {
    icon: <IconEye className="h-6 w-6" />,
    title: "Nuestra Visión",
    description: "Una Bolivia con elecciones transparentes, donde la información veraz fortalezca la democracia y la participación ciudadana informada sea la base de nuestro sistema electoral."
  },
  {
    icon: <IconTarget className="h-6 w-6" />,
    title: "Nuestra Misión",
    description: "Combatir la desinformación electoral mediante el trabajo colaborativo de organizaciones comprometidas con la integridad de los procesos democráticos en Bolivia."
  },
  {
    icon: <IconUsers className="h-6 w-6" />,
    title: "Trabajo Colaborativo",
    description: "Unimos esfuerzos de 17 organizaciones especializadas para crear una red sólida de verificación y educación electoral que trasciende fronteras institucionales."
  },
  {
    icon: <IconShield className="h-6 w-6" />,
    title: "Compromiso Ético",
    description: "Nos guiamos por principios de transparencia, imparcialidad y rigor técnico para garantizar información electoral confiable y verificable para todos los ciudadanos."
  }
];

const stats = [
  { number: 17, label: "Organizaciones Aliadas", suffix: "" },
  { number: 10, label: "Años de Experiencia", prefix: "+" },
  { number: 100, label: "Compromiso Democrático", suffix: "%" },
  { number: 2025, label: "Elecciones Generales", suffix: "" }
];

// Componente para cada stat con animación
const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const { count, ref } = useCounter(stat.number, 2000, index * 200);
  
  return (
    <div ref={ref} className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <motion.div 
          className="text-3xl sm:text-4xl font-bold text-green-600 mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {stat.prefix || ""}{count}{stat.suffix || ""}
        </motion.div>
        <div className="text-sm sm:text-base text-gray-600 font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Somos</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-12"></div>
          
          {/* Imagen Quienes Somos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="/inicial/coalicion.png"
                  alt="Quiénes Somos - Coalición Nacional"
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-600/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-emerald-400/15 to-green-400/15 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Somos una <span className="font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-lg">Coalición Nacional</span> formada por organizaciones 
              de la sociedad civil, medios de comunicación, instituciones académicas y organismos internacionales, 
              unidos en la lucha contra la desinformación electoral en Bolivia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sociedad Civil</h3>
                <p className="text-sm text-gray-600">Organizaciones comprometidas con la democracia</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Medios</h3>
                <p className="text-sm text-gray-600">Comunicación responsable y verificación</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Internacional</h3>
                <p className="text-sm text-gray-600">Organismos y cooperación global</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                
                <div className="relative">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg mr-6">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
