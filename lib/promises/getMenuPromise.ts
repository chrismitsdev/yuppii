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

export async function getMenuPromise(locale: string, iconSize: number = 24) {
  const t = await getTranslations({locale, namespace: 'Menu.Section1'})
  const t2 = await getTranslations({locale, namespace: 'Catalog'})

  const translatedSection = {
    title: t('title'),
    subtitle: t('subtitle')
  }

  const translatedCategories: {href: string, label: string, icon: React.ReactElement}[] = 
    Object.entries(Messages.Catalog).map(([k], i) => {
      return {
        href: k.toLowerCase(),
        label: t2(`${k}.categoryName` as any),
        icon: React.createElement(
          uniqueIcons[i] || CircleHelp, 
          {
            strokeWidth: 2.5, 
            width: iconSize, 
            height: iconSize
          }
        )
      }
    })

  return {
    translatedSection,
    translatedCategories
  }
}