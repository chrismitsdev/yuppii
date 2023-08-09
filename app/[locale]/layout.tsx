import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Arima} from 'next/font/google'
import {notFound} from 'next/navigation'
import {useLocale} from 'next-intl'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Toaster} from 'react-hot-toast'

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yuppii Luna Park',
  description: 'The best amusement park in Alexandroupolis',
}

export default function RootLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} className={arima.className}>
      <body className='min-h-screen grid grid-rows-[auto,_1fr,_auto]'>
        <Header locale={params.locale} />
        <main className='overflow-auto'>{children}</main>
        <Footer />
        <Toaster 
          position='top-right' 
          toastOptions={{duration: 5000}}
        />
      </body>
    </html>
  )
}
