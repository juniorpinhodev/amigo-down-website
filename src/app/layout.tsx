import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Associação Amigo Down | Apoio a Pessoas com Síndrome de Down em SC',
    template: '%s | Associação Amigo Down',
  },
  description: 'A Associação Amigo Down oferece apoio, acolhimento e desenvolvimento para pessoas com Síndrome de Down e suas famílias em Santa Catarina. Conheça nosso trabalho e saiba como ajudar.',
  keywords: ['Associação Amigo Down', 'Síndrome de Down', 'Santa Catarina', 'São José', 'Apoio', 'Inclusão', 'ONG', 'Doação'],
  openGraph: {
    title: 'Associação Amigo Down | Apoio a Pessoas com Síndrome de Down em SC',
    description: 'Há mais de 30 anos transformando vidas. Oferecemos apoio integral para pessoas com Síndrome de Down e suas famílias em Santa Catarina.',
    url: 'https://www.amigodown.org',
    siteName: 'Associação Amigo Down',
    images: [
      {
        url: 'https://www.amigodown.org/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Associação Amigo Down | Apoio a Pessoas com Síndrome de Down em SC',
    description: 'Apoio, acolhimento e desenvolvimento para pessoas com Síndrome de Down e suas famílias em Santa Catarina.',
    images: ['https://www.amigodown.org/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Associação Amigo Down",
            "url": "https://www.amigodown.org",
            "logo": "https://www.amigodown.org/logoAmigoDown.svg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Nove de Julho, 900",
              "addressLocality": "São José",
              "addressRegion": "SC",
              "postalCode": "88111-380",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-48-99170-4881",
              "contactType": "Atendimento Geral"
            },
            "sameAs": []
          }) }}
        />
        <Header />
         <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
