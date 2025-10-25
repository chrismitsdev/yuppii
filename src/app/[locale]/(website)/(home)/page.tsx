import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {HomeCarousel} from './(components)/home-carousel'
import {HomeCards} from './(components)/home-cards'
import {HomeGallery} from './(components)/home-gallery'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: `${t('Home')} • Yuppii Luna Park`
  }
}

export default function IndexPage({params}: PageProps<'/[locale]'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <>
      <HomeCarousel />
      <Container>
        <HomeCards />
        <HomeGallery />
      </Container>
    </>
  )
}
