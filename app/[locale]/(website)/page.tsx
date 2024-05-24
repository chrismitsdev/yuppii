import {getTranslations} from 'next-intl/server'
import {Home} from '@/components/page/home/Home'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Home')} | Yuppii Luna Park`
  }
}

export default function IndexPage({params: {locale}}: Params) {
  return <Home locale={locale} />
}
