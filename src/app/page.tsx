'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Hero from '@/components/dom/Hero'
import About from '@/components/dom/About'
import Experience from '@/components/dom/Experience'
import Works from '@/components/dom/Works'
import Contact from '@/components/dom/Contact'
import Lenis from '@studio-freight/lenis'
import GradientBlinds from '@/components/GradientBlinds'
import { AnimatePresence } from 'framer-motion'

const CustomCursor = dynamic(() => import('@/components/dom/CustomCursor'), { ssr: false })
const Preloader = dynamic(() => import('@/components/dom/Preloader'), { ssr: false })

const resolvePublicSiteUrl = () => {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!rawSiteUrl) {
    return 'http://localhost:3000'
  }

  return /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`
}

const siteUrl = resolvePublicSiteUrl()

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Syed Shafaat Ali',
      alternateName: 'Shafat',
      url: siteUrl,
      jobTitle: 'Senior Civil Engineer and GIS Specialist',
      email: 'mailto:syedshafatx69@gmail.com',
      telephone: '+92-323-1598396',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawalpindi',
        addressCountry: 'PK',
      },
      knowsAbout: [
        'Civil Engineering',
        'GIS Mapping',
        'Structural Design',
        'Project Management',
        'Surveying Solutions',
        'Digital Architecture',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Syed Shafaat Ali Engineering Services',
      url: siteUrl,
      areaServed: 'Worldwide',
      serviceType: [
        'Structural Design',
        'GIS Mapping',
        'Project Management',
        'Surveying Solutions',
      ],
      provider: {
        '@type': 'Person',
        name: 'Syed Shafaat Ali',
      },
    },
    {
      '@type': 'WebSite',
      name: 'Syed Shafaat Ali Portfolio',
      url: siteUrl,
      description:
        'Portfolio website for civil engineering, GIS mapping, and project management services by Syed Shafaat Ali.',
    },
  ],
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) return // Don't start smooth scroll until loading is done

    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  useEffect(() => {
    if (isLoading) return

    const scrollToHash = () => {
      const { hash } = window.location
      if (!hash) return
      const id = hash.slice(1)
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [isLoading])

  return (
    <main className="relative w-full min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-blue-500/30 cursor-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <noscript>
        <section className="p-6 text-sm text-zinc-300">
          Syed Shafaat Ali portfolio with civil engineering, GIS mapping, structural design,
          surveying solutions, and project management services in Rawalpindi, Pakistan.
        </section>
      </noscript>

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientBlinds
          gradientColors={['#1a0033', '#4d0099', '#ff00d4', '#00d4ff']}
          blindCount={24}
          blindMinWidth={30}
          spotlightRadius={0.35}
          spotlightSoftness={0.9}
          spotlightOpacity={0.7}
          mouseDampening={0.12}
          noise={0.2}
          distortAmount={0.05}
        />
      </div>

      {/* Grain Overlay */}
      <div
        className="fixed inset-0 z-[5] pointer-events-none opacity-15 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/Textures & Overlays (for subtle background noise).jpeg')", backgroundSize: 'cover' }}
      ></div>

      {/* Scrollable DOM Content */}
      <div className={`relative z-10 w-full h-full ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </div>
    </main>
  )
}
