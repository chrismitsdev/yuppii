import {notFound} from 'next/navigation'
import * as rootParams from 'next/root-params'
import {hasLocale} from 'next-intl'
import {getRequestConfig} from 'next-intl/server'
import {routing} from '@/src/i18n/routing'

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    const paramValue = await rootParams.locale()
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue
    } else {
      notFound()
    }
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})

// import {hasLocale} from 'next-intl'
// import {getRequestConfig} from 'next-intl/server'
// import {routing} from '@/src/i18n/routing'

// export default getRequestConfig(async ({requestLocale}) => {
//   const requested = await requestLocale
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   }
// })
