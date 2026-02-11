import type { MetadataRoute } from 'next'

const resolveSiteUrl = () => {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!rawSiteUrl) {
    return 'http://localhost:3000'
  }

  return /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = resolveSiteUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
