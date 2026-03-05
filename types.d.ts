import type messages from '@/messages/en.json'
import type {routing} from '@/src/i18n/routing'

// Next-intl types
type Locale = (typeof routing.locales)[number]
type Messages = typeof messages

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: Messages
  }
}

// Shared types
declare global {
  type Params = {
    params: Promise<{
      locale: Locale
    }>
  }
  type Category = Lowercase<keyof Messages['Menu']>
  type CustomIconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string
  }
}
