import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import {getAllCategoriesPromise} from '@/lib/promises/getAllCategoriesPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {CategoryCard} from '@/components/page/category/CategoryCard'
import {CategoryNotFound} from '@/components/page/category/CategoryNotFound'

export async function generateStaticParams({params: {locale}}: Params) {
  const {categories} = await getAllCategoriesPromise(locale)
  return categories.map(({name}) => ({category: name}))
}

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {categories} = await getAllCategoriesPromise(locale)
  const foundCategory = categories.find(({name}) => name === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.categoryName} | Yuppii Luna Park`
  }
}

export default async function CategoryPage({params: {locale, category}}: MenuParams) {
  const {categories} = await getAllCategoriesPromise(locale)
  const foundCategory = categories?.find(({name}) => name === category)

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