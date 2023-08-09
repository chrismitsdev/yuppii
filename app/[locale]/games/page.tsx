import {getTranslator} from 'next-intl/server'
import {Games} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Games')} | Yuppii Luna Park`
  }
}

export default function GamesPage() {
  return <Games />
}