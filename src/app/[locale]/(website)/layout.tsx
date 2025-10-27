import * as React from 'react'
import {setRequestLocale} from 'next-intl/server'
import {WebsiteHeader} from '@/src/components/website-header'

export default function WebsiteLayout({
  params,
  children
}: LayoutProps<'/[locale]'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr]'>
      <WebsiteHeader />
      {children}
    </div>
  )
}
