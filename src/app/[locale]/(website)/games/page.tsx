import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {GamesCards} from './(components)/games-cards'
import {GamesDialogCarousel} from './(components)/games-dialog-carousel'
import {GamesReviews} from './(components)/games-reviews'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Games')
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
