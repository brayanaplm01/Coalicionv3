"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { IconDownload, IconPlayerPlay, IconPhoto, IconShare } from "@tabler/icons-react";
import Image from "next/image";

interface MultimediaItem {
  id: number;
  title: string;
  description: string;
  type: "infografia" | "video" | "arte" | "presentacion";
  category: "campana" | "educativo" | "promocional" | "informativo";
  thumbnail: string;
  downloadUrl: string;
  previewUrl?: string;
  duration?: string; // Para videos
  format: string;
  size: string;
  tags: string[];
  featured: boolean;
}

const multimediaItems: MultimediaItem[] = [
  {
    id: 1,
    title: "Infografía: Cómo Detectar Noticias Falsas",
    description: "Guía visual paso a paso para identificar y verificar información falsa en redes sociales.",
    type: "infografia",
    category: "educativo",
    thumbnail: "/images/infografia-noticias-falsas.jpg",
    downloadUrl: "/downloads/infografia-detectar-fake-news.png",
    format: "PNG",
    size: "2.3 MB",
    tags: ["Verificación", "Tutorial", "Redes Sociales"],
    featured: true
  },
  {
    id: 2,
    title: "Video: Tu Voto Cuenta - Campaña 2024",
    description: "Video promocional que motiva la participación electoral responsable e informada.",
    type: "video",
    category: "campana",
    thumbnail: "/images/video-tu-voto-cuenta.jpg",
    downloadUrl: "/downloads/tu-voto-cuenta-hd.mp4",
    previewUrl: "https://youtube.com/watch?v=example",
    duration: "2:30",
    format: "MP4",
    size: "45.2 MB",
    tags: ["Participación", "Electoral", "Campaña"],
    featured: true
  },
  {
    id: 3,
    title: "Arte de Campaña: Democracia Transparente",
    description: "Diseños para redes sociales promoviendo la transparencia electoral.",
    type: "arte",
    category: "promocional",
    thumbnail: "/images/arte-democracia-transparente.jpg",
    downloadUrl: "/downloads/arte-democracia-pack.zip",
    format: "ZIP",
    size: "12.8 MB",
    tags: ["Diseño", "Transparencia", "Social Media"],
    featured: false
  },
  {
    id: 4,
    title: "Presentación: Combatiendo la Desinformación",
    description: "Presentación educativa sobre estrategias para combatir la desinformación.",
    type: "presentacion",
    category: "educativo",
    thumbnail: "/images/presentacion-desinformacion.jpg",
    downloadUrl: "/downloads/presentacion-desinformacion.pptx",
    format: "PPTX",
    size: "8.7 MB",
    tags: ["Educación", "Desinformación", "Capacitación"],
    featured: true
  },
  {
    id: 5,
    title: "Video Corto: Verifica Antes de Compartir",
    description: "Video de 30 segundos ideal para compartir en redes sociales.",
    type: "video",
    category: "educativo",
    thumbnail: "/images/video-verifica-compartir.jpg",
    downloadUrl: "/downloads/verifica-antes-compartir.mp4",
    duration: "0:30",
    format: "MP4",
    size: "15.4 MB",
    tags: ["Verificación", "Corto", "Viral"],
    featured: false
  },
  {
    id: 6,
    title: "Infografía: Proceso Electoral Boliviano",
    description: "Explicación visual del proceso electoral boliviano y sus etapas.",
    type: "infografia",
    category: "informativo",
    thumbnail: "/images/infografia-proceso-electoral.jpg",
    downloadUrl: "/downloads/proceso-electoral-bolivia.png",
    format: "PNG",
    size: "3.1 MB",
    tags: ["Electoral", "Proceso", "Bolivia"],
    featured: false
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "infografia": return "from-blue-600 to-blue-700";
    case "video": return "from-red-600 to-red-700";
    case "arte": return "from-purple-600 to-purple-700";
    case "presentacion": return "from-green-600 to-green-700";
    default: return "from-gray-600 to-gray-700";
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "infografia": return "Infografía";
    case "video": return "Video";
    case "arte": return "Arte";
    case "presentacion": return "Presentación";
    default: return "Multimedia";
  }
};

export function MultimediaSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "Todos" },
    { id: "educativo", label: "Educativo" },
    { id: "campana", label: "Campaña" },
    { id: "promocional", label: "Promocional" },
    { id: "informativo", label: "Informativo" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? multimediaItems 
    : multimediaItems.filter(item => item.category === selectedCategory);

  const handleDownload = (url: string, title: string) => {
    console.log(`Descargando: ${title} desde ${url}`);
    alert(`Funcionalidad de descarga para: ${title}`);
  };

  const handlePreview = (url: string, title: string) => {
    console.log(`Vista previa: ${title}`);
    if (url.includes('youtube')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Funcionalidad de vista previa para: ${title}`);
    }
  };

  const handleShare = (title: string) => {
    console.log(`Compartiendo: ${title}`);
    alert(`Funcionalidad de compartir para: ${title}`);
  };

  return (
    <motion.section
      id="multimedia"
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#CBA135]/10 to-red-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      
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
            <span className="text-[#222426]">Recursos </span>
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent">
              Multimedia
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
            Infografías, videos, artes de campaña y contenido visual para compartir y educar
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

        {/* Multimedia Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                className={`bg-white rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group ${
                  item.featured ? "border-[#CBA135]" : "border-gray-200"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Destacado
                    </span>
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuMzVlbSI+UHJldmlldyBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                  
                  {/* Play overlay for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <IconPlayerPlay className="h-8 w-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Duration for videos */}
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    <div className="text-xs text-gray-500">
                      {item.format} • {item.size}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-montserrat font-bold text-[#222426] mb-3 group-hover:text-[#CBA135] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-opensans text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => handleDownload(item.downloadUrl, item.title)}
                      className="flex-1 bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-3 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#B8941F] hover:to-[#CBA135] transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconDownload className="h-3 w-3" />
                      Descargar
                    </motion.button>
                    
                    {item.previewUrl && (
                      <motion.button
                        onClick={() => handlePreview(item.previewUrl!, item.title)}
                        className="px-3 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-[#CBA135] hover:text-[#CBA135] transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconPlayerPlay className="h-3 w-3" />
                        Ver
                      </motion.button>
                    )}
                    
                    <motion.button
                      onClick={() => handleShare(item.title)}
                      className="px-3 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-[#CBA135] hover:text-[#CBA135] transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconShare className="h-3 w-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200">
            <IconPhoto className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-opensans font-medium">
              Nuevo contenido multimedia disponible semanalmente
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
