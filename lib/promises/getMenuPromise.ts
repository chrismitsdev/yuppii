import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import {uniqueCategories} from '@/lib/utils'
import {Coffee, CupSoda, Beer, Utensils, CircleHelp} from 'lucide-react'

const uniqueIcons = [Coffee, CupSoda, Beer, Utensils]

const getMenuPromise = async (locale: string) => {
  const t = await getTranslations({locale, namespace: 'Menu.Section1'})

  const translatedSection = {
    title: t('title'),
    subtitle: t('subtitle')
  }

  const translatedCategories: {href: string, label: string, icon: React.ReactElement}[] = 
    uniqueCategories.map((category, i) => ({
      href: category,
      label: t('categories').split(',')[i] || '',
      icon: React.createElement(uniqueIcons[i] || CircleHelp, {strokeWidth: 2.5})
    }))

  return {
    translatedSection,
    translatedCategories
  }
}

export {getMenuPromise}