import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Cafe} from '@/components/page/services/Cafe'
import {Secondaries} from '@/components/page/services/Secondaries'
import {getServicesPromise} from '@/lib/promises/getServicesPromise'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Services')} | Yuppii Luna Park`
  }
}

export default async function ServicesPage({params: {locale}}: Params) {
  const {
    cafeSection, 
    secondariesSection, 
    translatedMenu
  } = await getServicesPromise(locale)

  return (
    <Container>
      <Section
        title={cafeSection.title}
        subtitle={cafeSection.subtitle}
      >
        <Cafe locale={locale} menu={translatedMenu} />
      </Section>
      <Section title={secondariesSection.title}>
        <Secondaries locale={locale} />
      </Section>
    </Container>
  )
}