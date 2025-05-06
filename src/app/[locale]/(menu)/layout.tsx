import * as React from 'react'
import {setRequestLocale} from 'next-intl/server'
import {MenuHeader} from '@/src/components/menu-header'

export default function MenuLayout({
  params,
  children
}: Readonly<React.PropsWithChildren<Params>>) {
  const {locale} = React.use(params)
  setRequestLocale(locale)

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr]'>
      <MenuHeader />
      {children}
    </div>
  )
}
