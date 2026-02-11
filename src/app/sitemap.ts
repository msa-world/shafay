import type { MetadataRoute } from 'next'

const resolveSiteUrl = () => {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!rawSiteUrl) {
    return 'http://localhost:3000'
  }

  return /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = resolveSiteUrl()

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
