import * as React from 'react'
import {Metadata} from 'next'
import {useMessages, type Messages} from 'next-intl'
import {setRequestLocale, getTranslations, getMessages} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {CategoryProducts} from './(components)/category-products'
import {CategoryNotFound} from './(components)/category-not-found'

export async function generateMetadata({
  params
}: MenuParams): Promise<Metadata> {
  const {locale, category} = await params
  const t = await getTranslations({locale})
  const messages = await getMessages({locale})
  const categoryKey = (category.charAt(0).toUpperCase() +
    category.slice(1)) as keyof Messages['Menu']
  const foundCategory = Object.hasOwn(messages.Menu, categoryKey)

  return {
    title: foundCategory
      ? `
      ${t('Metadata.Pages.Menu')}
      •
      ${t(`Menu.${categoryKey}.name`)}
      •
      Yuppii Luna Park
    `
      : t('Components.CategoryNotFound.title')
  }
}

export default function CategoryPage({params}: MenuParams) {
  const {locale, category} = React.use(params)
  setRequestLocale(locale)

  const messages = useMessages()
  const categoryKey = (category.charAt(0).toUpperCase() +
    category.slice(1)) as keyof Messages['Menu']
  const foundCategory = Object.hasOwn(messages.Menu, categoryKey)

  return (
    <Container>
      {foundCategory ? (
        <CategoryProducts categoryKey={categoryKey} />
      ) : (
        <CategoryNotFound />
      )}
    </Container>
  )
}

// Statically generate routes at build time
export async function generateStaticParams({params}: MenuParams) {
  const {locale} = await params
  const messages = await getMessages({locale})
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return categoryKeys.map(function (categoryKey) {
    return {
      category: categoryKey.toLowerCase() as Lowercase<keyof Messages['Menu']>
    }
  })
}
