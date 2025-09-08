"use client";

import React from "react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Enhanced decorative background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#CBA135]/15 to-red-400/15 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-52 h-52 bg-gradient-to-br from-red-400/12 to-[#CBA135]/12 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-slate-100/30 to-gray-100/30 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        viewport={{ once: true }}
      />
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ¿Quiénes{" "}
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent font-bold">
              Somos
            </span>?
          </motion.h2>
          
          {/* Enhanced red underline with gradient */}
          <motion.div 
            className="w-40 h-1.5 bg-gradient-to-r from-red-800 via-rose-600 to-red-800 rounded-full mx-auto shadow-lg"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Main Content Card */}
          <motion.div 
            className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 lg:p-12 border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Enhanced card decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#CBA135]/20 to-red-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-red-400/15 to-[#CBA135]/15 rounded-full blur-lg group-hover:scale-110 transition-transform duration-500"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            
            <div className="relative text-left z-10">
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-opensans mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Somos una{" "}
                <span className="font-bold text-[#CBA135] bg-gradient-to-r from-[#CBA135]/10 to-[#B8941F]/10 px-2 py-1 rounded-lg">
                  Coalición Nacional
                </span>{" "}
                formada por organizaciones de la sociedad civil, medios de comunicación, 
                instituciones académicas y organismos internacionales.
              </motion.p>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 leading-relaxed font-opensans"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Unidos en la lucha contra la{" "}
                <span className="font-semibold text-red-700">desinformación electoral</span>{" "}
                y comprometidos con el fortalecimiento de la{" "}
                <span className="font-semibold text-[#CBA135]">democracia en Bolivia</span>.
              </motion.p>
            </div>
            
            {/* Enhanced bottom border */}
            <motion.div 
              className="mt-8 h-px bg-gradient-to-r from-transparent via-[#CBA135]/30 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.9 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* New Visual Element - Stats/Features */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div
              className="bg-gradient-to-r from-[#CBA135]/10 to-[#B8941F]/10 rounded-2xl p-6 border border-[#CBA135]/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-montserrat font-semibold text-[#222426] mb-2">
                🤝 Trabajo Colaborativo
              </h3>
              <p className="text-gray-600 font-opensans">
                Unión estratégica de múltiples sectores de la sociedad boliviana
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-2xl p-6 border border-red-300/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-montserrat font-semibold text-[#222426] mb-2">
                🛡️ Protección Electoral
              </h3>
              <p className="text-gray-600 font-opensans">
                Salvaguardando la integridad de los procesos democráticos
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-300/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-montserrat font-semibold text-[#222426] mb-2">
                📊 Transparencia Total
              </h3>
              <p className="text-gray-600 font-opensans">
                Promoviendo información veraz y verificable para todos
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#CBA135] rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-500 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#CBA135] rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.section>
  );
}
