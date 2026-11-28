import {getMenu} from '@chrismitsdev/menu-data'
import {useLocale} from 'next-intl'
import {Suspense} from 'react'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {WebsiteHeader} from '@/src/components/website-header'

export default function MenuLayout({children}: LayoutProps<'/[locale]'>) {
  const locale = useLocale()
  const categories = getMenu('yuppii').map((category) => ({
    id: category.id,
    name: category.name[locale]
  }))

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr]'>
      <WebsiteHeader />
      <Suspense>
        <MenuNavigation categories={categories} />
      </Suspense>
      {children}
    </div>
  )
}
