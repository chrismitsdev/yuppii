import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Arima} from 'next/font/google'
import {Toaster} from 'react-hot-toast'
import {Footer} from '@/components/Footer'
import {Analytics} from '@vercel/analytics/react'
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

export default function RootLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  return (
    <html lang={locale} className={arima.className}>
      <body className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        {children}
        <Footer locale={locale} />
        <Toaster position='top-right' />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}