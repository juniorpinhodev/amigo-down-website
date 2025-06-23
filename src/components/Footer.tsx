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
    { href: '/transparencia', label: 'Transparência' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
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
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Promovendo inclusão, amor e oportunidades para todas as crianças.
              Juntos, construímos um futuro mais acolhedor e diverso.
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

          {/* Links Rápidos */}
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

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">amigodownsc1991@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">(48) 99170-4881</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  R. Nove de Julho, 900 - Ipiranga<br />
                  São José - SC, 88111-380
                </span> 
              </div>
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
          <p className="text-gray-400">
            © 2025 Associação Amigo Down. Todos os direitos reservados.
          </p>
          <p className="text-gray-200">
            Desenvolvido por{" "}
            <a
              href="https://juniorpinho.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline"
            >
              Junior Pinho | DEV
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}