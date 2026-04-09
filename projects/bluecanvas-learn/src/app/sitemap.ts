import { guides } from '@/lib/guides'

export default function sitemap() {
  const guideUrls = guides.map((guide) => ({
    url: `https://learn.bluecanvas.ai/guides/${guide.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: 'https://learn.bluecanvas.ai', lastModified: new Date() },
    ...guideUrls,
  ]
}
