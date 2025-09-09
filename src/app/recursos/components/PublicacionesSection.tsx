"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { IconDownload, IconEye, IconCalendar, IconTag, IconFileText } from "@tabler/icons-react";

interface Publicacion {
  id: number;
  title: string;
  description: string;
  type: "informe" | "estudio" | "monitoreo" | "investigacion";
  category: "electoral" | "desinformacion" | "democracia" | "analisis";
  date: string;
  author: string;
  pages: number;
  downloadUrl: string;
  previewUrl?: string;
  tags: string[];
  featured: boolean;
}

const publicaciones: Publicacion[] = [
  {
    id: 1,
    title: "Informe de Monitoreo Electoral 2024",
    description: "Análisis comprehensive del proceso electoral 2024, incluyendo patrones de desinformación y recomendaciones para futuras elecciones.",
    type: "informe",
    category: "electoral",
    date: "2024-03-20",
    author: "Coalición Nacional",
    pages: 45,
    downloadUrl: "/docs/informe-monitoreo-2024.pdf",
    tags: ["Elecciones", "Monitoreo", "Transparencia"],
    featured: true
  },
  {
    id: 2,
    title: "Estudio sobre Desinformación en Redes Sociales",
    description: "Investigación detallada sobre la propagación de noticias falsas durante períodos electorales en plataformas digitales.",
    type: "estudio",
    category: "desinformacion",
    date: "2024-02-15",
    author: "Centro de Investigación",
    pages: 67,
    downloadUrl: "/docs/estudio-desinformacion-redes.pdf",
    tags: ["Redes Sociales", "Desinformación", "Análisis"],
    featured: true
  },
  {
    id: 3,
    title: "Monitoreo de Medios - Primer Trimestre 2024",
    description: "Seguimiento y análisis de la cobertura mediática durante los primeros meses del año electoral.",
    type: "monitoreo",
    category: "electoral",
    date: "2024-04-01",
    author: "Observatorio de Medios",
    pages: 32,
    downloadUrl: "/docs/monitoreo-medios-q1.pdf",
    tags: ["Medios", "Cobertura", "Electoral"],
    featured: false
  },
  {
    id: 4,
    title: "Investigación: Impacto de la Desinformación en la Democracia",
    description: "Análisis profundo sobre cómo la desinformación afecta la participación ciudadana y la confianza en las instituciones.",
    type: "investigacion",
    category: "democracia",
    date: "2024-01-30",
    author: "Instituto Democrático",
    pages: 89,
    downloadUrl: "/docs/investigacion-impacto-democracia.pdf",
    tags: ["Democracia", "Participación", "Confianza"],
    featured: true
  },
  {
    id: 5,
    title: "Informe Técnico: Herramientas de Verificación",
    description: "Evaluación técnica de las herramientas disponibles para la verificación de hechos y su efectividad.",
    type: "informe",
    category: "analisis",
    date: "2024-03-10",
    author: "Equipo Técnico",
    pages: 28,
    downloadUrl: "/docs/informe-herramientas-verificacion.pdf",
    tags: ["Verificación", "Herramientas", "Tecnología"],
    featured: false
  },
  {
    id: 6,
    title: "Estudio Comparativo: Sistemas Electorales Regionales",
    description: "Comparación de sistemas electorales y mecanismos anti-desinformación en países de América Latina.",
    type: "estudio",
    category: "electoral",
    date: "2024-02-28",
    author: "Centro Regional",
    pages: 76,
    downloadUrl: "/docs/estudio-comparativo-regional.pdf",
    tags: ["Regional", "Comparativo", "Sistemas"],
    featured: false
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "informe": return "from-blue-600 to-blue-700";
    case "estudio": return "from-green-600 to-green-700";
    case "monitoreo": return "from-purple-600 to-purple-700";
    case "investigacion": return "from-orange-600 to-orange-700";
    default: return "from-gray-600 to-gray-700";
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "informe": return "Informe";
    case "estudio": return "Estudio";
    case "monitoreo": return "Monitoreo";
    case "investigacion": return "Investigación";
    default: return "Documento";
  }
};

export function PublicacionesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "Todos" },
    { id: "electoral", label: "Electoral" },
    { id: "desinformacion", label: "Desinformación" },
    { id: "democracia", label: "Democracia" },
    { id: "analisis", label: "Análisis" }
  ];

  const filteredPublicaciones = selectedCategory === "all" 
    ? publicaciones 
    : publicaciones.filter(pub => pub.category === selectedCategory);

  const handleDownload = (url: string, title: string) => {
    console.log(`Descargando: ${title} desde ${url}`);
    alert(`Funcionalidad de descarga para: ${title}`);
  };

  const handlePreview = (url: string, title: string) => {
    console.log(`Vista previa: ${title}`);
    alert(`Funcionalidad de vista previa para: ${title}`);
  };

  return (
    <motion.section
      id="publicaciones"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
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
            <span className="text-[#222426]">Publicaciones e </span>
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent">
              Informes
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
            Informes especializados, estudios de investigación y documentos de monitoreo electoral
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublicaciones.map((publicacion, index) => (
            <motion.div
              key={publicacion.id}
              className={`bg-white rounded-2xl border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group ${
                publicacion.featured ? "border-[#CBA135]" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              {/* Featured Badge */}
              {publicacion.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Destacado
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(publicacion.type)}`}>
                  {getTypeLabel(publicacion.type)}
                </span>
                <div className="text-xs text-gray-500">
                  {publicacion.pages} páginas
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-bold text-[#222426] mb-3 group-hover:text-[#CBA135] transition-colors line-clamp-2">
                  {publicacion.title}
                </h3>
                <p className="text-gray-600 font-opensans text-sm leading-relaxed mb-4 line-clamp-3">
                  {publicacion.description}
                </p>
                
                {/* Meta info */}
                <div className="space-y-2 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <IconCalendar className="h-3 w-3 mr-2" />
                    {new Date(publicacion.date).toLocaleDateString('es-ES')}
                  </div>
                  <div className="flex items-center">
                    <IconFileText className="h-3 w-3 mr-2" />
                    {publicacion.author}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {publicacion.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <motion.button
                  onClick={() => handleDownload(publicacion.downloadUrl, publicacion.title)}
                  className="flex-1 bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-3 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#B8941F] hover:to-[#CBA135] transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconDownload className="h-3 w-3" />
                  Descargar
                </motion.button>
                
                <motion.button
                  onClick={() => handlePreview(publicacion.previewUrl || publicacion.downloadUrl, publicacion.title)}
                  className="px-3 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-[#CBA135] hover:text-[#CBA135] transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconEye className="h-3 w-3" />
                  Ver
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
            <IconTag className="h-5 w-5 text-[#CBA135]" />
            <span className="text-gray-700 font-opensans font-medium">
              Nuevas publicaciones disponibles mensualmente
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
