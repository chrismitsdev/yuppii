import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import * as React from 'react'
import {Container} from '@/src/components/container'
import {ServicesCards} from './(components)/services-cards'
import {ServicesGallery} from './(components)/services-gallery'
import {ServicesReviews} from './(components)/services-reviews'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Services')
  }
}

export default function ServicesPage({
  params
}: PageProps<'/[locale]/services'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <ServicesGallery />
      <ServicesCards />
      <ServicesReviews />
    </Container>
  )
}
