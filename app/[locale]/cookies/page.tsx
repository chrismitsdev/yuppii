import {getTranslator} from 'next-intl/server'
import {Cookies} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Cookies')} | Yuppii Luna Park`
  }
}

export default function CookiesPage() {
  return <Cookies />
}