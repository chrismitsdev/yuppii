import {NextRequest, MiddlewareConfig} from 'next/server'
import createMiddleware from 'next-intl/middleware'
import {locales} from '@/navigation'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'gr',
    localeDetection: true
  })
  const response = handleI18nRouting(request)

  // Add a new header x-current-path which passes the path to downstream components
  response.headers.set('x-current-path', request.nextUrl.pathname)

  return response
}

export const config: MiddlewareConfig = {
  matcher: ['/((?!_next|.*\\..*).*)']
}

/////////////////////////////////////
// Original middleware implementation
// import createMiddleware from 'next-intl/middleware'
// import {locales} from '@/navigation'
 
// export default createMiddleware({
//   locales,
//   defaultLocale: 'gr',
//   localeDetection: true
// })
 
// export const config = {
//   // matcher: ['/((?!_next|.*\\..*).*)']
//   matcher: ['/', '/(gr|en)/:path*']
// }