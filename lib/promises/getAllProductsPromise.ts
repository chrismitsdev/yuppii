import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'

type Category = keyof IntlMessages['Catalog']

export async function getAllProductsPromise(locale: string) {
  const t = await getTranslations({locale, namespace: 'Catalog'})

  const tMenu = Object.entries(Messages.Catalog).map(([key, value]) => {
    return {
      name: t(`${key as keyof IntlMessages['Catalog']}.categoryName`),
      notes: value.categoryNote 
        ? Object.keys(value.categoryNote).map(k => t(`${key}.categoryNote.${k}` as any))
        : null,
      products: Object
        .entries(value.products)
        .filter((([_, {disabled}]) => !disabled))
        .map(([productName, {description}]) => {
          const placeholder = `${key as keyof IntlMessages['Catalog']}.products.${productName}`
          return {
            name: t(`${placeholder}.name` as any),
            price: t(`${placeholder}.price` as any),
            description: 
              description
                ? Object.keys(description).map(k => t(`${placeholder}.description.${k}` as any))
                : null
          }
        })
    }
  })

  return {tMenu}
}