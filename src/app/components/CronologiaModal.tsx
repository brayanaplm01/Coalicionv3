import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import { IconX, IconCalendar, IconArrowRight, IconTarget } from "@tabler/icons-react";

interface CronologiaModalProps {
  open: boolean;
  onClose: () => void;
}

const timeline = [
  {
    mes: "Noviembre 2024",
    color: "#059669", // green-600
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    items: [
      {
        dia: "12",
        titulo: "Lanzamiento de la Coalición",
        desc: "Presentación formal, lanzamiento de recursos, lanzamiento del compromiso con la lucha contra la desinformación electoral en Bolivia."
      }
    ]
  },
  {
    mes: "Diciembre 2024",
    color: "#0d9488", // teal-600
    gradient: "from-teal-600 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
    items: [
      {
        dia: "5",
        titulo: "Taller de Coordinación",
        desc: "Definición de lineamientos de acción conjunta y selección inicial sobre diseño de la desinformación electoral."
      },
      {
        dia: "13-14",
        titulo: "Taller de Análisis del Entorno Informativo",
        desc: "Implementación de talleres para detectar desinformación y analizar tendencias."
      },
      {
        dia: "16",
        titulo: "Implementación de plataformas y sistemas piloto",
        desc: "Instalación de plataformas piloto y diseño de cronograma de acciones escalables."
      },
      {
        dia: "20",
        titulo: "Difusión de educaciones públicas",
        desc: "Difusión de materiales educativos, boletines, infografías, entrevistas en redes sociales y portales digitales aliados."
      }
    ]
  },
  {
    mes: "Enero 2025",
    color: "#2563eb", // blue-600
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    items: [
      {
        dia: "20",
        titulo: "Reunión de Coordinación 2025",
        desc: "Presentación de avances conjuntos y evaluación del contexto electoral."
      },
      {
        dia: "27",
        titulo: "Inicio del Boletín de Desinformación",
        desc: "Publicación del primer 'Centro conjunto de desinformación' elaborado por Fundación Aru y Fundación Internet Bolivia."
      }
    ]
  },
  {
    mes: "Febrero 2025",
    color: "#7c3aed", // violet-600
    gradient: "from-violet-600 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    items: [
      {
        dia: "11",
        titulo: "Diálogo sobre consulta de expertos y narrativa de desinformación",
        desc: "Conversatorio con expertos en desinformación y formulación de lineamientos argumentales."
      }
    ]
  },
  {
    mes: "Marzo 2025",
    color: "#dc2626", // red-600
    gradient: "from-red-600 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    items: [
      {
        dia: "10",
        titulo: "Taller sobre Mitos Electorales y Panel",
        desc: "Desmontando mitos electorales: análisis, lógica, contexto y agenda electoral."
      },
      {
        dia: "22",
        titulo: "Conversatorio sobre estrategias digitales de desinformación",
        desc: "Participación de expertos de Argentina, Brasil, Colombia, México y Perú; mesa de mujeres y juventudes."
      }
    ]
  },
  {
    mes: "Abril 2025",
    color: "#ea580c", // orange-600
    gradient: "from-orange-600 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
    items: [
      {
        dia: "10",
        titulo: "Taller sobre Mitos Electorales y Panel",
        desc: "Continuación de espacios pedagógicos sobre mecanismos de encuesta y consulta electoral."
      },
      {
        dia: "28",
        titulo: "Difusión de materiales educativos y conclusiones",
        desc: "Difusión de materiales educativos y conclusiones sobre la desinformación."
      }
    ]
  }
];

const proximas = [
  "Entrega de recomendaciones a autoridades nacionales y Tribunal Supremo Electoral",
  "Salas de monitoreo conjunto en espacios públicos",
  "Difusión de resultados y boletines",
  "Jornadas de alfabetización digital y mediática",
  "Casos emblemáticos de desinformación",
  "Lanzamiento de plataforma digital boliviana"
];

const CronologiaModal: React.FC<CronologiaModalProps> = ({ open, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!open) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const blocks = Array.from(container.querySelectorAll('.timeline-block')) as HTMLElement[];
      if (blocks.length < 2) return;
      const first = blocks[0];
      const last = blocks[blocks.length - 1];
      const start = first.offsetTop + first.offsetHeight / 2;
      const end = last.offsetTop + last.offsetHeight / 2;
      const scrollTop = container.scrollTop;
      const visibleStart = Math.max(0, scrollTop + container.clientHeight / 8);
      const percent = Math.min(1, Math.max(0, (visibleStart - start) / (end - start)));
      const totalLine = end - start;
      setLineHeight(percent * totalLine);
    };
    handleScroll();
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
    return;
  }, [open]);

  useEffect(() => {
    controls.start({ height: lineHeight });
  }, [lineHeight, controls]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative border border-white/20"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200/50 p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
              <button 
                onClick={onClose} 
                className="absolute right-3 top-3 sm:right-6 sm:top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
              >
                <IconX size={16} className="sm:hidden" />
                <IconX size={20} className="hidden sm:block" />
              </button>
              
              <div className="text-center">
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-gray-900">Cronología </span>
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Completa
                  </span>
                </motion.h2>
                
                <motion.div 
                  className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-2 sm:mb-3"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Seguimiento detallado de nuestras actividades y logros en la lucha contra la desinformación
                </motion.p>
              </div>
            </div>

            {/* Timeline Content */}
            <div 
              ref={containerRef} 
              className="overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative"
              style={{ height: 'calc(90vh - 160px)', scrollBehavior: 'smooth' }}
            >
              {/* Animated timeline line */}
              <motion.div
                ref={lineRef}
                className="absolute left-6 sm:left-8 lg:left-12 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full z-0"
                initial={{ height: 0 }}
                animate={controls}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              <div className="space-y-6 sm:space-y-8 relative z-10">
                {timeline.map((bloque, idx) => (
                  <motion.div
                    key={bloque.mes}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`timeline-block bg-gradient-to-br ${bloque.bgGradient} rounded-xl sm:rounded-2xl p-4 sm:p-6 ml-6 sm:ml-8 lg:ml-12 shadow-lg border border-white/30 relative`}
                  >
                    {/* Timeline dot */}
                    <div 
                      className={`absolute -left-10 sm:-left-12 lg:-left-16 top-4 sm:top-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${bloque.gradient} rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white`}
                    >
                      <IconCalendar size={12} className="sm:hidden text-white" />
                      <IconCalendar size={16} className="hidden sm:block text-white" />
                    </div>
                    
                    {/* Month header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${bloque.gradient} bg-clip-text text-transparent`}>
                        {bloque.mes}
                      </h3>
                      <div className={`h-0.5 sm:h-1 flex-1 bg-gradient-to-r ${bloque.gradient} rounded-full`}></div>
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-3 sm:space-y-4">
                      {bloque.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          viewport={{ once: true, amount: 0.3 }}
                          className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/40"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div 
                              className={`bg-gradient-to-br ${bloque.gradient} text-white font-bold text-sm sm:text-lg w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                            >
                              {item.dia}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-700 transition-colors duration-300">
                                {item.titulo}
                              </h4>
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                            <IconArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300 mt-1 sm:mt-2 flex-shrink-0" size={16} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                {/* Próximas actividades */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (timeline.length + 1) }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 ml-6 sm:ml-8 lg:ml-12 shadow-lg border border-orange-200 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 sm:-left-12 lg:-left-16 top-4 sm:top-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white">
                    <IconTarget size={12} className="sm:hidden text-white" />
                    <IconTarget size={16} className="hidden sm:block text-white" />
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Próximas Actividades
                    </h3>
                    <div className="h-0.5 sm:h-1 flex-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>

                  {/* Future items */}
                  <div className="space-y-2 sm:space-y-3">
                    {proximas.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/40"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                          <p className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-orange-700 transition-colors duration-300 flex-1">
                            {item}
                          </p>
                          <IconArrowRight className="text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" size={14} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CronologiaModal; 