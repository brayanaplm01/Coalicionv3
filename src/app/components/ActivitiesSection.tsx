import Image from "next/image";
import { motion } from "motion/react";

interface ActivitiesSectionProps {
  onTimelineClick: () => void;
}

const activities = [
  {
    title: "Talleres de Capacitación",
    description: "Formación especializada sobre identificación y combate de desinformación electoral",
    icon: "🎓"
  },
  {
    title: "eMonitor+",
    description: "Herramienta tecnológica avanzada para monitoreo de procesos electorales en tiempo real",
    icon: "📊"
  },
  {
    title: "Análisis Electoral",
    description: "Estudios profundos de procesos electorales y estrategias comunicacionales",
    icon: "🔍"
  },
  {
    title: "Educación Ciudadana",
    description: "Programas educativos sobre mitos electorales y participación democrática",
    icon: "📚"
  }
];

export default function ActivitiesSection({ onTimelineClick }: ActivitiesSectionProps) {
  return (
    <motion.section
      id="activities"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900">Nuestras </span>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Actividades
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Implementamos estrategias integrales que combinan tecnología, educación y análisis para fortalecer la democracia boliviana
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Image Section */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Enhanced image container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/30">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image 
                    src="/inicial/actividades.png" 
                    alt="Actividades de la Coalición" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-40 animate-pulse delay-300"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Desarrollamos iniciativas integrales que incluyen <strong className="text-green-700">talleres de capacitación</strong>, 
                implementación de <strong className="text-green-700">herramientas tecnológicas avanzadas</strong>, análisis exhaustivos 
                de procesos electorales y creación de lineamientos comunicacionales estratégicos.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Destacamos la exitosa aplicación del <strong className="text-emerald-700">eMonitor+</strong> durante las 
                elecciones judiciales, talleres especializados sobre mitos electorales y estrategias colaborativas 
                contra la desinformación de cara a las <strong className="text-emerald-700">elecciones generales 2025</strong>.
              </p>
            </div>

            <motion.button
              onClick={onTimelineClick}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base lg:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Cronología Completa</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Activities Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-500 hover:scale-105 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl transform translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6"></div>
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
