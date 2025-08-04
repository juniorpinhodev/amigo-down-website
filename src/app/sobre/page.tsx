'use client'

import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Sobre() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-primary-50">
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
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
            >
              Sobre a{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Associação Amigo Down
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Há mais de 30 anos, a Associação Amigo Down dedica-se ao apoio integral
              de crianças com síndrome de Down e suas famílias, construindo um futuro
              mais inclusivo e acolhedor para todos.
            </motion.p>
          </motion.div>
        </div>

        {/* Elementos Decorativos Flutuantes */}
        <motion.div
          animate={{
            y: [-10, 15, -10],
            rotate: [0, 360],
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-32 right-12 w-16 h-16 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-25 blur-sm"
        />
        
        <motion.div
          animate={{
            y: [12, -15, 12],
            x: [-5, 5, -5],
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-96 left-8 w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 blur-sm"
        />

        <motion.div
          animate={{
            y: [-8, 12, -8],
            rotate: [360, 0],
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-64 right-16 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-sm"
        />

        <motion.div
          animate={{
            y: [15, -10, 15],
            x: [3, -3, 3],
          }}
          transition={{ 
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-96 left-20 w-14 h-14 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-25 blur-sm"
        />

        <motion.div
          animate={{
            y: [-12, 8, -12],
            rotate: [0, 180],
          }}
          transition={{ 
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-80 left-1/3 w-8 h-8 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-sm"
        />

        <motion.div
          animate={{
            y: [8, -14, 8],
            x: [-2, 4, -2],
          }}
          transition={{ 
            y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-48 right-1/4 w-11 h-11 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-25 blur-sm"
        />
      </section>

      {/* Conteúdo Principal */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 space-y-8 text-justify leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-3 first-letter:float-left first-letter:leading-none"
              >
                <strong>Fundada em 21 de setembro de 1991</strong>, a Associação Amigo Down é uma entidade beneficente e sem fins lucrativos que nasceu com uma missão revolucionária: trabalhar pelo desenvolvimento pleno e pela integração social de pessoas com síndrome de Down, promovendo o respeito à sua cidadania e dignidade. Reconhecida como utilidade pública nos níveis municipal, estadual e federal, construímos ao longo de mais de três décadas uma trajetória sólida de dedicação e transformação social.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Nossa história começou com 22 associados fundadores e uma visão inovadora para a época: enxergar além dos estereótipos e reconhecer o potencial único de cada pessoa com síndrome de Down. Hoje, somos referência estadual no atendimento especializado, atendendo adolescentes, jovens e adultos com síndrome de Down e suas famílias de toda Santa Catarina.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Contamos com uma equipe multiprofissional altamente qualificada que inclui pediatra cardiologista, geneticista, endocrinologista, odontóloga, fonoaudiólogas, advogada, assistente social, psicopedagoga e professores especializados. Nossa estrutura física dispõe de consultório geral, consultório multidisciplinar e consultório odontológico, proporcionando atendimento integral e humanizado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500 my-8"
              >
                <p className="text-lg font-medium text-gray-800">
                  Desenvolvemos um amplo programa de atividades educativas, culturais e terapêuticas que incluem aulas de dança, zumba, percussão, natação em parceria com a APABB, culinária e jogos pedagógicos. Destaque especial para nosso projeto da <strong className="text-purple-600">minicasa</strong>, um ambiente que simula um lar completo onde trabalhamos o desenvolvimento da autonomia doméstica dos associados.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                O <strong className="text-purple-600">Mutirão da Saúde</strong>, realizado mensalmente na última quarta-feira do mês, é um dos nossos principais programas, oferecendo atendimento especializado para pacientes encaminhados por Secretarias Municipais de Saúde de todo o Estado. Este evento proporciona atenção integral à saúde, além de acolhimento, orientação e assistência jurídica às famílias. Complementarmente, mantemos parceria para consultas especializadas em genética no Hospital Infantil Joana de Gusmão, em Florianópolis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500 my-8"
              >
                <p className="text-lg font-medium">
                  <strong className="text-purple-800">Todas as nossas atividades são gratuitas</strong> e desenvolvidas por uma equipe totalmente dedicada. Nossa atuação complementa o Sistema Único de Saúde, oferecendo atendimentos especializados de média complexidade. Atendemos São José, Florianópolis, Palhoça, Santo Amaro da Imperatriz, Biguaçu e recebemos famílias de todo o Estado de Santa Catarina.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Participamos ativamente da construção de políticas públicas através de nossa representação no Conselho Municipal e Estadual da Pessoa com Deficiência. Integramos também a Federação Catarinense das Associações com Síndrome de Down (Fecasd) e somos federados à Federação Brasileira (Febasd), fortalecendo o movimento nacional pelos direitos das pessoas com deficiência.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Nosso compromisso vai além do atendimento: combatemos ativamente os preconceitos e estereótipos através de ações educativas e de conscientização. Acreditamos firmemente que cada pessoa com síndrome de Down possui personalidade própria e potencial único, e que, quando adequadamente estimulada, pode alcançar plena autonomia e participação social.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Defendemos uma sociedade inclusiva onde pessoas com síndrome de Down sejam reconhecidas por suas capacidades, não por suas limitações. Nossa missão é estimular, educar e apoiar desde cedo para que se tornem cidadãos independentes e participativos, longe de rótulos que restringem suas possibilidades de desenvolvimento e realização pessoal.
              </motion.p>
            </div>
          </motion.div>

          {/* Mensagem Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 mb-12"
          >
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 p-12 rounded-3xl shadow-lg">
              <motion.p
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent leading-relaxed"
              >
                💙 Transformando vidas através do cuidado, dedicação e amor.
                <br />
                Juntos construímos histórias de superação e conquistas.💙
              </motion.p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contatos" passHref>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-lg"
              >
                <span className="relative z-10">Venha nos conhecer</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Elementos Decorativos */}
        <motion.div
          animate={{
            y: [-8, 10, -8],
            rotate: [0, 360],
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
        />
        
        <motion.div
          animate={{
            y: [10, -8, 10],
            rotate: [360, 0],
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-32 left-16 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-15 blur-sm"
        />
      </section>
    </div>
  )
}