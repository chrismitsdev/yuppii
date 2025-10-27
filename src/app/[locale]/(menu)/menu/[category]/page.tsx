import * as React from 'react'
import {Metadata} from 'next'
import {type Locale, type Messages, useMessages} from 'next-intl'
import {setRequestLocale, getTranslations, getMessages} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {CategoryProducts} from './(components)/category-products'
import {CategoryNotFound} from './(components)/category-not-found'

type ParamsWithCategory = {
  params: Promise<{
    locale: Locale
    category: Category
  }>
}

export async function generateMetadata({
  params
}: ParamsWithCategory): Promise<Metadata> {
  const {locale, category} = await params
  const t = await getTranslations({locale})
  const messages = await getMessages({locale})
  const categoryKey = (category.charAt(0).toUpperCase() +
    category.slice(1)) as keyof Messages['Menu']

  if (!Object.hasOwn(messages.Menu, categoryKey)) {
    return {
      title: t('Components.CategoryNotFound.title')
    }
  }

  return {
    title: t(`Menu.${categoryKey}.name`)
  }
}

export async function generateStaticParams() {
  const messages = await getMessages({locale: 'en'})
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  const categories = categoryKeys.map(function (ctgKey) {
    return {
      category: ctgKey.toLowerCase() as Lowercase<keyof Messages['Menu']>
    }
  })

  return categories
}

export default function CategoryPage({
  params
}: PageProps<'/[locale]/menu/[category]'>) {
  const {locale, category} = React.use(params as ParamsWithCategory['params'])
  setRequestLocale(locale)

  const messages = useMessages()
  const categoryKey = (category.charAt(0).toUpperCase() +
    category.slice(1)) as keyof Messages['Menu']

  if (!Object.hasOwn(messages.Menu, categoryKey)) {
    return <CategoryNotFound />
  }

  return (
    <Container>
      <CategoryProducts categoryKey={categoryKey} />
    </Container>
  )
}
