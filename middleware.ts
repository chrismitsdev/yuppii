import createMiddleware from 'next-intl/middleware'
 
export default createMiddleware({
  locales: ['gr', 'en'],
  defaultLocale: 'gr',
  localeDetection: true
})
 
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
}