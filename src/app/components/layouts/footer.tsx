"use client";

import React from "react";
import { motion } from "motion/react";
import { IconMail, IconPhone, IconMapPin, IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin, IconBrandYoutube, IconChevronUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  coalicion: [
    { name: "Quiénes Somos", href: "#about" },
    { name: "Organizaciones", href: "#organizations" },
    { name: "Nuestro Trabajo", href: "#work" },
    { name: "Transparencia", href: "#transparency" }
  ],
  recursos: [
    { name: "Verificación de Hechos", href: "#verification" },
    { name: "Guías Electorales", href: "#guides" },
    { name: "Reportes", href: "#reports" },
    { name: "Materiales Educativos", href: "#education" }
  ],
  contacto: [
    { icon: <IconMail className="h-4 w-4" />, text: "info@coalicionbolivia.org", href: "mailto:info@coalicionbolivia.org" },
    { icon: <IconPhone className="h-4 w-4" />, text: "+591 2 123-4567", href: "tel:+59121234567" },
    { icon: <IconMapPin className="h-4 w-4" />, text: "La Paz, Bolivia", href: "#" }
  ],
  social: [
    { icon: <IconBrandTwitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <IconBrandFacebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <IconBrandLinkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <IconBrandYoutube className="h-5 w-5" />, href: "#", name: "YouTube" }
  ]
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Green accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-emerald-900/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Logo and Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo.webp"
                  alt="Coalición Logo"
                  width={240}
                  height={150}
                  className="h-30 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Coalición Nacional comprometida con la integridad electoral y la lucha contra la desinformación en Bolivia.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-green-600/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Coalición Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Coalición</h3>
              <ul className="space-y-3">
                {footerLinks.coalicion.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recursos Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
              <ul className="space-y-4">
                {footerLinks.contacto.map((contact, index) => (
                  <li key={index}>
                    <a 
                      href={contact.href}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group"
                    >
                      <span className="mr-3 text-green-500 group-hover:scale-110 transition-transform">
                        {contact.icon}
                      </span>
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>

              
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 Coalición Nacional. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="#privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Términos
              </Link>
              
              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-green-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-green-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                aria-label="Volver arriba"
              >
                <IconChevronUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
