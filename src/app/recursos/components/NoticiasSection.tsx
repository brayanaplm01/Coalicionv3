"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { IconCalendar, IconMapPin, IconExternalLink, IconUsers, IconMicrophone } from "@tabler/icons-react";

interface NoticiaItem {
  id: number;
  title: string;
  description: string;
  type: "actividad" | "taller" | "comunicado" | "evento";
  date: string;
  location?: string;
  organizer: string;
  participants?: number;
  url?: string;
  status: "upcoming" | "ongoing" | "completed";
  featured: boolean;
  image?: string;
}

const noticias: NoticiaItem[] = [
  {
    id: 1,
    title: "Taller de Verificación de Hechos para Periodistas",
    description: "Capacitación especializada en técnicas de verificación y fact-checking dirigida a profesionales de medios de comunicación.",
    type: "taller",
    date: "2024-04-15",
    location: "La Paz, Bolivia",
    organizer: "Coalición Nacional",
    participants: 35,
    status: "upcoming",
    featured: true
  },
  {
    id: 2,
    title: "Comunicado: Lanzamiento de Plataforma de Monitoreo",
    description: "Anunciamos el lanzamiento oficial de nuestra nueva plataforma de monitoreo electoral en tiempo real.",
    type: "comunicado",
    date: "2024-03-28",
    organizer: "Directorio Ejecutivo",
    status: "completed",
    url: "https://coalicion.bo/comunicado-plataforma",
    featured: true
  },
  {
    id: 3,
    title: "Foro: Democracia Digital y Desinformación",
    description: "Evento público sobre los desafíos de la democracia en la era digital y estrategias para combatir la desinformación.",
    type: "evento",
    date: "2024-04-22",
    location: "Santa Cruz, Bolivia",
    organizer: "Universidad Autónoma",
    participants: 150,
    status: "upcoming",
    featured: false
  },
  {
    id: 4,
    title: "Actividad: Monitoreo Electoral Departamental",
    description: "Jornada de monitoreo y observación electoral en los 9 departamentos del país.",
    type: "actividad",
    date: "2024-04-01",
    location: "Nacional",
    organizer: "Red de Observadores",
    participants: 200,
    status: "ongoing",
    featured: true
  },
  {
    id: 5,
    title: "Taller de Alfabetización Digital para Ciudadanos",
    description: "Capacitación gratuita para ciudadanos sobre identificación de noticias falsas y uso responsable de redes sociales.",
    type: "taller",
    date: "2024-04-08",
    location: "Cochabamba, Bolivia",
    organizer: "Centro Educativo",
    participants: 60,
    status: "completed",
    featured: false
  },
  {
    id: 6,
    title: "Comunicado: Resultados del Monitoreo de Marzo",
    description: "Publicación de los resultados del monitoreo de desinformación durante el mes de marzo 2024.",
    type: "comunicado",
    date: "2024-04-02",
    organizer: "Equipo de Investigación",
    status: "completed",
    url: "https://coalicion.bo/monitoreo-marzo",
    featured: false
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "taller": return IconUsers;
    case "comunicado": return IconMicrophone;
    case "evento": return IconCalendar;
    default: return IconCalendar;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "actividad": return "from-blue-600 to-blue-700";
    case "taller": return "from-green-600 to-green-700";
    case "comunicado": return "from-red-600 to-red-700";
    case "evento": return "from-purple-600 to-purple-700";
    default: return "from-gray-600 to-gray-700";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "upcoming": return "bg-blue-100 text-blue-800";
    case "ongoing": return "bg-green-100 text-green-800";
    case "completed": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "upcoming": return "Próximo";
    case "ongoing": return "En curso";
    case "completed": return "Finalizado";
    default: return "Programado";
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "actividad": return "Actividad";
    case "taller": return "Taller";
    case "comunicado": return "Comunicado";
    case "evento": return "Evento";
    default: return "Noticia";
  }
};

export function NoticiasSection() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  const statusOptions = [
    { id: "all", label: "Todas" },
    { id: "upcoming", label: "Próximas" },
    { id: "ongoing", label: "En curso" },
    { id: "completed", label: "Finalizadas" }
  ];

  const filteredNoticias = selectedStatus === "all" 
    ? noticias 
    : noticias.filter(noticia => noticia.status === selectedStatus);

  const handleViewMore = (url: string, title: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Más información sobre: ${title}`);
    }
  };

  return (
    <motion.section
      id="noticias"
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
            <span className="text-[#222426]">Noticias y </span>
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent">
              Actividades
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
            Mantente informado sobre talleres, comunicados de prensa y actividades de la coalición
          </p>
        </motion.div>

        {/* Status Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {statusOptions.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedStatus === status.id
                  ? "bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {status.label}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNoticias.map((noticia, index) => {
            const IconComponent = getTypeIcon(noticia.type);
            
            return (
              <motion.div
                key={noticia.id}
                className={`bg-white rounded-2xl border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group relative ${
                  noticia.featured ? "border-[#CBA135]" : "border-gray-200"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Featured Badge */}
                {noticia.featured && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg border-2 border-white">
                      ⭐ Destacado
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(noticia.type)}`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(noticia.type)}`}>
                      {getTypeLabel(noticia.type)}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(noticia.status)}`}>
                    {getStatusLabel(noticia.status)}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-lg font-montserrat font-bold text-[#222426] mb-3 group-hover:text-[#CBA135] transition-colors line-clamp-2">
                    {noticia.title}
                  </h3>
                  <p className="text-gray-600 font-opensans text-sm leading-relaxed mb-4 line-clamp-3">
                    {noticia.description}
                  </p>
                  
                  {/* Meta info */}
                  <div className="space-y-2 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <IconCalendar className="h-3 w-3 mr-2" />
                      {new Date(noticia.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    {noticia.location && (
                      <div className="flex items-center">
                        <IconMapPin className="h-3 w-3 mr-2" />
                        {noticia.location}
                      </div>
                    )}
                    {noticia.participants && (
                      <div className="flex items-center">
                        <IconUsers className="h-3 w-3 mr-2" />
                        {noticia.participants} participantes
                      </div>
                    )}
                  </div>

                  {/* Organizer */}
                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-semibold">Organiza:</span> {noticia.organizer}
                  </div>
                </div>

                {/* Action Button */}
                {(noticia.url || noticia.type === "comunicado") && (
                  <motion.button
                    onClick={() => handleViewMore(noticia.url || "", noticia.title)}
                    className="w-full bg-gradient-to-r from-[#CBA135] to-[#B8941F] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#B8941F] hover:to-[#CBA135] transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconExternalLink className="h-4 w-4" />
                    Ver más información
                  </motion.button>
                )}
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
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200">
            <IconMicrophone className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-opensans font-medium">
              Suscríbete para recibir notificaciones de nuevas actividades
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
