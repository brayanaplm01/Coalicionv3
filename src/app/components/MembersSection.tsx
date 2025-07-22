import Image from "next/image";
import { motion } from "motion/react";

interface MembersSectionProps {
  onMoreInfoClick: () => void;
}

export default function MembersSection({ onMoreInfoClick }: MembersSectionProps) {
  return (
    <motion.section
      id="members"
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="members-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#members-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 lg:pr-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nuestros <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Miembros</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto lg:mx-0 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Somos una coalición de <span className="font-semibold text-green-700">17 organizaciones</span> comprometidas con la integridad electoral, articuladas bajo dos ejes principales: organizaciones que trabajan en democracia y tecnología, y organizaciones especializadas en combatir la desinformación.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Nuestra coalición incluye verificadoras de noticias, medios de investigación, organizaciones feministas, fundaciones tecnológicas, el Órgano Electoral Plurinacional y agencias del Sistema de Naciones Unidas, trabajando de manera colaborativa hacia un objetivo común.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-center lg:text-left"
            >
              <button
                onClick={onMoreInfoClick}
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <span>Más Información</span>
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <Image 
                  src="/inicial/miembros.png" 
                  alt="Gráfico Miembros - Coalición Nacional" 
                  width={600} 
                  height={600} 
                  className="object-contain rounded-xl" 
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-600/5 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
