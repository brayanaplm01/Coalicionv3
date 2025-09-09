"use client";

import React from "react";
import { motion } from "motion/react";
import { IconFileText, IconSearch, IconPhoto, IconNews } from "@tabler/icons-react";

export function RecursosHeroSection() {
  return (
    <motion.section
      className="relative h-screen pt-24 lg:pt-32 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#CBA135]/20 to-red-500/20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-red-500/15 to-[#CBA135]/15 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold mb-6">
            <span className="text-white">Centro de</span>{" "}
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent">
              Recursos
            </span>
          </h1>
          
          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-red-800 to-rose-600 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-opensans">
            Accede a herramientas, guías y recursos especializados para combatir la desinformación electoral
          </p>
        </motion.div>

        {/* Resource Categories Preview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Category 1 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#CBA135] to-[#B8941F] rounded-lg flex items-center justify-center mx-auto mb-3">
              <IconFileText className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-montserrat font-semibold text-sm mb-1">
              Guías Electorales
            </h3>
            <p className="text-gray-300 text-xs font-opensans">
              Documentos especializados
            </p>
          </motion.div>

          {/* Category 2 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <IconSearch className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-montserrat font-semibold text-sm mb-1">
              Verificación
            </h3>
            <p className="text-gray-300 text-xs font-opensans">
              Herramientas de fact-checking
            </p>
          </motion.div>

          {/* Category 3 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <IconPhoto className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-montserrat font-semibold text-sm mb-1">
              Multimedia
            </h3>
            <p className="text-gray-300 text-xs font-opensans">
              Infografías y videos
            </p>
          </motion.div>

          {/* Category 4 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <IconNews className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-montserrat font-semibold text-sm mb-1">
              Noticias
            </h3>
            <p className="text-gray-300 text-xs font-opensans">
              Actividades y comunicados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
