import { Metadata } from 'next'
import TransparenciaComponent from '@/components/Transparencia'

export const metadata: Metadata = {
  title: 'Transparência | Associação Amigo Down',
  description: 'Acompanhe nossa prestação de contas, relatórios financeiros e demonstrativos de como investimos cada real no cuidado e desenvolvimento das crianças com Síndrome de Down.',
  keywords: ['transparência', 'relatórios financeiros', 'prestação de contas', 'ONG', 'Síndrome de Down', 'doações'],
  openGraph: {
    title: 'Transparência Total - Associação Amigo Down',
    description: 'Confira nossos relatórios financeiros e veja como cada doação é investida no cuidado das crianças.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparência - Associação Amigo Down',
    description: 'Prestação de contas completa e transparente de nossa organização.',
  },
}

export default function TransparenciaPage() {
  return <TransparenciaComponent />
}