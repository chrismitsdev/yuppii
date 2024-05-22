import {getTranslations} from 'next-intl/server'
import {Games} from '@/components/page/Games'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Games')} | Yuppii Luna Park`
  }
}

export default function GamesPage({params: {locale}}: Params) {
  return <Games locale={locale} />
}