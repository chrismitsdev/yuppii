import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'

type SimpleMenuProduct = Omit<MenuProduct, 'subcategory' | 'disabled'>

export async function getMenuProductsPromise(locale: string, category: string) {
  const t = await getTranslations({locale, namespace: 'Catalog'})
  const Category = category.charAt(0).toUpperCase() + category.slice(1) as keyof IntlMessages['Catalog']
  const {categoryNote, products} = Messages.Catalog[Category]
  
  const notes = categoryNote && Object
    .keys(categoryNote)
    .map(k => t(`${Category}.categoryNote.${k}` as any))
  const tProducts: SimpleMenuProduct[] = []
  
  for (const [key, {description, disabled}] of Object.entries(products)) {
    const obj: SimpleMenuProduct = {
      name: t(`${Category}.products.${key}.name` as any),
      price: t(`${Category}.products.${key}.price` as any),
      description: 
        description
          ? Object.keys(description).map(k => t(`${Category}.products.${key}.description.${k}` as any))
          : null
    }

    if (!disabled) {
      tProducts.push(obj)
    }
  }

  return {notes, tProducts}
}