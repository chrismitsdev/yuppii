import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    '', 
    '/park', 
    '/games', 
    '/services', 
    '/contact', 
    '/privacy', 
    '/cookies'
  ].map(route => ({
    url: `https://yuppii.com${route}`,
    lastModified: new Date()
  }))

  return routes
}