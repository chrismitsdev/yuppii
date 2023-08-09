import {getTranslator} from 'next-intl/server'
import {Privacy} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Privacy')} | Yuppii Luna Park`
  }
}

export default function PrivacyPage() {
  return <Privacy />
}