import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/dom/Header'
import Footer from '@/components/dom/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const resolveSiteUrl = () => {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!rawSiteUrl) {
    return new URL('http://localhost:3000')
  }

  const normalizedSiteUrl = /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`

  try {
    return new URL(normalizedSiteUrl)
  } catch {
    return new URL('http://localhost:3000')
  }
}

const siteUrl = resolveSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Syed Shafaat Ali Portfolio',
  title: {
    default: 'Syed Shafaat Ali | Shafat Portfolio - Civil Engineer & GIS Specialist',
    template: '%s | Syed Shafaat Ali',
  },
  description:
    'Official portfolio of Syed Shafaat Ali (Shafat) featuring civil engineering, GIS mapping, structural design, surveying solutions, and project management services.',
  keywords: [
    'Syed Shafaat Ali',
    'Shafat portfolio',
    'Shafaat portfolio',
    'civil engineer portfolio',
    'GIS specialist portfolio',
    'structural design services',
    'project management services',
    'surveying solutions',
    'Rawalpindi civil engineer',
    'Pakistan GIS specialist',
  ],
  authors: [{ name: 'Syed Shafaat Ali', url: '/' }],
  creator: 'Syed Shafaat Ali',
  publisher: 'Syed Shafaat Ali',
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Syed Shafaat Ali Portfolio',
    title: 'Syed Shafaat Ali | Shafat Portfolio - Civil Engineer & GIS Specialist',
    description:
      'Explore civil engineering, GIS mapping, structural design, and project management services by Syed Shafaat Ali.',
    images: [
      {
        url: '/images/Hero Section Background.jpeg',
        width: 1200,
        height: 630,
        alt: 'Syed Shafaat Ali portfolio background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Shafaat Ali | Shafat Portfolio',
    description:
      'Civil engineering and GIS specialist portfolio with structural design, surveying, and project management services.',
    images: ['/images/Hero Section Background.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'Engineering',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-zinc-950 text-zinc-100 font-sans relative`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
