'use client'

import { useState, useEffect } from 'react'
import { motion as motionFramer, AnimatePresence as AnimatePresenceFramer } from 'framer-motion'
import { 
  Award, 
  ExternalLink, 
  Image as ImageIcon, 
  ZoomIn, 
  Loader2, 
  X, 
  Play, 
  FileText, 
  Heart, 
  Calendar, 
  MapPin, 
  Sparkles,
  ChevronRight,
  Tv
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface GalleryImage {
  id: string
  url: string
  title: string
}

export default function AnniversaryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [isPlayingMainVideo, setIsPlayingMainVideo] = useState(false)

  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoading(true)
        // Busca as fotos do bucket 'Galeria' na pasta '35anos'
        const { data, error } = await supabase.storage
          .from('Galeria')
          .list('35anos', {
            limit: 100,
            sortBy: { column: 'name', order: 'asc' }
          })

        if (error) {
          console.error('Erro ao buscar arquivos do Supabase Storage:', error)
          return
        }

        if (data) {
          const imageExtensions = /\.(jpg|jpeg|png|webp|gif|svg)$/i
          const formattedImages = data
            .filter(file => imageExtensions.test(file.name))
            .map(file => {
              const { data: { publicUrl } } = supabase.storage
                .from('Galeria')
                .getPublicUrl(`35anos/${file.name}`)

              return {
                id: file.id || file.name,
                url: publicUrl,
                title: file.name.replace(/[-_]/g, ' ').split('.')[0]
              }
            })

          setImages(formattedImages)
        }
      } catch (err) {
        console.error('Erro ao carregar fotos:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  const homenageados = [
    "Associação Amigo Down",
    "Vivian dos Santos Beuttemmüller (Presidente)",
    "José Nei Ascari (Conselheiro do TCE/SC)",
    "Marlene Fengler (Ex-Deputada)",
    "Associação Amor pra Down (Balneário Camboriú/Itajaí)",
    "Associação Pais em Movimento",
    "Associação Aldeia 21 (Chapecó)",
    "Associação Sorrir Pra Down",
    "Associação Up Down (Jaraguá do Sul)",
    "Insanos Moto Club",
    "Orlando Schetz (Fundador)",
    "Maria Conceição de Oliveira Schetz (Fundadora)",
    "Maria das Dores Alexandre Tavares (in memoriam)",
    "Marcos Antônio Costa (Diretor da Federação Down)",
    "Paulo Escobar Ferreira",
    "Marilene Alves Borges Leite",
    "Ronaldo Koerich",
    "Rafael Barboza Lopes",
    "Fernando Pereira Silveira",
    "Edeval Raul Tavares",
    "Alini Teresinha dos Santos de Azevedo",
    "Ana Beduschi Nahas",
    "Silvana Bittencourt da Silva Purificação"
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-20">
      
      {/* 1. HERO SECTION COMEMORATIVO */}
      <section className="relative py-16 md:py-28 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white overflow-hidden">
        {/* Elementos Decorativos de Background */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-pink-600 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <motionFramer.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-full mx-auto"
          >
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-200 font-bold text-xs md:text-sm tracking-wider uppercase">
              35 Anos de Amor e Inclusão
            </span>
          </motionFramer.div>

          <motionFramer.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Sessão Especial de{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Homenagem na ALESC
            </span>
          </motionFramer.h1>

          <motionFramer.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light"
          >
            Celebrando mais de três décadas de história, acolhimento e dedicação ao desenvolvimento integral das pessoas com síndrome de Down em Santa Catarina.
          </motionFramer.p>

          <motionFramer.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>06 de Julho de 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Plenário Osni Régis, ALESC</span>
            </div>
          </motionFramer.div>
        </div>
      </section>

      {/* 2. SEÇÃO DE VÍDEOS (PRINCIPAL E TV ALESC) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Assista aos{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Momentos do Evento
            </span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Acompanhe o vídeo-homenagem oficial da instituição e a cobertura jornalística em vídeo da TV ALESC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Vídeo Principal (YouTube) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 shadow-xl aspect-video">
              <div className="w-full h-full rounded-[18px] overflow-hidden bg-black relative">
                <AnimatePresenceFramer mode="wait">
                  {!isPlayingMainVideo ? (
                    <motionFramer.div
                      key="thumbnail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center group"
                      onClick={() => setIsPlayingMainVideo(true)}
                    >
                      <img
                        src="https://img.youtube.com/vi/4qpeWeG8OwY/maxresdefault.jpg"
                        alt="Capa do Vídeo Homenagem"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "https://img.youtube.com/vi/4qpeWeG8OwY/hqdefault.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="relative z-10 flex flex-col items-center space-y-4 text-white">
                        <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                        <span className="font-semibold text-xs tracking-wider uppercase bg-black/40 px-4 py-2 rounded-full border border-white/10">
                          Vídeo Institucional ALESC
                        </span>
                      </div>
                    </motionFramer.div>
                  ) : (
                    <motionFramer.div
                      key="iframe"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full"
                    >
                      <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/4qpeWeG8OwY?autoplay=1&rel=0&modestbranding=1"
                        title="Vídeo Homenagem - Amigo Down 35 anos"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </motionFramer.div>
                  )}
                </AnimatePresenceFramer>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-slate-900">Vídeo-Homenagem Oficial</h3>
              <p className="text-sm text-slate-500">Exibido originalmente durante a solenidade no Plenário, retratando a jornada de 35 anos da associação.</p>
            </div>
          </div>

          {/* Vídeo / Reportagem TV ALESC */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-slate-900 to-purple-950 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between h-full shadow-lg border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-400/20 px-3 py-1.5 rounded-full">
                  <Tv className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-300 font-bold text-xs tracking-wider uppercase">TV ALESC</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">Reportagem da TV ALESC</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Confira a cobertura jornalística completa, com entrevistas exclusivas e trechos marcantes das homenagens prestadas aos fundadores e apoiadores.
                  </p>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <a 
                  href="https://www.alesc.sc.gov.br/tv/noticia/alesc-celebra-os-35-anos-da-associacao-amigo-down/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-purple-950 font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-md hover:bg-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-4 h-4 fill-current text-purple-700" />
                  <span>Assistir na TV ALESC</span>
                  <ExternalLink className="w-4 h-4 text-purple-900" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO DA MATÉRIA ESCRITA COM PADDING VISÍVEL E CITACÕES */}
      <section className="bg-white border-y border-slate-100 py-16 md:py-24">
        {/* O container interno possui px-6 nas laterais, garantindo margens visíveis no mobile */}
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Cabeçalho do Bloco de Notícia */}
          <div className="border-l-4 border-purple-600 pl-4 md:pl-6 space-y-2">
            <span className="text-xs font-bold text-purple-600 tracking-widest uppercase flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Matéria Oficial</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Associação Amigo Down completa 35 anos e recebe homenagem da Alesc
            </h2>
            <div className="text-xs text-slate-400 flex items-center space-x-2">
              <span>Por: Agência ALESC</span>
              <span>•</span>
              <span>Cobertura da Sessão Solene</span>
            </div>
          </div>

          {/* Corpo do Artigo de Notícia */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-base leading-relaxed text-justify">
            <p>
              A Assembleia Legislativa de Santa Catarina realizou uma Sessão Especial para celebrar os <strong>35 anos da Associação Amigo Down</strong>, sediada no município de São José. A cerimônia, realizada no Plenário Deputado Osni Régis, reuniu dezenas de famílias, voluntários, apoiadores e representantes de diversas entidades que lutam pela inclusão e desenvolvimento das pessoas com síndrome de Down em nosso estado.
            </p>

            {/* Citação Especial 1: Presidente Vivian */}
            <div className="my-8 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border-l-4 border-pink-500 relative overflow-hidden">
              <span className="absolute -top-6 -right-6 text-9xl text-pink-200/30 font-serif pointer-events-none select-none">“</span>
              <p className="text-purple-950 italic font-medium text-base md:text-lg leading-relaxed relative z-10 mb-4">
                “Nascemos do acolhimento, do desejo de oferecer suporte às famílias desde o diagnóstico e de provar que a inclusão se constrói no dia a dia, por meio da estimulação precoce, do apoio pedagógico, da autonomia e do afeto.”
              </p>
              <div className="text-xs text-purple-700 font-bold uppercase tracking-wider relative z-10 flex items-center space-x-2">
                <Heart className="w-4.5 h-4.5 text-pink-500 fill-current" />
                <span>Vivian dos Santos Beuttemmüller, Presidente da Associação Amigo Down</span>
              </div>
            </div>

            <p>
              A história da associação começou em 21 de setembro de 1991, fundada por um grupo de pais visionários que se recusaram a aceitar a exclusão e o isolamento que eram comuns na época. Hoje, a instituição oferece atendimentos clínicos e terapêuticos gratuitos, orientação social, capacitações e apoio pedagógico completo.
            </p>

            {/* Citação Especial 2: Marcos Antônio Costa */}
            <div className="my-8 p-6 md:p-8 bg-gradient-to-r from-slate-50 to-purple-50 rounded-3xl border-l-4 border-purple-600 relative overflow-hidden">
              <span className="absolute -top-6 -right-6 text-9xl text-purple-200/30 font-serif pointer-events-none select-none">“</span>
              <p className="text-slate-900 italic font-medium text-base md:text-lg leading-relaxed relative z-10 mb-4">
                “Um grupo de pais não aceitou o isolamento para seus filhos. Onde o mundo via limites, eles enxergaram potencial e oportunidades. A Amigo Down é um porto seguro para muitas famílias, único alento e fonte de informação. Gente de todo o estado encontra esperança e amor aqui.”
              </p>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider relative z-10">
                — Marcos Antônio Costa, Diretor da Fundação Brasileira das Associações da Síndrome de Down
              </div>
            </div>

            <p>
              A solenidade também foi marcada pela entrega de placas comemorativas de homenagem a fundadores, voluntários de longa data, ex-parlamentares e instituições parceiras. O ex-deputado José Nei Ascari, homenageado especial, destacou a importância de persistir no cumprimento das leis voltadas à acessibilidade e direitos das pessoas com deficiência.
            </p>
          </div>

          {/* Box de Ação para Ler Artigo Original */}
          <div className="pt-4">
            <a 
              href="https://www.alesc.sc.gov.br/agencia/noticia/associacao-amigo-down-completa-35-anos-e-recebe-homenagem-da-alesc/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-bold transition-colors group"
            >
              <span>Ler a Matéria Oficial Completa na ALESC</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* LISTA DE HOMENAGEADOS */}
          <div className="pt-8 border-t border-slate-100 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                Personalidades e Entidades Homenageadas
              </h3>
              <p className="text-sm text-slate-400">
                Uma homenagem solene àqueles que dedicam suas vidas e recursos para apoiar nossa caminhada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {homenageados.map((nome, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-3 rounded-xl hover:bg-purple-50/50 hover:border-purple-200/50 transition-colors"
                >
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 font-medium">{nome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. GALERIA DE FOTOS INTEGRADA COM O SUPABASE STORAGE */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mx-auto">
              <ImageIcon className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-semibold text-xs md:text-sm">Álbum Comemorativo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Registros da{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sessão Solene
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">
              Momentos inesquecíveis capturados no Plenário, retratando o afeto, a emoção e o orgulho das famílias.
            </p>
          </div>

          {/* Carregamento */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4 text-gray-500">
              <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
              <span className="text-sm font-semibold">Buscando fotos no Supabase...</span>
            </div>
          ) : images.length === 0 ? (
            /* Fallback se o storage estiver vazio */
            <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 max-w-lg mx-auto p-8 shadow-sm">
              <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhuma foto no Supabase</h3>
              <p className="text-gray-500 text-sm">
                As fotos do evento serão exibidas assim que o upload for concluído no painel do Supabase na pasta <code className="bg-gray-100 px-1.5 py-0.5 rounded text-pink-600">35anos</code> dentro do bucket <code className="bg-gray-100 px-1.5 py-0.5 rounded text-pink-600">Galeria</code>.
              </p>
            </div>
          ) : (
            /* Grid de Fotos */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motionFramer.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveImage(image.url)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 border border-white/40"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full text-purple-600 shadow-lg backdrop-blur-sm">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </motionFramer.div>
              ))}
            </div>
          )}

          {/* Links Externos dos Álbuns Completos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <a
              href="https://www.alesc.sc.gov.br/fotos/album/sessao-especial-em-comemoracao-aos-35-anos-da-associacao-amigo-down/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group text-sm"
            >
              <span>Ver Álbum Oficial da ALESC</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            
            <a
              href="https://photos.app.goo.gl/uy1vVmhQaTTxGgaw6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 border border-purple-200 font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 group text-sm"
            >
              <span>Ver Álbum Completo no Google Fotos</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

        </div>
      </section>

      {/* LIGHTBOX DE IMAGENS */}
      <AnimatePresenceFramer>
        {activeImage && (
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <motionFramer.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Foto Ampliada"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motionFramer.div>
          </motionFramer.div>
        )}
      </AnimatePresenceFramer>

    </div>
  )
}
