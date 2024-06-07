import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Menu} from '@/components/page/menu/Menu'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'
import {getAllProductsPromise} from '@/lib/promises/getAllProductsPromise'

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
  const products = await getAllProductsPromise(locale)

  return (
    <Container>
      <Section
        title={translatedSection.title}
        subtitle={translatedSection.subtitle}
      >
        <Menu />
        {JSON.stringify(products)}
        {/* <MenuCategories categories={translatedCategories} /> */}

      </Section>
    </Container>
  )
}