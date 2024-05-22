import {getTranslations} from 'next-intl/server'
import {Contact} from '@/components/page/Contact'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Contact')} | Yuppii Luna Park`
  }
}

export default function ContactPage({params: {locale}}: Params) {
  return <Contact locale={locale} />
}