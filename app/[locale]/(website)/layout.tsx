import {unstable_setRequestLocale} from 'next-intl/server'
import {Header} from '@/components/Header'

export default function WebsiteLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  
  return (
    <> 
      <Header locale={locale} />
      {children}
    </>
  )
}