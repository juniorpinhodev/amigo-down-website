'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Image as ImageIcon, ZoomIn, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface GalleryImage {
  id: string
  url: string
  title: string
}

export default function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoading(true)
        
        // Lista os arquivos dentro do bucket 'Galeria' na pasta '35anos'
        const { data, error } = await supabase.storage
          .from('Galeria')
          .list('35anos', {
            limit: 100, // Limite máximo de imagens a exibir
            sortBy: { column: 'name', order: 'asc' }
          })

        if (error) {
          console.error('Erro ao buscar arquivos do Supabase Storage:', error)
          return
        }

        if (data) {
          // Filtra apenas arquivos com extensões de imagem válidas
          const imageExtensions = /\.(jpg|jpeg|png|webp|gif|svg)$/i
          
          const formattedImages = data
            .filter(file => imageExtensions.test(file.name))
            .map(file => {
              // Obtém a URL pública direta da imagem
              const { data: { publicUrl } } = supabase.storage
                .from('Galeria')
                .getPublicUrl(`35anos/${file.name}`)

              return {
                id: file.id || file.name,
                url: publicUrl,
                title: file.name.replace(/[-_]/g, ' ').split('.')[0] // Limpa o nome do arquivo para usar como título
              }
            })

          setImages(formattedImages)
        }
      } catch (err) {
        console.error('Erro inesperado:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/10 relative overflow-hidden">
      {/* Background Decoratives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mx-auto"
          >
            <ImageIcon className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-medium text-xs md:text-sm">Nossas Memórias</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Sessão Especial{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              35 Anos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg text-gray-600 leading-relaxed"
          >
            Confira os momentos mais marcantes da nossa Sessão Solene, celebrando mais de três décadas de dedicação e amor à inclusão.
          </motion.p>
        </div>

        {/* Estado de Carregamento (Loading) */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 text-gray-500">
            <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
            <span className="text-sm font-medium">Buscando fotos no Supabase...</span>
          </div>
        ) : images.length === 0 ? (
          /* Caso não existam fotos na pasta */
          <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 max-w-lg mx-auto p-8 shadow-sm">
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhuma foto encontrada</h3>
            <p className="text-gray-500 text-sm">
              Certifique-se de que fez o upload das fotos na pasta <code className="bg-gray-100 px-1.5 py-0.5 rounded text-pink-600">35anos</code> dentro do bucket <code className="bg-gray-100 px-1.5 py-0.5 rounded text-pink-600">Galeria</code> no seu Supabase.
            </p>
          </div>
        ) : (
          /* Grid de Fotos Carregadas Dinamicamente */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => setActiveImage(image.url)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 border border-white/40"
              >
                {/* Imagem */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay no Hover com Efeito de Lupa */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/90 p-3 rounded-full text-purple-600 shadow-lg backdrop-blur-sm"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Botão de Link Externo para o Álbum Completo no Google Fotos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://photos.app.goo.gl/uy1vVmhQaTTxGgaw6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
          >
            <span>Ver Álbum Completo no Google Fotos</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox / Modal de Visualização (Framer Motion) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveImage(null)}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagem Ampliada */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage}
                alt="Foto Ampliada"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
