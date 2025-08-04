'use client'

import Link from 'next/link';
import { motion } from 'framer-motion'
import { Heart, Users, Target, Award, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Cada pessoa é única. Cuidamos com amor genuíno, respeitando a essência de cada criança, adolescente e jovem',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Inclusão',
      description: 'Construímos uma sociedade que acolhe, respeita e celebra a diversidade em todas as fases da vida',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Oportunidades',
      description: 'Desenhamos caminhos reais para que cada pessoa com síndrome de Down floresça e alcance seus sonhos',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometidos com a excelência, entregamos acolhimento e serviços com profissionalismo, cuidado e paixão',
      color: 'from-emerald-400 to-teal-500'
    }
  ]

  return (
    <section className="px-6 py-12 md:py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-5 md:px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 md:px-4 py-2 rounded-full"
              >
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-purple-600" />
                <span className="text-purple-700 font-medium text-xs md:text-sm">Há mais de 30 anos transformando vidas</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className=" text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Sobre a{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Associação Amigo Down
                </span>
              </motion.h2>
            </div>
                        
            <motion.div
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-justify space-y-4 md:space-y-6 text-sm md:text-lg text-gray-700 leading-relaxed"
            >
              <p>
                A Associação Amigo Down é um espaço de acolhimento e desenvolvimento integral para pessoas com síndrome de Down e suas famílias. Atuamos com amor, dedicação e profissionalismo desde o nascimento até a vida adulta, oferecendo atendimentos clínicos, terapias, inclusão educacional e vivências que promovem autonomia e bem-estar.
              </p>

              <p>
                Acreditamos no potencial único de cada pessoa e trabalhamos para construir uma sociedade mais acessível, justa e inclusiva. Aqui, cada história é valorizada e cada conquista é celebrada.
              </p>

              <p>
                Junte-se a nós nessa jornada de amor, respeito e transformação. Aqui, cada conquista é celebrada e cada vida é valorizada.
              </p>
            </motion.div>

              <motion.div
              animate={{
                y: [-8, 10, -8],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-0 -left-10 w-8 h-8 bg-gradient-to-r from-purple-800 to-pink-600 rounded-full opacity-10"
            />

          


            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/sobre" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden text-sm md:text-base"
                >
                  <span className="relative z-10">Conheça Nossa História</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Círculo de fundo */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl"
            />
            
            {/* Elementos decorativos flutuantes */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-8 w-6 h-6 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full opacity-10"
            />
            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [-5, 15, -5],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-70 -right-12 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20"
            />
            
            
            {/* Grid de valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group bg-white/80 backdrop-blur-sm p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl border border-gray-100/50 text-center transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r ${value.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <value.icon className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}