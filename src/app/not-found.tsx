'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Heart, AlertTriangle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Error404() {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/')
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <section className="px-6 py-12 md:py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden min-h-screen flex items-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Ilustração 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative">
              {/* Círculo de fundo */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl"
              />
              
              {/* Número 404 */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none"
                >
                  404
                </motion.div>
                
                {/* Ícone de alerta */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
                  className="flex justify-center mt-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Elementos decorativos flutuantes */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [-5, 15, -5],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 -right-12 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* Conteúdo de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 md:px-4 py-2 rounded-full"
            >
              <Heart className="w-4 md:w-5 h-4 md:h-5 text-purple-600" />
              <span className="text-purple-700 font-medium text-xs md:text-sm">Ops! Algo deu errado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Página não{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                encontrada
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4"
            >
              <p>
                Parece que você se perdeu no caminho! A página que você está procurando não existe ou foi movida para outro local.
              </p>
              <p>
                Mas não se preocupe, estamos aqui para ajudá-lo a encontrar o que precisa. Que tal voltar ao início e explorar nosso site?
              </p>
            </motion.div>

            {/* Botões de ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoHome}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden text-sm md:text-base flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Voltar ao Início</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoBack}
                className="group bg-white text-purple-600 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 text-sm md:text-base flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Página Anterior</span>
              </motion.button>
            </motion.div>

            {/* Sugestões de navegação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2 text-purple-600" />
                Talvez você esteja procurando por:
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                  <motion.a
                  href="/"
                  whileHover={{ scale: 1.02 }}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  • Home
                </motion.a>
                <motion.a
                  href="/sobre"
                  whileHover={{ scale: 1.02 }}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  • Sobre a Associação
                </motion.a>
                <motion.a
                  href="/doe"
                  whileHover={{ scale: 1.02 }}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  • Como Doar
                </motion.a>
                <motion.a
                  href="/contatos"
                  whileHover={{ scale: 1.02 }}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  • Fale Conosco
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}