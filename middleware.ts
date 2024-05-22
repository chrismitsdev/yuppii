import createMiddleware from 'next-intl/middleware'
import {locales} from '@/navigation'
 
export default createMiddleware({
  locales,
  defaultLocale: 'gr',
  localeDetection: true
})
 
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
}