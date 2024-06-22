import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'
import {Burger} from '@/components/misc-icons/burger'
import {
  Coffee, 
  CupSoda, 
  GlassWater, 
  Beer, 
  Zap, 
  Utensils, 
  Pizza, 
  SaladIcon, 
  Martini, 
  Popcorn,
  CircleHelp,
  LucideProps
} from 'lucide-react'

const uniqueIcons = [
  Coffee, 
  CupSoda, 
  GlassWater, 
  Zap, 
  Martini, 
  Beer, 
  Utensils, 
  Pizza, 
  Burger, 
  SaladIcon,
  Popcorn
]

// export async function getAllCategoriesPromise(locale: string, svgProps: LucideProps = {strokeWidth: 2.2}) {
export async function getAllCategoriesPromise(locale: string) {
  const t = await getTranslations({locale, namespace: 'Catalog'})

  const categories: Category[] = []

  for (const [i, [key, value]] of Object.entries(Messages.Catalog).entries()) {
    const menuObj: Category = {
      name: value.categoryName.toLowerCase().replace(' ', '-'),
      categoryName: t(`${key as keyof IntlMessages['Catalog']}.categoryName`),
      categoryNotes: value.categoryNote 
        ? Object.keys(value.categoryNote).map(k => t(`${key}.categoryNote.${k}` as any))
        : null,
      categoryProducts: Object
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
        }),
      categoryIcon: React.createElement(
        uniqueIcons[i] || CircleHelp, {strokeWidth: 2.2} as React.SVGAttributes<SVGElement>
      )
    } 

    categories.push(menuObj)
  }

  return {categories}
}