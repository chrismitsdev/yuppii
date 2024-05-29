import '@/styles/globals.css'
import type {Metadata} from 'next'
import {unstable_setRequestLocale} from 'next-intl/server'
import {locales} from '@/navigation'
import {Arima} from 'next/font/google'
import {Toaster} from 'react-hot-toast'
import {Footer} from '@/components/Footer'
import {SpeedInsights} from '@vercel/speed-insights/next'

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yuppii.gr'),
  title: 'Yuppii Luna Park',
  description: 'Yuppii Luna Park amusement park official website',
  openGraph: {
    title: 'Yuppii Luna Park',
    description: 'Yuppii Luna Park amusement park official website'
  },
  formatDetection: {
    email: true,
    telephone: true
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export default function RootLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  
  return (
    <html lang={locale} className={arima.className}>
      <body className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        {children}
        <Footer />
        <Toaster position='top-right' />
        <SpeedInsights />
      </body>
    </html>
  )
}