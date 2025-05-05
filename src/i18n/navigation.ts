import {createNavigation} from 'next-intl/navigation'
import {routing} from '@/src/i18n/routing'

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing)

// import {createSharedPathnamesNavigation} from 'next-intl/navigation'

// export const locales = ['gr', 'en'] as const
// export const localePrefix = 'always'

// export const {
//   Link,
//   usePathname
// } = createSharedPathnamesNavigation({locales, localePrefix})
