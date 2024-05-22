import {getTranslations} from 'next-intl/server'
import {Park} from '@/components/page/Park'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Park')} | Yuppii Luna Park`
  }
}

export default function ParkPage({params: {locale}}: Params) {
  return <Park locale={locale} />
}