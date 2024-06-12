import {unstable_setRequestLocale} from 'next-intl/server'
import {MenuHeader} from '@/components/MenuHeader'

export default function MenuLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  
  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr]'> 
      <MenuHeader locale={locale} />
      {children}
    </div>
  )
}