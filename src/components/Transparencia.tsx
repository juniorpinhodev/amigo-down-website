'use client'

import { useState } from 'react'
import { 
  DollarSign, 
  PieChart, 
  FileText, 
  Download, 
  TrendingUp, 
  Heart,
  Users,
  Building,
  Calculator,
  Eye,
  CheckCircle,
  Calendar,
  Shield,
  Award,
  BarChart3,

  Sparkles,
  Star
} from 'lucide-react'

// Definição dos tipos
type TabType = 'receitas' | 'despesas'

interface FinancialItem {
  category: string
  amount: number
  percentage: number
  icon: any
  color: string
}

interface FinancialData {
  receitas: {
    total: number
    items: FinancialItem[]
  }
  despesas: {
    total: number
    items: FinancialItem[]
  }
}

interface Report {
  title: string
  description: string
  date: string
  size: string
  type: string
  status: 'Disponível' | 'Certificado'
}

interface Achievement {
  metric: string
  label: string
  icon: LucideIcon
  color: string
}

interface Certification {
  name: string
  description: string
  icon: LucideIcon
  status: 'Ativo' | 'Certificado'
  validity: string
}

export default function TransparenciaComponent() {
  const [activeTab, setActiveTab] = useState<TabType>('receitas')

  const financialData: FinancialData = {
    receitas: {
      total: 0,
      items: [
        { category: 'Doações Individuais', amount: 0, percentage: 0, icon: Heart, color: 'from-rose-400 to-pink-500' },
        { category: 'Parcerias Empresariais', amount: 0, percentage: 0, icon: Building, color: 'from-purple-400 to-purple-500' },
        { category: 'Eventos Beneficentes', amount: 0, percentage: 0, icon: Users, color: 'from-blue-400 to-indigo-500' },
        { category: 'Editais e Projetos', amount: 0, percentage: 0, icon: FileText, color: 'from-emerald-400 to-teal-500' }
      ]
    },
    despesas: {
      total: 0,
      items: [
        { category: 'Programas e Atividades', amount: 0, percentage: 0, icon: Heart, color: 'from-rose-400 to-pink-500' },
        { category: 'Recursos Humanos', amount: 0, percentage: 0, icon: Users, color: 'from-purple-400 to-purple-500' },
        { category: 'Infraestrutura', amount: 0, percentage: 0, icon: Building, color: 'from-blue-400 to-indigo-500' },
        { category: 'Administrativo', amount: 0, percentage: 0, icon: Calculator, color: 'from-slate-400 to-gray-500' }
      ]
    }
  }

  const reports: Report[] = [
    {
      title: 'Relatório Anual 2024',
      description: 'Balanço completo das atividades e finanças do ano',
      date: '2024-12-31',
      size: '2.4 MB',
      type: 'PDF',
      status: 'Disponível'
    },
    {
      title: 'Demonstrativo Financeiro - 3º Trimestre',
      description: 'Receitas e despesas detalhadas do período',
      date: '2024-09-30',
      size: '1.8 MB',
      type: 'PDF',
      status: 'Disponível'
    },
    {
      title: 'Relatório de Impacto Social',
      description: 'Resultados e beneficiários atendidos',
      date: '2024-06-30',
      size: '3.2 MB',
      type: 'PDF',
      status: 'Disponível'
    },
    {
      title: 'Auditoria Independente 2023',
      description: 'Parecer de auditoria externa certificada',
      date: '2024-03-15',
      size: '1.5 MB',
      type: 'PDF',
      status: 'Certificado'
    }
  ]

  const achievements: Achievement[] = [
    { metric: 'Breve', label: 'Crianças Atendidas', icon: Heart, color: 'from-rose-400 to-pink-500' },
    { metric: '100%', label: 'Score Transparência', icon: Eye, color: 'from-purple-400 to-purple-500' },
    { metric: '34', label: 'Anos de Atuação', icon: Calendar, color: 'from-blue-400 to-indigo-500' },
    { metric: 'Breve', label: 'Voluntários Ativos', icon: Users, color: 'from-emerald-400 to-teal-500' }
  ]

  const certifications: Certification[] = [
    {
      name: 'CNAS',
      description: 'Certificado Nacional de Entidades Beneficentes',
      icon: Shield,
      status: 'Ativo',
      validity: '2025-12-31'
    },
    {
      name: 'OSCIP',
      description: 'Organização da Sociedade Civil de Interesse Público',
      icon: Award,
      status: 'Ativo',
      validity: '2026-06-30'
    },
    {
      name: 'ISO 9001',
      description: 'Sistema de Gestão da Qualidade',
      icon: CheckCircle,
      status: 'Certificado',
      validity: '2025-03-15'
    }
  ]

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                  <Eye className="w-16 h-16" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Compromisso com a Transparência</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Em Construção
                <br />
                <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                  Breve
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
                {/* Prestamos contas de cada real investido no cuidado e desenvolvimento 
                das crianças com Síndrome de Down */}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6" />
                  {/* <span className="font-semibold text-lg">Última atualização: {formatDate('2024-12-31')}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.label}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100/50 text-center hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">
                    {achievement.metric}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Demonstrativo Financeiro 2024</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Recursos e <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Investimentos</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Confira como utilizamos os recursos recebidos e nosso compromisso 
              com a responsabilidade fiscal
            </p>
          </div> */}

          {/* Financial Summary Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-3">
                {formatCurrency(financialData.receitas.total)}
              </div>
              <div className="text-gray-600 font-medium text-lg">Total de Receitas</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-3">
                {formatCurrency(financialData.despesas.total)}
              </div>
              <div className="text-gray-600 font-medium text-lg">Total de Despesas</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-3">
                {formatCurrency(financialData.receitas.total - financialData.despesas.total)}
              </div>
              <div className="text-gray-600 font-medium text-lg">Resultado Líquido</div>
            </div>
          </div> */}

          {/* Financial Tabs */}
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('receitas')}
                className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'receitas'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <TrendingUp className="w-6 h-6" />
                  <span>Receitas</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('despesas')}
                className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'despesas'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <DollarSign className="w-6 h-6" />
                  <span>Despesas</span>
                </div>
              </button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {financialData[activeTab].items.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="group hover:bg-gray-50/50 rounded-2xl p-6 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                            <span className="text-sm font-medium text-gray-500">{item.percentage}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-gray-900">
                              {formatCurrency(item.amount)}
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div> */}
        {/* </div> 
      </section>  */}

      {/* Reports Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-gray-100 px-6 py-3 rounded-full border border-gray-200">
              <FileText className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Documentos e Relatórios</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Relatórios <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Disponíveis</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acesse todos os nossos relatórios financeiros, demonstrativos e auditorias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                          {report.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            report.status === 'Certificado' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {report.status === 'Certificado' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <Star className="w-3 h-3 mr-1" />
                            )}
                            {report.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {report.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(report.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.type} • {report.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="group/btn w-full bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center space-x-3">
                    <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                    <span>Baixar Relatório</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-medium">Certificações e Selos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nossas <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Certificações</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reconhecimentos que comprovam nossa seriedade e compromisso com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100/50 text-center hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                      cert.status === 'Ativo' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Status: {cert.status}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Validade:</span> {formatDate(cert.validity)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Faça a Diferença</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Sua doação é investida com
              <br />
              <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                transparência total
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Cada real doado é acompanhado e relatado. Juntos, construímos um futuro 
              mais inclusivo para nossas crianças.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <span className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 group-hover:text-pink-500 transition-colors" />
                  <span>Faça uma Doação</span>
                </span>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center space-x-3">
                  <FileText className="w-6 h-6" />
                  <span>Assine Nossa Newsletter</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}