import type {Metadata} from 'next'
import {type Messages, useMessages} from 'next-intl'
import {getMessages, getTranslations} from 'next-intl/server'
import {use} from 'react'
import {Container} from '@/src/components/container'
import {CategoryNotFound} from './(components)/category-not-found'
import {CategoryProducts} from './(components)/category-products'

type ParamsWithCategory = {
  params: Promise<{
    category: Category
  }>
}

export async function generateMetadata({
  params
}: ParamsWithCategory): Promise<Metadata> {
  const {category} = await params
  const t = await getTranslations()
  const messages = await getMessages()

  if (!Object.hasOwn(messages.Menu, category)) {
    return {
      title: t('Components.CategoryNotFound.title')
    }
  }

  return {
    title: t(`Menu.${category}.name`)
  }
}

export default function CategoryPage({
  params
}: PageProps<'/[locale]/menu/[category]'>) {
  const {category} = use(params as ParamsWithCategory['params'])

  const messages = useMessages()

  if (!Object.hasOwn(messages.Menu, category)) {
    return <CategoryNotFound />
  }

  return (
    <Container>
      <CategoryProducts categoryKey={category} />
    </Container>
  )
}

export async function generateStaticParams() {
  const messages = await getMessages({locale: 'en'})
  const categories = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]
  return categories.map((category) => ({category}))
}
