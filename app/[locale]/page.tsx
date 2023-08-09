import {getTranslator} from 'next-intl/server'
import {Home} from '@/components/page'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Metadata.Pages')
 
  return {
    title: `${t('Home')} | Yuppii Luna Park`
  }
}

export default async function HomePage() {
  return <Home />
}
