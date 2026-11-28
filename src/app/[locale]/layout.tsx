import '@/src/styles/index.css'
import {Analytics} from '@vercel/analytics/next'
import type {Metadata} from 'next'
import {Playfair_Display, Vollkorn} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl'
import {getLocale, getTranslations} from 'next-intl/server'
import {Toaster} from 'react-hot-toast'
import {Footer} from '@/src/components/footer'
import {routing} from '@/src/i18n/routing'
import {siteUrl} from '@/src/lib/seo'

const mainFont = Vollkorn({
  subsets: ['latin', 'latin-ext', 'greek', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-main'
})

const displayFont = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-display'
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: '%s • Yuppii Luna Park',
      default: 'Yuppii Luna Park'
    },
    description: t('Description'),
    openGraph: {
      title: 'Yuppii Luna Park',
      description: t('Description')
    },
    formatDetection: {
      email: true,
      telephone: true
    }
  }
}

export default async function RootLayout({children}: LayoutProps<'/[locale]'>) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className={`bg-background ${mainFont.variable} ${displayFont.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <div
            className='bg-background text-foreground'
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}
