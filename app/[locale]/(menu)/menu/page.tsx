import {getTranslations} from 'next-intl/server'
import {Menu} from '@/components/page/menu/Menu'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Menu')} | Yuppii Luna Park`,
    openGraph: {
      title: locale === 'en' ? 'Yuppii Menu' : 'Yuppii Μενού',
      description: locale === 'en' 
        ? 'Discover our comprehensive menu of beverages, drinks, and food' 
        : 'Ανακαλύψτε το ολοκληρωμένο μενού μας με ποτά, αναψυκτικά και φαγητό'
    },
  }
}

export default function MenuPage({params: {locale}}: Params) {
  return <Menu locale={locale} />
}