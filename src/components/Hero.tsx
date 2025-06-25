'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Users, Award } from 'lucide-react'

export default function Hero() {
  const actions = [
    {
      icon: Heart,
      title: 'Doar',
      description: 'Sua doação ajuda a manter nossos programas e serviços que transformam vidas.',
      color: 'from-red-500 to-pink-500',
      href: '/doacao',
      buttonText: 'Fazer Doação'
    },
    {
      icon: Users,
      title: 'Voluntariado',
      description: 'Compartilhe seu tempo e talentos para apoiar nossas atividades e eventos.',
      color: 'from-blue-500 to-cyan-500',
      href: '/voluntariado',
      buttonText: 'Ser Voluntário'
    },
    {
      icon: Award,
      title: 'Parcerias',
      description: 'Empresas e organizações podem se tornar parceiras em nossa missão.',
      color: 'from-green-500 to-emerald-500',
      href: '/parcerias',
      buttonText: 'Seja Parceiro'
    }
  ]

  return (
    <motion.section 
      initial={{ 
        backgroundPosition: 'center 120%',
        opacity: 0,
        scale: 1.1
      }}
      animate={{ 
        backgroundPosition: 'center center',
        opacity: 1,
        scale: 1
      }}
      transition={{ 
        duration: 1.5,
        ease: "easeOut"
      }}
      className="section-padding bg-gradient-to-r mt-12 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('/hero/hero.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay com gradiente para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/50 to-secondary-600/50" />

      {/* Efeito glass adicional */}
      <div className="absolute inset-0 backdrop-blur-[0.15rem]" />

      {/* Pontos decorativos com efeito glass */}
      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Faça Parte da Nossa Missão
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Existem várias formas de contribuir para um mundo mais inclusivo. 
            Escolha como você pode fazer a diferença hoje mesmo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <action.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">{action.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                {action.description}
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={action.href}
                  className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {action.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}