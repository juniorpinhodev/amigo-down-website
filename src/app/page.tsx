'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <VideoSection />
    </div>
  )
}