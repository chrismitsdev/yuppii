import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {use} from 'react'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {HomeCards} from './(components)/home-cards'
import {HomeCarousel} from './(components)/home-carousel'
import {HomeDialogCarousel} from './(components)/home-dialog-carousel'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Home')
  }
}

export default function IndexPage({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <>
      <HomeCarousel />
      <DecorativeDivider />
      <Container>
        <HomeCards />
      </Container>
      <DecorativeDivider />
      <Container>
        <HomeDialogCarousel />
      </Container>
    </>
  )
}
