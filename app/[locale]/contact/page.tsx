import {getTranslator} from 'next-intl/server'
import {Contact} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Contact')} | Yuppii Luna Park`
  }
}

export default function ContactPage() {
  return <Contact />
}