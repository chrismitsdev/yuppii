import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import * as React from 'react'
import {Container} from '@/src/components/container'
import {HomeCards} from './(components)/home-cards'
import {HomeCarousel} from './(components)/home-carousel'
import {HomeGallery} from './(components)/home-gallery'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Home')
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
