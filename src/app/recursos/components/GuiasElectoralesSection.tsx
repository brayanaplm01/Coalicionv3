"use client";

import React from "react";
import { motion } from "motion/react";
import { IconDownload, IconEye, IconFileText, IconCalendar } from "@tabler/icons-react";

interface GuiaElectoral {
  id: number;
  title: string;
  description: string;
  type: "PDF" | "DOC" | "XLSX";
  size: string;
  downloadUrl: string;
  previewUrl?: string;
  date: string;
  category: "manual" | "procedimiento" | "normativa" | "capacitacion";
}

const guiasElectorales: GuiaElectoral[] = [
  {
    id: 1,
    title: "Manual de Verificación de Hechos Electorales",
    description: "Guía completa para la verificación de información electoral y detección de desinformación.",
    type: "PDF",
    size: "2.3 MB",
    downloadUrl: "/docs/manual-verificacion.pdf",
    date: "2024-03-15",
    category: "manual"
  },
  {
    id: 2,
    title: "Procedimientos de Monitoreo Electoral",
    description: "Protocolos y metodologías para el monitoreo efectivo de procesos electorales.",
    type: "PDF",
    size: "1.8 MB",
    downloadUrl: "/docs/procedimientos-monitoreo.pdf",
    date: "2024-02-28",
    category: "procedimiento"
  },
  {
    id: 3,
    title: "Marco Normativo Electoral Boliviano",
    description: "Compendio de leyes y reglamentos que rigen los procesos electorales en Bolivia.",
    type: "PDF",
    size: "4.1 MB",
    downloadUrl: "/docs/marco-normativo.pdf",
    date: "2024-01-20",
    category: "normativa"
  },
  {
    id: 4,
    title: "Guía de Capacitación para Observadores",
    description: "Material de formación para observadores electorales y verificadores de información.",
    type: "PDF",
    size: "3.2 MB",
    downloadUrl: "/docs/capacitacion-observadores.pdf",
    date: "2024-03-01",
    category: "capacitacion"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "manual": return "from-blue-600 to-blue-700";
    case "procedimiento": return "from-green-600 to-green-700";
    case "normativa": return "from-purple-600 to-purple-700";
    case "capacitacion": return "from-orange-600 to-orange-700";
    default: return "from-gray-600 to-gray-700";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "manual": return "Manual";
    case "procedimiento": return "Procedimiento";
    case "normativa": return "Normativa";
    case "capacitacion": return "Capacitación";
    default: return "Documento";
  }
};

export function GuiasElectoralesSection() {
  const handleDownload = (url: string, title: string) => {
    // Aquí iría la lógica de descarga real
    console.log(`Descargando: ${title} desde ${url}`);
    // Por ahora solo mostramos un alert
    alert(`Funcionalidad de descarga para: ${title}`);
  };

  const handlePreview = (url: string, title: string) => {
    // Aquí iría la lógica de preview real
    console.log(`Vista previa: ${title}`);
    alert(`Funcionalidad de vista previa para: ${title}`);
  };

  return (
    <motion.section
      id="guias-electorales"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-slate-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
            <span className="text-[#222426]">Guías </span>
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent">
              Electorales
            </span>
          </h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-red-800 to-rose-800 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-opensans">
            Documentos especializados, manuales y guías para el fortalecimiento de los procesos electorales
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {guiasElectorales.map((guia, index) => (
            <motion.div
              key={guia.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header with category and type */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(guia.category)}`}>
                  {getCategoryLabel(guia.category)}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {guia.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {guia.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-montserrat font-bold text-[#222426] mb-3 group-hover:text-[#CBA135] transition-colors">
                  {guia.title}
                </h3>
                <p className="text-gray-600 font-opensans leading-relaxed mb-4">
                  {guia.description}
                </p>
                
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <IconCalendar className="h-4 w-4 mr-2" />
                  {new Date(guia.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleDownload(guia.downloadUrl, guia.title)}
                  className="flex-1 bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#B8941F] hover:to-[#CBA135] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconDownload className="h-4 w-4" />
                  Descargar
                </motion.button>
                
                <motion.button
                  onClick={() => handlePreview(guia.previewUrl || guia.downloadUrl, guia.title)}
                  className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-[#CBA135] hover:text-[#CBA135] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconEye className="h-4 w-4" />
                  Vista Previa
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-full border border-gray-200">
            <IconFileText className="h-5 w-5 text-[#CBA135]" />
            <span className="text-gray-700 font-opensans font-medium">
              ¿Necesitas más recursos? Contáctanos para acceso completo
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
