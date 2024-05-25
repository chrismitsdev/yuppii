import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {MenuCategories} from '@/components/page/menu/MenuCategories'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Menu')} | Yuppii Luna Park`,
    openGraph: {
      title: locale === 'en' ? 'Yuppii Menu' : 'Yuppii Μενού',
      description: locale === 'en' 
        ? 'Discover our comprehensive menu of beverages, drinks, and food' 
        : 'Ανακαλύψτε το ολοκληρωμένο μενού μας με ποτά, αναψυκτικά και φαγητό'
    },
  }
}

export default async function MenuPage({params: {locale}}: Params) {
  const {translatedSection, translatedCategories} = await getMenuPromise(locale)
  
  return (
    <Container>
      <Section
        title={translatedSection.title}
        subtitle={translatedSection.subtitle}
      >
        <MenuCategories categories={translatedCategories} />
      </Section>
    </Container>
  )
}