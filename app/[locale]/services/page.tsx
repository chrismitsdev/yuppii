import {getTranslator} from 'next-intl/server'
import {Services} from '@/components/page/Services'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Services')} | Yuppii Luna Park`
  }
}

export default function ServicesPage() {
  return <Services />
}