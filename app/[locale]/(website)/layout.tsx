import {unstable_setRequestLocale} from 'next-intl/server'
import {WebsiteHeader} from '@/components/WebsiteHeader'

export default function WebsiteLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr]'> 
      <WebsiteHeader locale={locale} />
      {children}
    </div>
  )
}