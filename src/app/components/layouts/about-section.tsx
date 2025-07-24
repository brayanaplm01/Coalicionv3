"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { IconEye, IconTarget, IconUsers, IconShield, IconBuilding, IconNews, IconWorld } from "@tabler/icons-react";

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
    <>
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
      
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
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Quiénes{" "}
            <motion.span 
              className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Somos
            </motion.span>
            ?
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          {/* Hero Text con efectos dinámicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="relative bg-gradient-to-br from-white/90 via-green-50/50 to-emerald-50/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group">
              {/* Efectos de fondo dinámicos */}
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-green-600/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-sans-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Somos una{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 relative inline-block ">
                    Coalición Nacional
                  </span>{" "}
                  formada por organizaciones de la sociedad civil, medios de comunicación, 
                  instituciones académicas y organismos internacionales, unidos en la lucha 
                  contra la desinformación electoral en Bolivia.
                </motion.p>
                
                {/* Destacado de "Coalición Nacional" separado */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-64 h-16 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-xl" />
                </motion.div>
                
                {/* Línea decorativa animada */}
                <motion.div
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tipos de Organizaciones - Sección Dinámica */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Nuestra <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Red</span> de Aliados
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Diversos sectores unidos por un objetivo común: elecciones transparentes y democráticas
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <IconBuilding className="h-12 w-12" />,
                title: "Sociedad Civil",
                description: "Organizaciones comprometidas con la democracia y participación ciudadana",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50",
                shadowColor: "blue"
              },
              {
                icon: <IconNews className="h-12 w-12" />,
                title: "Medios de Comunicación",
                description: "Comunicación responsable, verificación de hechos y periodismo de calidad",
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50",
                shadowColor: "green"
              },
              {
                icon: <IconWorld className="h-12 w-12" />,
                title: "Organismos Internacionales",
                description: "Cooperación global y estándares internacionales en procesos electorales",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50",
                shadowColor: "orange"
              }
            ].map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`relative bg-gradient-to-br ${org.bgGradient} rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden flex flex-col justify-between min-h-[320px]`}>
                  {/* Efectos de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform -translate-x-4 translate-y-4 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${org.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-6 group-hover:shadow-${org.shadowColor}-500/25`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {org.icon}
                      </motion.div>
                    </motion.div>
                    
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <h4 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${org.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 min-h-[64px] flex items-center justify-center`}>
                        {org.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-1 flex items-center justify-center">
                        {org.description}
                      </p>
                    </div>
                    
                    {/* Indicador de hover */}
                    <motion.div
                      className={`mt-6 w-0 h-1 bg-gradient-to-r ${org.gradient} rounded-full group-hover:w-full transition-all duration-500`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

        {/* Features Grid - Rediseñada Completamente */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Header Mejorado */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 relative z-10">
                Nuestros{" "}
                <motion.span 
                  className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 bg-clip-text text-transparent relative"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Valores
                </motion.span>
              </h3>
              
              {/* Efectos de fondo del título */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/20 to-green-500/10 rounded-3xl blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-40 h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Los <span className="font-semibold text-green-700">pilares fundamentales</span> que definen nuestra identidad y 
              guían cada una de nuestras acciones hacia una democracia más transparente y participativa
            </motion.p>
          </div>
          
          {/* Grid Mejorado con Diseño Asimétrico */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  y: -20,
                  scale: 1.02,
                  rotateX: 8,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20
                  }
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <div className={`relative bg-gradient-to-br ${
                  index % 2 === 0 
                    ? 'from-white via-green-50/30 to-emerald-50/50' 
                    : 'from-emerald-50/30 via-white to-green-50/50'
                } backdrop-blur-2xl rounded-3xl lg:rounded-[2rem] p-8 lg:p-10 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 h-full overflow-hidden transform-gpu ${
                  index % 2 === 0 ? 'lg:mt-8' : 'lg:mb-8'
                }`}>
                  
                  {/* Efectos de fondo múltiples */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 90, 180, 270, 360],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-green-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      x: [0, 10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 6 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Patrón de puntos dinámico */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Header de la tarjeta rediseñado */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-green-500/40 relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{ 
                              x: ['-100%', '100%']
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10 text-2xl"
                          >
                            {feature.icon}
                          </motion.div>
                        </div>
                        
                        {/* Anillo pulsante */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl border-2 border-green-500/30"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>
                      
                      <div className="flex-1 pt-2">
                        <motion.h4 
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-all duration-300 leading-tight"
                          whileHover={{ 
                            scale: 1.03,
                            x: 5
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {feature.title}
                        </motion.h4>
                        
                        {/* Línea decorativa bajo el título */}
                        <motion.div
                          className="w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:w-full transition-all duration-700 ease-out mb-4"
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 1, delay: index * 0.3 + 0.8 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    
                    {/* Descripción mejorada */}
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 leading-relaxed text-lg sm:text-xl mb-8 relative">
                        {feature.description}
                      </p>
                    </motion.div>
                    
                    {/* Barra de progreso circular */}
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <motion.div
                          className="relative w-16 h-16"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                            <circle
                              cx="32" cy="32" r="28"
                              fill="none"
                              stroke="rgb(229 231 235)"
                              strokeWidth="4"
                            />
                            <motion.circle
                              cx="32" cy="32" r="28"
                              fill="none"
                              stroke="url(#gradient-progress)"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 28}`}
                              initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                              whileInView={{ strokeDashoffset: 0 }}
                              transition={{ 
                                duration: 2, 
                                delay: index * 0.3 + 1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                            />
                            <defs>
                              <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgb(34 197 94)" />
                                <stop offset="100%" stopColor="rgb(16 185 129)" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span 
                              className="text-sm font-bold text-green-600"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.3 + 1.5 }}
                              viewport={{ once: true }}
                            >
                              100%
                            </motion.span>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="text-right"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-sm text-gray-500 mb-1">Compromiso</p>
                          <p className="text-lg font-semibold text-green-600">Garantizado</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Efecto de brillo mejorado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ 
                      x: ['-100%', '100%']
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
}
