'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Award, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Cada criança é única e merece ser amada e respeitada em sua individualidade.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Inclusão',
      description: 'Trabalhamos por uma sociedade que abraça e valoriza a diversidade.',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Oportunidades',
      description: 'Criamos caminhos para que cada criança desenvolva seu máximo potencial.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos sempre a melhor qualidade no atendimento e nos serviços oferecidos.',
      color: 'from-emerald-400 to-teal-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full"
              >
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-purple-700 font-medium text-sm">Há mais de 20 anos transformando vidas</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
              >
                Sobre a{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Associação Amigo Down
                </span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                Dedicamos nossos corações ao apoio integral de crianças com síndrome de Down 
                e suas famílias. Nossa missão é promover a inclusão social, educacional e 
                profissional, oferecendo suporte especializado e criando oportunidades 
                para que cada criança desenvolva suas habilidades e talentos únicos.
              </p>
              
              <p>
                Acreditamos que cada criança tem potencial ilimitado e merece viver
                em uma sociedade inclusiva, onde suas diferenças são celebradas
                como parte da riqueza humana. Trabalhamos com amor, dedicação e
                profissionalismo para construir um futuro mais justo e acolhedor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Conheça Nossa História Completa</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl border border-gray-100/50 text-center transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}