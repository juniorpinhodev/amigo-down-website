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
      href: '/doe',
      buttonText: 'Fazer Doação'
    },
    {
      icon: Users,
      title: 'Voluntariado',
      description: 'Compartilhe seu tempo e talentos para apoiar nossas atividades e eventos.',
      color: 'from-blue-500 to-cyan-500',
      href: '/contatos',
      buttonText: 'Ser Voluntário'
    },
    {
      icon: Award,
      title: 'Parcerias',
      description: 'Empresas e organizações podem se tornar parceiras em nossa missão.',
      color: 'from-green-500 to-emerald-500',
      href: '/contatos',
      buttonText: 'Seja Parceiro'
    }
  ]

  return (
    <>
      {/* Layout Mobile Modernizado */}
      <section className="md:hidden min-h-screen relative overflow-hidden bg-slate-50 pt-16">

        
        {/* Hero Image - Full Width */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url('/hero/hero.png')`,
            }}
          />
          {/* Overlay com gradiente para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/25 to-secondary-600/25" />

        {/* Efeito glass adicional na image*/}
        <div className="absolute inset-0 backdrop-blur-[0.07rem]" />

        {/* Pontos decorativos com efeito glass */}
        <div className="absolute inset-0 overflow-hidden" />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative -mt-8 px-4 pb-8">
          {/* Header Compacto com mais elegância */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-center mb-6"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-3 shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Faça Parte da Nossa Missão
            </h1>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              Existem várias formas de contribuir para um mundo mais inclusivo. 
              Escolha como você pode fazer a diferença hoje mesmo.
            </p>
          </motion.div>

          {/* Cards Compactos e Modernos */}
          <div className="space-y-3 max-w-sm mx-auto pt-8">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.2 + index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Link href={action.href} className="block group">
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-slate-900/5 border border-white/80 group-active:scale-[0.97] transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-0.5 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    <div className="flex items-center space-x-3 relative z-10">
                      {/* Icon with enhanced effects */}
                      <motion.div 
                        className={`w-11 h-11 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/15 group-hover:shadow-xl group-hover:shadow-slate-900/20`}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <action.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors">
                          {action.description}
                        </p>
                      </div>
                      
                      {/* Enhanced arrow indicator */}
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 group-active:bg-slate-300 transition-all duration-200 shadow-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.svg 
                            className="w-3 h-3 text-slate-600 group-hover:text-slate-800" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Bottom mais discreto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-slate-500 text-xs mb-3">
              Seja nosso <span className="font-semibold text-slate-700">amigo</span> também
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layout Desktop (mantido original) */}
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
        className="hidden md:block section-padding bg-gradient-to-r mt-12 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url('/hero/hero.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay com gradiente para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/25 to-secondary-600/25" />

        {/* Efeito glass adicional na image*/}
        <div className="absolute inset-0 backdrop-blur-[0.25rem]" />

        {/* Pontos decorativos com efeito glass */}
        <div className="absolute inset-0 overflow-hidden" />

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
    </>
  )
}