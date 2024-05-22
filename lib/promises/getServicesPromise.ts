import {getTranslations} from 'next-intl/server'
import messages from 'messages/gr.json'

const getServicesPromise = async (locale: string) => {
  const tCafe = await getTranslations({locale, namespace: 'Services.Section1'})
  const tSecondaries = await getTranslations({locale, namespace: 'Services.Section2'})
  const tMenu = await getTranslations({locale, namespace: 'Services.Section1.Menu'})
  const {Menu} = messages.Services.Section1

  const cafeSection = {
    title: tCafe('title'),
    subtitle: tCafe('subtitle')
  }

  const secondariesSection = {
    title: tSecondaries('title')
  }

  const translatedMenu: MenuItem[] = []

  for (const [key, value] of Object.entries(Menu)) {
    const obj: MenuItem = {
      name: tMenu(`${key}.name` as any),
      category: tMenu(`${key}.category` as any),
      description: 
        value.description 
          ? [...Object.keys(value.description).map(k => tMenu(`${key}.description.${k}` as any))] 
          : null,
      price: Number.parseFloat(tMenu(`${key}.price` as any))
    }

    translatedMenu.push(obj)
  }

  return {
    cafeSection,
    secondariesSection,
    translatedMenu
  }
}

export {getServicesPromise}