'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-pink-50/10 via-purple-50/30 to-slate-50 relative overflow-hidden">
      {/* Elementos Decorativos Flutuantes no Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 text-center">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mx-auto"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-medium text-xs md:text-sm">Assista ao Nosso Vídeo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Conheça o{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Nosso Trabalho
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg text-gray-600 leading-relaxed"
          >
            Veja de perto como o carinho, o apoio especializado e as vivências práticas transformam a rotina de crianças, jovens e de suas famílias no dia a dia da associação.
          </motion.p>
        </div>

        {/* Container externo com efeito de vidro (Glassmorphism Frame) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-[32px] p-3 md:p-4 bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(147,51,234,0.06)]"
        >
          {/* Player de Vídeo com Borda Gradiente Vibrante e Brilho Neon */}
          <div className="relative rounded-2xl overflow-hidden p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 shadow-[0_15px_35px_rgba(168,85,247,0.15)] group">
            
            {/* Brilho neon de fundo que reage ao hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-400 opacity-25 blur-xl group-hover:opacity-50 transition-opacity duration-500 -z-10" />

            {/* Container Responsivo de Aspecto */}
            <div className="aspect-video w-full rounded-[13px] overflow-hidden bg-black relative">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center group/btn"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Imagem de Capa do YouTube */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://img.youtube.com/vi/4qpeWeG8OwY/maxresdefault.jpg"
                      alt="Capa do Vídeo Institucional"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://img.youtube.com/vi/4qpeWeG8OwY/hqdefault.jpg";
                      }}
                    />
                    
                    {/* Overlay Escurecido */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Botão de Play e Tag */}
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                      {/* Efeito de pulso atrás do Play */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-28 h-28 bg-white/20 rounded-full"
                      />
                      
                      {/* Botão de Play */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:bg-gradient-to-r group-hover/btn:from-purple-600 group-hover/btn:to-pink-600 group-hover/btn:text-white"
                      >
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </motion.div>

                      {/* Tag Indicadora */}
                      <span className="text-white font-semibold text-xs md:text-sm tracking-wider uppercase drop-shadow-md bg-black/40 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-colors duration-300 group-hover/btn:border-purple-300/30">
                        Assista ao vídeo
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="iframe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full animate-fade-in"
                  >
                    <iframe
                      className="w-full h-full border-0"
                      src="https://www.youtube.com/embed/4qpeWeG8OwY?autoplay=1&rel=0&modestbranding=1"
                      title="Vídeo Institucional - Associação Amigo Down"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
