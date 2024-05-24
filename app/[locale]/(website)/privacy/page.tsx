import {getTranslations} from 'next-intl/server'
import {Privacy} from '@/components/page/privacy/Privacy'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Privacy')} | Yuppii Luna Park`
  }
}

export default function PrivacyPage({params: {locale}}: Params) {
  return <Privacy locale={locale} />
}