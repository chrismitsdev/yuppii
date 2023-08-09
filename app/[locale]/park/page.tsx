import {getTranslator} from 'next-intl/server'
import {Park} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Park')} | Yuppii Luna Park`
  }
}

export default function ParkPage() {
  return <Park />
}