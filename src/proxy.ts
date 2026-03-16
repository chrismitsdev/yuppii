import type {MiddlewareConfig} from 'next/server'
import createMiddleware from 'next-intl/middleware'
import {routing} from '@/src/i18n/routing'

export default createMiddleware(routing)

export const config: MiddlewareConfig = {
  // Match only internationalized pathnames
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  // matcher: ['/', '/(el|en)/:path*']
}
