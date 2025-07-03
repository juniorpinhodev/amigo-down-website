'use client'

import { motion } from 'framer-motion'
import { Heart, CreditCard, MapPin, Phone, Mail, Building, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'


export default function Doe() {
  const [copiedItem, setCopiedItem] = useState(null)

  const copyToClipboard = (text, itemId) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(itemId)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const donationMethods = [
    // {
    //   icon: CreditCard,
    //   title: 'PIX',
    //   description: 'Forma mais rápida e fácil de doar',
    //   details: 'amigo.down@gmail.com',
    //   color: 'from-green-400 to-emerald-500',
    //   copyId: 'pix'
    // },
    {
      icon: Building,
      title: 'Depósito Bancário',
      description: 'Banco do Brasil - Conta Corrente',
      details: {
        agencia: '5455-0',
        conta: '490.520-2',
        agenciaCopy: '54550',
        contaCopy: '4905202'
      },
      color: 'from-blue-400 to-indigo-500',
      copyId: 'banco',
      hasLogo: true,
      logoSrc: '/doe/banco-do-brasil-85782.svg'
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua Nove de Julho, 900 - Ipiranga\nSão José - Santa Catarina, CEP: 88111-380',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(48) 99170-4881',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'amigodownsc1991@gmail.com',
      color: 'from-indigo-400 to-blue-500'
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
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 md:px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-4 md:w-5 h-4 md:h-5 text-purple-600" />
            <span className="text-purple-700 font-medium text-xs md:text-sm">Faça a diferença</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Doe com{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Sua doação transforma vidas e constrói um futuro mais inclusivo para pessoas com síndrome de Down. 
            Cada contribuição, por menor que seja, faz uma diferença real em nossa missão.
          </motion.p>
        </div>

        {/* Donation Methods */}
        <div className="flex justify-center items-center gap-8 md:gap-8 mb-16 md:mb-20">
          {donationMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl border border-gray-100/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`mx-auto w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r ${method.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <method.icon className="h-8 md:h-10 w-8 md:w-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {method.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                {method.hasLogo && (
                  <img 
                    src={method.logoSrc} 
                    alt="Logo Banco do Brasil" 
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                )}
                <p className="text-gray-600 text-sm md:text-base">
                  {method.description}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/50 relative">
                {method.copyId === 'pix' ? (
                  <>
                    <p className="font-mono text-sm md:text-base text-gray-800 mb-3">
                      {method.details}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(method.details, method.copyId)}
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                    >
                      {copiedItem === method.copyId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar</span>
                        </>
                      )}
                    </motion.button>
                  </>
                ) : (
                  
                   <>
                    <div className="space-y-2 mb-4">
                        <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:space-x-4">
                        <span className="text-sm text-gray-600 w-20">Agência:</span>
                        <div className="flex items-center space-x-3">
                            <span className="font-mono items-end text-sm md:text-base text-gray-800">
                            {method.details.agencia}
                            </span>
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(method.details.agenciaCopy, 'agencia')}
                            className="flex items-start space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-md hover:shadow-md transition-all duration-300 text-xs"
                            >
                            {copiedItem === 'agencia' ? (
                                <>
                                <Check className="w-3 h-3" />
                                <span>Copiado!</span>
                                </>
                            ) : (
                                <>
                                <Copy className="w-3 h-3" />
                                <span>Copiar</span>
                                </>
                            )}
                            </motion.button>
                        </div>
                        </div>

                            <div className="flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4">
                            <span className="text-sm text-gray-600 w-20">Conta:</span>
                            <div className="flex items-center space-x-3">
                                <span className="font-mono text-sm md:text-base text-gray-800">
                                {method.details.conta}
                                </span>
                                <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => copyToClipboard(method.details.contaCopy, 'conta')}
                                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-md hover:shadow-md transition-all duration-300 text-xs"
                            >
                            {copiedItem === 'conta' ? (
                                <>
                                <Check className="w-3 h-3" />
                                <span>Copiado!</span>
                                </>
                            ) : (
                                <>
                                <Copy className="w-3 h-3" />
                                <span>Copiar</span>
                                </>
                            )}
                            </motion.button>
                        </div>
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                        Clique nos ícones para copiar individualmente
                    </div>
                </>
     
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informações de contatos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl border border-gray-100/50 text-center transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-14 md:w-16 h-14 md:h-16 bg-gradient-to-r ${contact.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <contact.icon className="h-7 md:h-8 w-7 md:w-8 text-white" />
              </motion.div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-700 transition-colors duration-300">
                {contact.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {contact.info}
              </p>
            </motion.div>
          ))}
        </div>

        {/* chamada para ação*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Heart className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Juntos Somos Mais Fortes
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Cada doação é um investimento no futuro, na inclusão e na dignidade. 
              Sua generosidade constrói pontes para um mundo mais justo e acessível.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link href="/sobre" passHref>
                <button className="bg-white text-purple-600 font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full hover:shadow-xl transition-all duration-300 text-sm md:text-base">
                    Saiba Mais Sobre Nosso Trabalho
                </button>
            </Link>

          </motion.div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-600"
        >
          <p>
            Associação Amigo Down é uma organização sem fins lucrativos. 
            Suas doações são dedutíveis do Imposto de Renda conforme legislação vigente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}