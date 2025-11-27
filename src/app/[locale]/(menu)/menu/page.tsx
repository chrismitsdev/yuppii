import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import * as React from 'react'
import {Container} from '@/src/components/container'
import {MenuCategories} from './(components)/menu-categories'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Menu')
  }
}

export default function MenuPage({params}: PageProps<'/[locale]/menu'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <MenuCategories />
    </Container>
  )
}
