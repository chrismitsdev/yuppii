import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {localeAlternates} from '@/src/lib/seo'
import {GamesCards} from './(components)/games-cards'
import {GamesDialogCarousel} from './(components)/games-dialog-carousel'
import {GamesReviews} from './(components)/games-reviews'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Games'),
    alternates: localeAlternates(locale, '/games')
  }
}

export default function GamesPage() {
  return (
    <Container>
      <GamesDialogCarousel />
      <DecorativeDivider />
      <GamesCards />
      <DecorativeDivider />
      <GamesReviews />
    </Container>
  )
}
