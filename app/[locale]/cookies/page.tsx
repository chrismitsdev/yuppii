import {getTranslations} from 'next-intl/server'
import {Cookies} from '@/components/page/Cookies'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Cookies')} | Yuppii Luna Park`
  }
}

export default function CookiesPage({params: {locale}}: Params) {
  return <Cookies locale={locale} />
}