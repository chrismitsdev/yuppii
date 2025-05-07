import {type NextRequest, MiddlewareConfig} from 'next/server'
import createMiddleware from 'next-intl/middleware'
import {routing} from '@/src/i18n/routing'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing)
  const response = handleI18nRouting(request)

  // Add new header that passes the path to downstream components
  response.headers.set('x-current-path', request.nextUrl.pathname)

  return response
}

export const config: MiddlewareConfig = {
  // Match all pathnames except for
  // - if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
