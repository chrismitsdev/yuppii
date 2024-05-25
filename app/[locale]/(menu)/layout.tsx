import {unstable_setRequestLocale} from 'next-intl/server'
import {HeaderMenu} from '@/components/HeaderMenu'

export default function MenuLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  
  return (
    <> 
      <HeaderMenu locale={locale} />
      <main>{children}</main> 
    </>
  )
}