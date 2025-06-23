'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Calendar, Target, Lightbulb } from 'lucide-react'

export default function Sobre() {
  const timeline = [
    {
      year: '1991',
      title: 'Fundação',
      description: 'Criação da Associação por um grupo de pais dedicados'
    },
    {
      year: '2012',
      title: 'Primeiro Centro',
      description: 'Inauguração do primeiro centro de atendimento especializado'
    },
    {
      year: '2015',
      title: 'Expansão',
      description: 'Abertura de novas unidades e programas educacionais'
    },
    {
      year: '2018',
      title: 'Reconhecimento',
      description: 'Prêmio de Excelência em Inclusão Social'
    },
    {
      year: '2021',
      title: 'Transformação Digital',
      description: 'Implementação de programas online durante a pandemia'
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Mais de 500 crianças atendidas e 50 projetos realizados'
    }
  ]

  // const values = [
  //   {
  //     icon: Heart,
  //     title: 'Amor e Respeito',
  //     description: 'Cada criança é única e merece ser amada e respeitada em sua individualidade, celebrando suas diferenças como parte da riqueza humana.'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Inclusão Social',
  //     description: 'Trabalhamos incansavelmente por uma sociedade que abraça e valoriza a diversidade, promovendo a participação plena de todos.'
  //   },
  //   {
  //     icon: Target,
  //     title: 'Desenvolvimento Integral',
  //     description: 'Criamos oportunidades e caminhos para que cada criança desenvolva seu máximo potencial em todas as áreas da vida.'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Excelência no Atendimento',
  //     description: 'Buscamos sempre a melhor qualidade no atendimento e nos serviços oferecidos, com profissionais especializados e dedicados.'
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: 'Inovação',
  //     description: 'Utilizamos métodos inovadores e tecnologias assistivas para potencializar o desenvolvimento e a aprendizagem.'
  //   },
  //   {
  //     icon: Calendar,
  //     title: 'Compromisso Duradouro',
  //     description: 'Mantemos um compromisso de longo prazo com as famílias, oferecendo suporte contínuo em todas as fases da vida.'
  //   }
  // ]

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
              Nossa História de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Amor e Inclusão
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Há mais de 30 anos, a Associação Amigo Down dedica-se ao apoio integral
              de crianças com síndrome de Down e suas famílias, construindo um futuro
              mais inclusivo e acolhedor para todos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
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
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover a inclusão social, educacional e profissional de crianças
                com síndrome de Down, oferecendo suporte especializado e criando
                oportunidades para o desenvolvimento pleno de suas potencialidades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência nacional em inclusão e desenvolvimento de pessoas
                com síndrome de Down, contribuindo para uma sociedade mais justa,
                diversa e acolhedora para todos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Amor, respeito, inclusão, excelência, inovação e compromisso
                duradouro com cada criança e família que atendemos, celebrando
                a diversidade como riqueza humana.
              </p>
            </motion.div>
          </div>

          {/* Valores Detalhados */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os marcos mais importantes da nossa jornada em prol da inclusão
              e desenvolvimento de crianças com síndrome de Down.
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-secondary-200 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card p-6"
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Círculo central */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}