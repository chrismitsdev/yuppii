import type {MetadataRoute} from 'next'
import {routing} from '@/src/i18n/routing'

const host = 'https://www.yuppii.gr'

// Menu category pages are left out on purpose: /menu already lists every
// product, and the category pages are reachable from it.
const pages = [
  '',
  '/park',
  '/games',
  '/contact',
  '/menu',
  '/privacy',
  '/cookies'
]

function url(locale: string, page: string) {
  return `${host}/${locale}${page}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: url(locale, page),
      alternates: {
        languages: {
          'x-default': url(routing.defaultLocale, page),
          ...Object.fromEntries(
            routing.locales.map((other) => [other, url(other, page)])
          )
        }
      }
    }))
  )
}
