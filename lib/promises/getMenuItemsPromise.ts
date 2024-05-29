import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'

async function getMenuItemsPromise(locale: string, category: string) {
  const tMenu = await getTranslations({locale, namespace: 'Services.Section1.Menu'})
  const filteredByCategoryItems = 
    Object
      .entries(Messages.Services.Section1.Menu)
      .filter((([_, v]) => v.category.toLowerCase() === category && !v.disabled))

  const translatedMenu: Omit<MenuItem, 'category'>[] = []
      
  for (const [key, value] of filteredByCategoryItems) {
    const obj: Omit<MenuItem, 'category'> = {
      name: tMenu(`${key}.name` as any),
      price: Number.parseFloat(tMenu(`${key}.price` as any)),
      description: 
        value.description 
          ? [...Object.keys(value.description).map(k => tMenu(`${key}.description.${k}` as any))] 
          : null
    }

    translatedMenu.push(obj)
  }

  return {translatedMenu}
}

export {getMenuItemsPromise}