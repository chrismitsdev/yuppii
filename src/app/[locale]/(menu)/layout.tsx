import {setRequestLocale} from 'next-intl/server'
import * as React from 'react'
import {MenuHeader} from '@/src/components/menu-header'

export default function MenuLayout({
  params,
  children
}: LayoutProps<'/[locale]'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr]'>
      <MenuHeader />
      {children}
    </div>
  )
}
