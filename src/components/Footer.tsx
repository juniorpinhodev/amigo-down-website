'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { Heart, Mail, Phone, MapPin, Facebook} from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/doe', label: 'Doe Agora' },
    // { href: '/transparencia', label: 'Transparência' },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/amigodownsc',
      label: 'Facebook',
      target: '_blank'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/amigodown',
      label: 'Instagram',
      target: '_blank'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/5548991704881',
      label: 'WhatsApp',
      target: '_blank'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Layout Desktop: Grid Original */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Associação Amigo Down</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-justify">
              Promovendo inclusão, amor e oportunidades para todas as crianças. 
              Juntos, construímos um futuro mais acolhedor e diverso para nossa 
              comunidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Rápidos - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 break-words">amigodownsc1991@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">(48) 99170-4881</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-justify leading-relaxed">
                  R. Nove de Julho, 900 - Ipiranga<br />
                  São José - SC, 88111-380
                </span> 
              </div>
            </div>
          </motion.div>
        </div>

        {/* Layout Mobile/Tablet: Reorganizado por Prioridade */}
        <div className="flex flex-col space-y-8 lg:hidden">
          
          {/* 1º - Logo e Redes Sociais - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col items-center space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold">Associação Amigo Down</span>
              </div>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.target}
                    rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2º - Contato (Mais Importante para Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-6">Entre em Contato</h3>
            <div className="space-y-4 max-w-sm mx-auto">
              <motion.a 
                href="https://wa.me/5548991704881"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">(48) 99170-4881</span>
              </motion.a>
              <motion.a 
                href="mailto:amigodownsc1991@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm break-words">amigodownsc1991@gmail.com</span>
              </motion.a>
              <div className="flex items-start justify-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm text-center leading-relaxed">
                  R. Nove de Julho, 900 - Ipiranga<br />
                  São José - SC, 88111-380
                </span> 
              </div>
            </div>
          </motion.div>

          {/* 3º - Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 leading-relaxed text-justify mx-auto max-w-md px-4">
              Promovendo inclusão, amor e oportunidades para todos. 
              Juntos, construímos um futuro mais acolhedor e diverso para nossa 
              comunidade.
            </p>
          </motion.div>

          {/* 4º - Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-6">Navegue pelo Site</h3>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 mb-2">
            © 2025 Associação Amigo Down. Todos os direitos reservados.
          </p>
          <p className="text-gray-200">
            Desenvolvido por{" "}
            <a
              href="https://juniorpinho.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline transition-colors duration-200"
            >
              Junior Pinho | DEV
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}