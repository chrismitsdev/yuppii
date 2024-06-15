import * as  React from 'react'
import {getTranslations} from 'next-intl/server'
import {getServicesPromise} from '@/lib/promises/getServicesPromise'
import {getAllCategoriesPromise} from '@/lib/promises/getAllCategoriesPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {AllCategories} from '@/components/page/menu/AllCategories'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {cafeSection} = await getServicesPromise(locale)
 
  return {
    title: `${t('Menu')} | Yuppii Luna Park`,
    openGraph: {
      title: `Yuppii ${t('Menu')}`,
      description: cafeSection.subtitle
    }
  }
}

export default async function MenuPage({params: {locale}}: Params) {
  const {categories} = await getAllCategoriesPromise(locale)

  return (
    <Container>
      <Section className='space-y-6'>
        <AllCategories categories={categories} />
      </Section>
    </Container>
  )
}