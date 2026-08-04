import {Suspense} from 'react'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {WebsiteHeader} from '@/src/components/website-header'

export default function MenuLayout({children}: LayoutProps<'/[locale]'>) {
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
