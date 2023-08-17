import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Arima} from 'next/font/google'
import {notFound} from 'next/navigation'
import {useLocale} from 'next-intl'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Toaster} from 'react-hot-toast'
import {Analytics} from '@vercel/analytics/react'

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yuppii Luna Park',
  description: 'Yuppii Luna Park amusement park official website',
  formatDetection: {
    email: true,
    telephone: true
  },
}

export default function RootLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} className={arima.className}>
      <body>
        <Header />
        <main className='overflow-auto'>{children}</main>
        <Footer />
        <Toaster position='top-right' />
        <Analytics />
      </body>
    </html>
  )
}
