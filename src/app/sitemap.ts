import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://craftingwebs.es'

    const routes = [
        { url: '/', priority: 1.0, changeFrequency: 'monthly' },
        { url: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/proyectos', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/nosotros', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
    ]

    return routes.map((route) => ({
        url: `${base}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: route.priority,
    }))
}