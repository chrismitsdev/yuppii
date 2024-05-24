import {getTranslations} from 'next-intl/server'
import Messages from '@/messages/en.json'

const getMenuItemsPromise = async (locale: string, category: string) => {
  const tMenu = await getTranslations({locale, namespace: 'Services.Section1.Menu'})
  const filteredByCategoryItems = 
    Object
      .entries(Messages.Services.Section1.Menu)
      .filter((([_, v]) => v.category.toLowerCase() === category))

  const translatedMenu: {name: string, price: string}[] = []
      
  for (const [key, _] of filteredByCategoryItems) {
    const obj = {
      name: tMenu(`${key}.name` as any),
      price: tMenu(`${key}.price` as any)
    }

    translatedMenu.push(obj)
  }

  return {translatedMenu}
}

export {getMenuItemsPromise}