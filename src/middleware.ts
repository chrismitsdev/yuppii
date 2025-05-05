import createMiddleware from 'next-intl/middleware'
import {type NextRequest} from 'next/server'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'gr'],
    defaultLocale: 'gr'
  })
  const response = handleI18nRouting(request)

  // Add new header that passes the path to downstream components
  response.headers.set('x-current-path', request.nextUrl.pathname)

  return response
}

export const config = {
  // Match all pathnames except for
  // - if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}

// import {NextRequest, MiddlewareConfig} from 'next/server'
// import createMiddleware from 'next-intl/middleware'
// import {locales} from '@/navigation'

// export default async function middleware(request: NextRequest) {
//   const handleI18nRouting = createMiddleware({
//     locales,
//     defaultLocale: 'gr',
//     localeDetection: true
//   })
//   const response = handleI18nRouting(request)

//   // Add a new header x-current-path which passes the path to downstream components
//   response.headers.set('x-current-path', request.nextUrl.pathname)

//   return response
// }

// export const config: MiddlewareConfig = {
//   matcher: ['/((?!_next|.*\\..*).*)']
// }

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
