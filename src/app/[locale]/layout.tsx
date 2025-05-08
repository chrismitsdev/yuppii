import '@/src/styles/index.css'
import type {Metadata, Viewport} from 'next'
import {notFound} from 'next/navigation'
import {Arima} from 'next/font/google'
import {NextIntlClientProvider, hasLocale} from 'next-intl'
import {setRequestLocale} from 'next-intl/server'
import {Analytics} from '@vercel/analytics/next'
import {Toaster} from 'react-hot-toast'
import {routing} from '@/src/i18n/routing'
import {Footer} from '@/src/components/footer'

const font = Arima({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yuppii.gr'),
  title: 'Yuppii Luna Park',
  description: 'Yuppii Luna Park amusement park official website',
  alternates: {
    canonical: '/',
    languages: {
      'el-GR': '/gr',
      'en-US': '/en'
    }
  },
  openGraph: {
    title: 'Yuppii Luna Park',
    description: 'Yuppii Luna Park amusement park official website'
  },
  formatDetection: {
    email: true,
    telephone: true
  }
}

export const viewport: Viewport = {
  themeColor: '#cee9e7',
  colorScheme: 'normal'
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function LocaleLayout({
  params,
  children
}: Readonly<React.PropsWithChildren<Params>>) {
  const {locale} = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={font.className}
    >
      <body>
        <NextIntlClientProvider>
          <div
            className='bg-primary text-primary-foreground'
            data-vaul-drawer-wrapper
          >
            {children}
            <Footer />
          </div>
          <Toaster
            position='top-center'
            toastOptions={{
              duration: 5000,
              style: {
                padding: '16px 24px',
                backgroundColor: '#dbbbc3',
                border: '1px solid var(--color-secondary)',
                borderRadius: '0.5rem',
                fontWeight: '600',
                columnGap: 4
              }
            }}
          />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
