'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Declaração de tipos para Leaflet
declare global {
  interface Window {
    L: any;
  }
}

// Tipo para a instância do mapa
interface MapInstance {
  remove: () => void;
  setView: (coords: [number, number], zoom: number) => void;
  whenReady: (callback: () => void) => void;
}

export default function Contatos() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)
  const mapInstanceRef = useRef<MapInstance | null>(null)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(48) 99170-4881',
      description: 'Ligue para nós durante o horário comercial'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'amigodownsc1991@gmail.com',
      description: 'Envie sua mensagem que responderemos em breve'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua Nove de Julho, 900 - Ipiranga',
      description: 'São José - Santa Catarina, CEP: 88111-380'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 8h às 18h',
      description: 'Sábados e Domingos: Fechado'
    }
  ]

  const departments = [
    {
      icon: Users,
      title: 'Atendimento Geral',
      description: 'Informações sobre nossos serviços e programas',
      contact: '(48) 3242-1234 - Ramal 100'
    },
    {
      icon: Heart,
      title: 'Apoio às Famílias',
      description: 'Suporte psicológico e orientação familiar',
      contact: '(48) 3242-1234 - Ramal 200'
    },
    {
      icon: MessageCircle,
      title: 'Voluntariado',
      description: 'Informações sobre como se tornar voluntário',
      contact: 'voluntario@amigodown.org.br'
    }
  ]

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.L) {
        try {
          // Limpar mapa anterior se existir
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove()
          }

          // Coordenadas para São José - SC (Rua Nove de Julho, 900)
          const coordinates: [number, number] = [-27.5969, -48.6394] // [lat, lng] para Leaflet

          // Criar o mapa
          const map = window.L.map(mapRef.current, {
            center: coordinates,
            zoom: 15,
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
          })

          // Adicionar camada do OpenStreetMap
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
          }).addTo(map)

          // Criar ícone personalizado
          const customIcon = window.L.divIcon({
            html: `
              <div style="
                background: linear-gradient(45deg, #3B82F6, #8B5CF6);
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                position: relative;
              ">
                <div style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%) rotate(45deg);
                  color: white;
                  font-size: 14px;
                  font-weight: bold;
                ">📍</div>
              </div>
            `,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
          })

          // Criar popup personalizado
          const popupContent = `
            <div style="padding: 15px; max-width: 300px; font-family: system-ui, -apple-system, sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #1E40AF; font-size: 18px; font-weight: bold;">
                🏢 Amigo Down SC
              </h3>
              <div style="margin: 8px 0; font-size: 14px; color: #374151;">
                <strong>📍 Endereço:</strong><br>
                Rua Nove de Julho, 900 - Ipiranga<br>
                São José - Santa Catarina<br>
                CEP: 88111-380
              </div>
              <div style="margin: 8px 0; font-size: 14px; color: #374151;">
                <strong>📞 Telefone:</strong> (48) 99170-4881
              </div>
              <div style="margin: 8px 0; font-size: 14px; color: #374151;">
                <strong>🕐 Horário:</strong> Segunda a Sexta: 8h às 18h
              </div>
              <div style="margin: 12px 0 0 0;">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Nove+de+Julho,+900+-+Ipiranga,+São+José+-+Santa+Catarina,+CEP:+88111-380" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style="display: inline-block; background: #3B82F6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 12px; font-weight: 500; margin-top: 8px;"
                >
                  🗺️ Abrir no Google Maps
                </a>
              </div>
            </div>
          `

          // Adicionar marcador
          const marker = window.L.marker(coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent)
            .openPopup()

          // Geocodificação usando Nominatim (OpenStreetMap)
          const geocodeAddress = async () => {
            try {
              const address = encodeURIComponent('Rua Nove de Julho, 900, Ipiranga, São José, Santa Catarina, Brazil')
              const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${address}&limit=1&countrycodes=br`
              )
              const data = await response.json()
              
              if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat)
                const lng = parseFloat(data[0].lon)
                const precisCoordinates: [number, number] = [lat, lng]
                
                // Atualizar posição do mapa e marcador
                map.setView(precisCoordinates, 16)
                marker.setLatLng(precisCoordinates)
                
                console.log('Coordenadas geocodificadas:', precisCoordinates)
              }
            } catch (error) {
              console.log('Geocoding falhou, usando coordenadas padrão:', error)
            }
          }

          // Salvar referência do mapa
          mapInstanceRef.current = map as MapInstance

          // Aguardar carregamento do mapa
          map.whenReady(() => {
            setMapLoaded(true)
            geocodeAddress()
          })

          // Geocodificar endereço após 1 segundo
          setTimeout(geocodeAddress, 1000)

        } catch (error) {
          console.error('Erro ao inicializar o mapa:', error)
          setMapError(true)
        }
      }
    }

    // Carregar Leaflet se ainda não estiver carregado
    if (!window.L) {
      // Carregar CSS do Leaflet
      const link = document.createElement('link')
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      link.rel = 'stylesheet'
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)

      // Carregar JavaScript do Leaflet
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
      script.crossOrigin = 'anonymous'
      script.async = true
      script.defer = true
      
      script.onload = () => {
        console.log('Leaflet carregado com sucesso')
        initMap()
      }
      
      script.onerror = () => {
        console.error('Erro ao carregar Leaflet')
        setMapError(true)
      }
      
      document.head.appendChild(script)
    } else {
      initMap()
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  const openGoogleMaps = () => {
    const address = encodeURIComponent("Rua Nove de Julho, 900 - Ipiranga, São José - Santa Catarina, CEP: 88111-380")
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  const openAppleMaps = () => {
    const address = encodeURIComponent("Rua Nove de Julho, 900 - Ipiranga, São José - Santa Catarina, CEP: 88111-380")
    window.open(`https://maps.apple.com/?q=${address}`, '_blank')
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Entre em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Contato Conosco
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você e sua família. Nossa equipe está pronta
              para esclarecer dúvidas, oferecer suporte e acolher quem precisa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Informações de Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre todas as formas de entrar em contato conosco
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg font-medium text-primary-600 mb-2">
                  {contact.info}
                </p>
                <p className="text-gray-600 text-sm">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-600">
              Venha nos visitar! Estamos localizados em São José
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Como Chegar
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Endereço:</p>
                      <p className="text-gray-600">Rua Nove de Julho, 900 - Ipiranga</p>
                      <p className="text-gray-600">São José - Santa Catarina</p>
                      <p className="text-gray-600">CEP: 88111-380</p> 
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Horário:</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábados e Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openGoogleMaps}
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <img src="contatos/google-icon.svg" alt="Google" className="h-4 w-4" />
                    Google Maps
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openAppleMaps}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <img src="contatos/apple-icon.svg" alt="Apple" className="h-4 w-4" />
                    Apple Maps
                  </motion.button>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-80 overflow-hidden relative">
                <div 
                  ref={mapRef} 
                  className="w-full h-full"
                  style={{ minHeight: '320px' }}
                />
                {/* Fallback quando o mapa não carrega */}
                {(mapError || !mapLoaded) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Localização
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Rua Nove de Julho, 900 - Ipiranga<br />
                        São José - Santa Catarina<br />
                        CEP: 88111-380
                      </p>
                      <div className="flex flex-col gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={openGoogleMaps}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                          Ver no Google Maps
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={openAppleMaps}
                          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                          Ver no Apple Maps
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}