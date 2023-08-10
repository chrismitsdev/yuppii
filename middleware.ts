import createMiddleware from 'next-intl/middleware'
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['gr', 'en'],
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'gr',
  // If you want to rely entirely on the URL to resolve the locale, you can disable locale detection based on the accept-language header and a potentially existing cookie value from a previous visit.
  localeDetection: true
})
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!_next|.*\\..*).*)']
}