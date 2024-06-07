import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'

export async function getAllProductsPromise(locale: string) {
  const t = await getTranslations({locale, namespace: 'Catalog'})
  const products = Object.entries(Messages.Catalog).map(([key, value]) => {
    return {
      category: key,
      products: Object.values(value.products)
    }
  })

  return products
}