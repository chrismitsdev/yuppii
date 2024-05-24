import {getMenuPromise} from '@/lib/promises/getMenuPromise'
import {MenuItems} from '@/components/page/menu-items/MenuItems'

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const {translatedCategories} = await getMenuPromise(locale)
  const foundCategory = translatedCategories.find(({href}) => href.toLowerCase() === category)
 
  return {
    title: `${foundCategory?.label} | Yuppii Luna Park`
  }
}

export default function MenuItemsPage({params: {locale, category}}: MenuParams) {
  return <MenuItems locale={locale} category={category} />
}