import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {localeAlternates} from '@/src/lib/seo'
import {CookiesInfo} from './(components)/cookies-info'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Cookies'),
    alternates: localeAlternates(locale, '/cookies')
  }
}

export default function CookiesPage() {
  return (
    <Container>
      <CookiesInfo />
    </Container>
  )
}
