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
  title: 'Associação Amigo Down - Promovendo inclusão e oportunidades',
  description: 'ONG dedicada ao apoio de crianças com síndrome de Down, promovendo inclusão, amor e oportunidades para todas as crianças.',
  keywords: 'síndrome de down, inclusão, ONG, crianças, apoio, doação',
  authors: [{ name: 'Associação Amigo Down' }],
  openGraph: {
    title: 'Associação Amigo Down',
    description: 'Promovendo inclusão, amor e oportunidades para todas as crianças.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', 
    other: {
      rel: 'icon',
      url: '/favicon.svg',
    }
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
        <Header />
         <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}