export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'
import { readMoreArticles } from '@/lib/read-more-content'
import { spineServices } from '@/lib/spine-services'

const BASE_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://www.spine33.com'

function normalizeBaseUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = normalizeBaseUrl(BASE_SITE_URL)
  const staticRoutes = [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/thank-you',
  ]

  const serviceRoutes = spineServices.map((service) => `/services/${service.slug}`)
  const readMoreRoutes = readMoreArticles.map((article) => `/read-more/${article.slug}`)

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...readMoreRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
