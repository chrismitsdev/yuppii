import {getTranslations} from 'next-intl/server'
import {Menu} from '@/components/page/menu/Menu'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Menu')} | Yuppii Luna Park`
  }
}

export default function MenuPage({params: {locale}}: Params) {
  return <Menu locale={locale} />
}