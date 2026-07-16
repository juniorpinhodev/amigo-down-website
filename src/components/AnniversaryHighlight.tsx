'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Award, ArrowRight, Video, Image as ImageIcon, FileText } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface CarouselImage {
  url: string
}

export default function AnniversaryHighlight() {
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  const newsSlides = [
    {
      title: "Associação Amigo Down completa 35 anos e recebe homenagem da Alesc",
      description: "Confira os discursos emocionantes e a cobertura jornalística completa da solenidade no Plenário Osni Régis.",
      href: "/35-anos#materia",
      source: "Agência ALESC"
    },
    {
      title: "Álbum de Fotos: Sessão Especial de Homenagem aos 35 anos",
      description: "Veja os registros fotográficos oficiais da Sessão Solene e os momentos mais marcantes das homenagens.",
      href: "/35-anos#galeria",
      source: "Galeria ALESC"
    },
    {
      title: "TV ALESC: Alesc celebra os 35 anos da Associação Amigo Down",
      description: "Assista à reportagem em vídeo e entrevistas com fundadores e colaboradores sobre o trabalho da associação.",
      href: "/35-anos#video",
      source: "TV ALESC"
    }
  ]

  // Carrega as fotos do Supabase para o carrossel de fotos
  useEffect(() => {
    async function loadCarouselImages() {
      try {
        const { data, error } = await supabase.storage
          .from('Galeria')
          .list('35anos', {
            limit: 6,
            sortBy: { column: 'name', order: 'desc' }
          })

        if (error) {
          console.error('Erro ao carregar fotos do carrossel:', error)
          return
        }

        if (data && data.length > 0) {
          const imageExtensions = /\.(jpg|jpeg|png|webp|gif|svg)$/i
          const urls = data
            .filter(file => imageExtensions.test(file.name))
            .map(file => {
              const { data: { publicUrl } } = supabase.storage
                .from('Galeria')
                .getPublicUrl(`35anos/${file.name}`)
              return { url: publicUrl }
            })

          setCarouselImages(urls)
        }
      } catch (err) {
        console.error('Erro inesperado no carrossel:', err)
      }
    }

    loadCarouselImages()
  }, [])

  // Transição do carrossel de fotos
  useEffect(() => {
    if (carouselImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages])

  // Transição do carrossel de notícias
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsSlides.length)
    }, 5000) // Troca a matéria a cada 5 segundos

    return () => clearInterval(interval)
  }, [newsSlides.length])

  return (
    <section className="px-6 py-12 md:py-20 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/10 relative overflow-hidden">
      
      {/* Luzes decorativas de background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-200 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Container Principal Glassmorphism Claro */}
        <div className="bg-white/60 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/80 shadow-[0_20px_50px_rgba(147,51,234,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo: Conteúdo Escrito */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full"
              >
                <Award className="w-4 h-4 text-purple-600 animate-bounce" />
                <span className="text-purple-800 font-bold text-xs md:text-sm tracking-wider uppercase">
                  Comemoração Especial
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
              >
                A Amigo Down celebra{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                  35 Anos
                </span>{' '}
                de amor e inclusão
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-slate-600 leading-relaxed font-light"
              >
                Três décadas e meia de apoio às famílias e desenvolvimento de potencialidades. Confira a homenagem especial da ALESC, as matérias, as fotos e os vídeos deste marco histórico e emocionante.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <Link href="/35-anos" className="group inline-block">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 flex items-center space-x-2 transition-all duration-300"
                  >
                    <span>Acessar Homenagem Completa</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Lado Direito: Cards Interativos Dinâmicos */}
            <div className="lg:col-span-6 mt-8 lg:mt-0 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* CARD 1: CARROSSEL DE FOTOS SOLENES */}
                <Link href="/35-anos#galeria" className="block group">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-40 rounded-2xl overflow-hidden relative border border-purple-100 shadow-md flex flex-col justify-end p-5 bg-slate-900 group"
                  >
                    {/* Carrossel de Imagens em Transição Suave */}
                    <div className="absolute inset-0">
                      {carouselImages.length > 0 ? (
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={carouselImages[currentImageIndex].url}
                            src={carouselImages[currentImageIndex].url}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 0.45, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full object-cover"
                            alt="Fotos Solenes"
                          />
                        </AnimatePresence>
                      ) : (
                        /* Imagem de Fallback se não carregar as fotos */
                        <div 
                          className="w-full h-full bg-cover bg-center opacity-30" 
                          style={{ backgroundImage: "url('/hero/hero.png')" }}
                        />
                      )}
                    </div>

                    {/* Gradiente Escuro de Sobreposição para Leitura */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

                    {/* Conteúdo do Card */}
                    <div className="relative z-20 text-white space-y-1">
                      <div className="w-8 h-8 bg-pink-500/20 border border-pink-400/30 rounded-lg flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-4 h-4 text-pink-400" />
                      </div>
                      <h3 className="font-bold text-base leading-tight">Fotos Solenes</h3>
                      <p className="text-[11px] text-slate-300 font-light leading-snug">
                        Galeria de fotos do evento na ALESC.
                      </p>
                    </div>
                  </motion.div>
                </Link>

                {/* CARD 2: VÍDEO SILENCIOSO DA TV ALESC / INSTITUCIONAL */}
                <Link href="/35-anos#video" className="block group">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-40 rounded-2xl overflow-hidden relative border border-purple-100 shadow-md flex flex-col justify-end p-5 bg-black group"
                  >
                    {/* Vídeo do YouTube Silencioso de Fundo em Loop */}
                    <div className="absolute inset-0 pointer-events-none opacity-50 scale-125">
                      <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/4qpeWeG8OwY?autoplay=1&mute=1&controls=0&loop=1&playlist=4qpeWeG8OwY&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&autohide=1"
                        title="Vídeo comemorativo de fundo"
                        allow="autoplay; encrypted-media"
                      />
                    </div>

                    {/* Gradiente Escuro de Sobreposição */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10" />

                    {/* Conteúdo do Card */}
                    <div className="relative z-20 text-white space-y-1">
                      <div className="w-8 h-8 bg-purple-500/20 border border-purple-400/30 rounded-lg flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                        <Video className="w-4 h-4 text-purple-400" />
                      </div>
                      <h3 className="font-bold text-base leading-tight">Vídeos & TV</h3>
                      <p className="text-[11px] text-slate-300 font-light leading-snug">
                        Vídeo-homenagem e reportagem.
                      </p>
                    </div>
                  </motion.div>
                </Link>

              </div>

              {/* CARD 3: CARROSSEL DE MATÉRIAS E REPORTAGENS (LARGURA TOTAL) */}
              <Link href={newsSlides[currentNewsIndex].href} className="block group">
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-purple-100/50 shadow-sm hover:shadow-md hover:border-purple-300/50 transition-all duration-300 group relative min-h-[110px] overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentNewsIndex}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="space-y-1 pr-12">
                        <div className="flex items-center space-x-2">
                          <span className="text-[9px] bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            {newsSlides[currentNewsIndex].source}
                          </span>
                          <span className="text-[9px] text-slate-400 font-light">
                            Notícias ALESC
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight group-hover:text-purple-700 transition-colors line-clamp-1">
                          {newsSlides[currentNewsIndex].title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed line-clamp-2">
                          {newsSlides[currentNewsIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Indicadores Visuais de Slide (Mini Dots) */}
                  <div className="absolute right-5 top-5 flex space-x-1.5 z-20">
                    {newsSlides.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === currentNewsIndex ? 'bg-amber-500 w-3' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
