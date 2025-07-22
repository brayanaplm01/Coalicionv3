import { motion, AnimatePresence } from "motion/react";
import { IconX, IconShield, IconWorld, IconNews, IconUser, IconMail, IconArrowRight } from "@tabler/icons-react";

interface ContactoModalProps {
  open: boolean;
  onClose: () => void;
}

const contactOptions = [
  {
    icon: IconShield,
    title: "Adhesiones a la Coalición",
    description: "Si tu organización está interesada en formar parte de nuestra coalición, contáctanos para conocer los requisitos y procesos de adhesión.",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-200"
  },
  {
    icon: IconWorld,
    title: "Organizaciones Internacionales",
    description: "Intercambio de experiencias y buenas prácticas en la lucha contra la desinformación electoral.",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    icon: IconNews,
    title: "Medios de Comunicación",
    description: "Consultas sobre nuestras actividades, declaraciones o solicitudes de entrevistas.",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    icon: IconUser,
    title: "Ciudadanía",
    description: "Información sobre nuestras actividades, recursos educativos y herramientas disponibles.",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200"
  }
];

export default function ContactoModal({ open, onClose }: ContactoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-white/20"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative p-8">
              {/* Header */}
              <div className="text-center mb-12">
                <button 
                  onClick={onClose} 
                  className="absolute right-6 top-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
                >
                  <IconX size={20} />
                </button>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-gray-900">¿Cómo </span>
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Contactarnos
                  </span>
                  <span className="text-gray-900">?</span>
                </motion.h2>
                
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Estamos aquí para responder tus consultas y fortalecer nuestra red contra la desinformación
                </motion.p>
              </div>

              {/* Contact Options Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className={`${option.bgColor} ${option.borderColor} border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden`}>
                      {/* Card background decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl transform translate-x-6 -translate-y-6"></div>
                      
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${option.iconBg} ${option.iconColor} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                            <option.icon size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                              {option.title}
                            </h3>
                          </div>
                          <IconArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" size={20} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA Section */}
              <motion.div 
                className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-center text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform translate-x-6 translate-y-6"></div>
                
                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    ¡Conectemos y Trabajemos Juntos!
                  </h3>
                  
                  <p className="text-green-100 mb-6 text-lg max-w-2xl mx-auto">
                    Tu participación es fundamental para fortalecer la democracia boliviana
                  </p>
                  
                  <motion.a
                    href="mailto:contacto@facto.bo"
                    className="inline-flex items-center gap-3 bg-white text-green-700 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconMail size={24} />
                    <span className="text-xl">contacto@facto.bo</span>
                    <IconArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}