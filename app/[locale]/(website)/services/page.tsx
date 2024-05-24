import {getTranslations} from 'next-intl/server'
import {Services} from '@/components/page/services/Services'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Services')} | Yuppii Luna Park`
  }
}

export default function ServicesPage({params: {locale}}: Params) {
  return <Services locale={locale} />
}