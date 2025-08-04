'use client'

import { motion } from 'framer-motion'
// import { Heart, Users, Award, Calendar, Target, Lightbulb } from 'lucide-react'

export default function Sobre() {
  // const timeline = [
  //   {
  //     year: '1991',
  //     title: 'Fundação',
  //     description: 'Criação da Associação'
  //   },
  //   {
  //     year: '2000',
  //     title: 'Breve',
  //     description: 'Breve'
  //   },
  //   {
  //     year: '2010',
  //     title: 'Breve',
  //     description: 'Breve'
  //   },
  //   {
  //     year: '2020',
  //     title: 'Breve',
  //     description: 'Breve'
  //   },
  //   {
  //     year: '2024',
  //     title: 'Breve',
  //     description: 'Breve'
  //   },
  //   {
  //     year: '2025',
  //     title: 'Breve',
  //     description: 'Breve'
  //   }
  // ]

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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-7">
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
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          > */}
            {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2> */}
          {/* </motion.div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            > */}
              {/* <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover a inclusão social, educacional e profissional de crianças
                com síndrome de Down, oferecendo suporte especializado e criando
                oportunidades para o desenvolvimento pleno de suas potencialidades.
              </p> */}
            {/* </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            > */}
              {/* <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div> */}
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3> */}
              {/* <p className="text-gray-600 leading-relaxed">
                Ser referência nacional em inclusão e desenvolvimento de pessoas
                com síndrome de Down, contribuindo para uma sociedade mais justa,
                diversa e acolhedora para todos.
              </p> */}
            {/* </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            > */}
              {/* <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div> */}
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Amor, respeito, inclusão, excelência, inovação e compromisso
                duradouro com cada criança e família que atendemos, celebrando
                a diversidade como riqueza humana.
              </p> */}
            {/* </motion.div> */}
          </div>


                    {/* TEXTO - SOBRE */}
          <section className="section-padding ">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* <h1 className="text-4xl w-full sm:text-5xl font-bold text-gray-900 mb-8">
                  Associação{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Amigo Down
                  </span>
                </h1> */}

                <div className="text-[1.3 rem] text-gray-700 max-w-4xl mx-auto space-y-6 text-justify">
                  <p>
                    <strong>Fundada em 21 de setembro de 1991</strong>, a Associação Amigo Down é uma entidade beneficente e sem fins lucrativos que nasceu com uma missão revolucionária: trabalhar pelo desenvolvimento pleno e pela integração social de pessoas com síndrome de Down, promovendo o respeito à sua cidadania e dignidade. Reconhecida como utilidade pública nos níveis municipal, estadual e federal, construímos ao longo de mais de três décadas uma trajetória sólida de dedicação e transformação social.
                  </p>

                  <p>
                    Nossa história começou com 22 associados fundadores e uma visão inovadora para a época: enxergar além dos estereótipos e reconhecer o potencial único de cada pessoa com síndrome de Down. Hoje, somos referência estadual no atendimento especializado, atendendo adolescentes, jovens e adultos com síndrome de Down e suas famílias de toda Sa nta Catarina.
                  </p>

                  <p>
                    Contamos com uma equipe multiprofissional altamente qualificada que inclui pediatra cardiologista, geneticista, endocrinologista, odontóloga, fonoaudiólogas, advogada, assistente social, psicopedagoga e professores especializados. Nossa estrutura física dispõe de consultório geral, consultório multidisciplinar e consultório odontológico, proporcionando atendimento integral e humanizado.
                  </p>

                  <p>
                    Desenvolvemos um amplo programa de atividades educativas, culturais e terapêuticas que incluem aulas de dança, zumba, percussão, natação em parceria com a APABB, culinária e jogos pedagógicos. Destaque especial para nosso projeto da <strong>minicasa</strong>, um ambiente que simula um lar completo onde trabalhamos o desenvolvimento da autonomia doméstica dos associados.
                  </p>

                  <p>
                    O <strong>Mutirão da Saúde</strong>, realizado mensalmente na última quarta-feira do mês, é um dos nossos principais programas, oferecendo atendimento especializado para pacientes encaminhados por Secretarias Municipais de Saúde de todo o Estado. Este evento proporciona atenção integral à saúde, além de acolhimento, orientação e assistência jurídica às famílias. Complementarmente, mantemos parceria para consultas especializadas em genética no Hospital Infantil Joana de Gusmão, em Florianópolis.
                  </p>

                  <p>
                    <strong>Todas as nossas atividades são gratuitas</strong> e desenvolvidas por uma equipe totalmente voluntária. Nossa atuação complementa o Sistema Único de Saúde, oferecendo atendimentos especializados de média complexidade. Atendemos São José, Florianópolis, Palhoça, Santo Amaro da Imperatriz, Biguaçu e recebemos famílias de todo o Estado de Santa Catarina.
                  </p>

                  <p>
                    Participamos ativamente da construção de políticas públicas através de nossa representação no Conselho Municipal e Estadual da Pessoa com Deficiência. Integramos também a Federação Catarinense das Associações com Síndrome de Down (Fecasd) e somos federados à Federação Brasileira (Febasd), fortalecendo o movimento nacional pelos direitos das pessoas com deficiência.
                  </p>

                  <p>
                    Nosso compromisso vai além do atendimento: combatemos ativamente os preconceitos e estereótipos através de ações educativas e de conscientização. Acreditamos firmemente que cada pessoa com síndrome de Down possui personalidade própria e potencial único, e que, quando adequadamente estimulada, pode alcançar plena autonomia e participação social.
                  </p>

                  <p>
                    Defendemos uma sociedade inclusiva onde pessoas com síndrome de Down sejam reconhecidas por suas capacidades, não por suas limitações. Nossa missão é estimular, educar e apoiar desde cedo para que se tornem cidadãos independentes e participativos, longe de rótulos que restringem suas possibilidades de desenvolvimento e realização pessoal.
                  </p>

                  <p className="text-center text-2xl font-semibold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-[length:200%_200%] animate-text-gradient-x">
                    💙 Porque aqui, Down não é uma limitação.  
                    <br />É só mais uma característica de quem tem muito a ensinar.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>


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
      {/* <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50"> */}
        {/* <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          > */}
            {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossa Trajetória
            </h2> */}
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os marcos mais importantes da nossa jornada em prol da inclusão
              e desenvolvimento de crianças com síndrome de Down.
            </p> */}
          {/* </motion.div> */}


{/*  Estrutura da timeline - linha do tempo:

          <div className="relative"> */}
            {/* Linha central */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-secondary-200 rounded-full"></div> */}

            {/* <div className="space-y-12">
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
                > */}
                  {/* <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
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
                  {/* <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"
                    />
                  </div> */}
                  
                  {/* <div className="w-1/2"></div> */}
                {/* </motion.div>} */}
              {/* ))} */}
            {/* </div>
          </div> */}
        {/* </div> */}
      {/* </section> */}
    </div>
  )
}