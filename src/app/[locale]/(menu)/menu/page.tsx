import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {localeAlternates} from '@/src/lib/seo'
import {MenuCategories} from './(components)/menu-categories'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Menu'),
    alternates: localeAlternates(locale, '/menu')
  }
}

export default function MenuPage() {
  return (
    <Container>
      <MenuCategories />
    </Container>
  )
}
