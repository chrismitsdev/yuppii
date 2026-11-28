import {getCategory, getMenu} from '@chrismitsdev/menu-data'
import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {use} from 'react'
import {Container} from '@/src/components/container'
import {localeAlternates} from '@/src/lib/seo'
import {CategoryNotFound} from './(components)/category-not-found'
import {CategoryProducts} from './(components)/category-products'

export async function generateMetadata({
  params
}: PageProps<'/[locale]/menu/[category]'>): Promise<Metadata> {
  const {category: categoryId} = await params
  const category = getCategory('yuppii', categoryId)

  const locale = await getLocale()
  const alternates = localeAlternates(locale, `/menu/${categoryId}`)

  if (!category) {
    const t = await getTranslations('Components.CategoryNotFound')
    return {
      title: t('title'),
      alternates
    }
  }

  return {
    title: category.name[locale],
    alternates
  }
}

export default function CategoryPage({
  params
}: PageProps<'/[locale]/menu/[category]'>) {
  const {category: categoryId} = use(params)
  const category = getCategory('yuppii', categoryId)

  if (!category) {
    return <CategoryNotFound />
  }

  return (
    <Container>
      <CategoryProducts category={category} />
    </Container>
  )
}

export function generateStaticParams() {
  return getMenu('yuppii').map((category) => ({category: category.id}))
}
