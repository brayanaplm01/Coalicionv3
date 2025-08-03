import { motion } from "motion/react";
import { IconTarget, IconEye, IconUsers, IconBulb, IconShield } from "@tabler/icons-react";

export default function MissionVisionSection() {
  return (
    <motion.section
      id="mission-vision"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-transparent to-slate-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Title */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-regular mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#222426] font-montserrat text-4xl sm:text-5xl font-semibold">Nuestra </span>
            <span className="bg-gradient-to-r from-[#CBA135] to-[#B8941F] bg-clip-text text-transparent font-montserrat text-4xl sm:text-5xl font-semibold">
              Propuesta
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r  from-red-800 to-rose-800 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Content Grid - Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 text-justify gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-800 to-rose-700 rounded-lg flex items-center justify-center">
                <IconTarget className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-[#222426]">
                Misión
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-opensans">
              Combatir la desinformación electoral mediante el trabajo colaborativo de organizaciones comprometidas con la integridad de los procesos democráticos en Bolivia.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00797B] to-[#005F61] rounded-lg flex items-center justify-center">
                <IconEye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-[#222426]">
                Visión
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-opensans">
              Una Bolivia con elecciones transparentes, donde la información veraz fortalezca la democracia y la participación ciudadana informada sea la base de nuestro sistema electoral.
            </p>
          </motion.div>
        </div>

        {/* Objectives Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center  mb-12"
          >
            <h3 className="text-4xl sm:text-5xl font-montserrat font-semibold text-[#222426] mb-4">
              Nuestros objetivos
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-3  gap-8">
            {/* Objective 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <IconUsers className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-[#222426]">
                  Fortalecer la Colaboración
                </h4>
              </div>
              <p className="text-gray-700 text-justify font-opensans leading-relaxed">
                Establecer una coalición que reúna a instituciones públicas, sociedad civil, medios de comunicación y socios internacionales para contrarrestar la desinformación.
              </p>
            </motion.div>

            {/* Objective 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <IconBulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-[#222426]">
                  Desarrollo de Capacidades
                </h4>
              </div>
              <p className="text-gray-700 text-justify font-opensans leading-relaxed">
                Colaborar en iniciativas que fortalezcan la alfabetización mediática digital, aumenten la conciencia pública y aseguren la integridad de la información electoral.
              </p>
            </motion.div>

            {/* Objective 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <IconShield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-[#222426]">
                  Integridad de la Información
                </h4>
              </div>
              <p className="text-gray-700 text-justify font-opensans leading-relaxed">
                Mitigar el impacto de la desinformación y los discursos tóxicos, especialmente hacia las mujeres y poblaciones vulnerables.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-full border border-gray-200">
            <div className="w-3 h-3 bg-[#CBA135] rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-opensans font-medium">
              Compromiso con la Democracia Boliviana
            </span>
            <div className="w-3 h-3 bg-red-800 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
