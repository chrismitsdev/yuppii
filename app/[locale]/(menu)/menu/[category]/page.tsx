import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import {getAllProductsPromise} from '@/lib/promises/getAllProductsPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {CategoryCard} from '@/components/page/category/CategoryCard'
import {CategoryNotFound} from '@/components/page/category/CategoryNotFound'

export async function generateStaticParams({params: {locale}}: Params) {
  const {tMenu} = await getAllProductsPromise(locale)
  return tMenu.map(({name}) => ({category: name}))
}

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {tMenu} = await getAllProductsPromise(locale)
  const foundCategory = tMenu.find(({name}) => name === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.categoryName} | Yuppii Luna Park`
  }
}

export default async function CategoryPage({params: {locale, category}}: MenuParams) {
  const {tMenu} = await getAllProductsPromise(locale)
  const foundCategory = tMenu?.find(({name}) => name === category)

  return (
    <Container>
      <Section>
        {foundCategory 
          ? <CategoryCard category={foundCategory} />
          : <CategoryNotFound locale={locale} />
        }
      </Section>
    </Container>
  )
}