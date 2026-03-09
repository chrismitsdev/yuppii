import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {use} from 'react'
import {Container} from '@/src/components/container'
import {GamesCards} from './(components)/games-cards'
import {GamesDialogCarousel} from './(components)/games-dialog-carousel'
import {GamesReviews} from './(components)/games-reviews'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Games')
  }
}

export default function GamesPage({params}: PageProps<'/[locale]/games'>) {
  const {locale} = use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <GamesDialogCarousel />
      <GamesCards />
      <GamesReviews />
    </Container>
  )
}
