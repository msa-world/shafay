import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syed Shafaat Ali Portfolio',
    short_name: 'Shafaat Portfolio',
    description:
      'Portfolio and services by Syed Shafaat Ali: Civil Engineering, GIS Mapping, Structural Design, and Project Management.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    categories: ['engineering', 'business', 'portfolio'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
