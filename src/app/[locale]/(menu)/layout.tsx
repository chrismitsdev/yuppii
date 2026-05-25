import {setRequestLocale} from 'next-intl/server'
import {Suspense, use} from 'react'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {WebsiteHeader} from '@/src/components/website-header'

export default function MenuLayout({
  params,
  children
}: LayoutProps<'/[locale]'>) {
  const {locale} = use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr]'>
      <WebsiteHeader />
      <Suspense>
        <MenuNavigation />
      </Suspense>
      {children}
    </div>
  )
}
