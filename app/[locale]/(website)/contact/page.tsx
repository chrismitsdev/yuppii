import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Form} from '@/components/page/contact/Form'
import {Mapbox} from '@/components/page/contact/Mapbox'
import {getContactPromise} from '@/lib/promises/getContactPromise'

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN as string

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Contact')} | Yuppii Luna Park`
  }
}

export default async function ContactPage({params: {locale}}: Params) {
  const {
    formSection, 
    translatedFormFields, 
    navigationSection, 
    translatedNavigation
  } = await getContactPromise(locale)

  return (
    <Container>
      <Section
        title={formSection.title}
        subtitle={formSection.subtitle}
      >
        <Form locale={locale} translations={translatedFormFields} />
      </Section>
      {MAPBOX_TOKEN && (
        <Section 
          title={navigationSection.title}
          subtitle={navigationSection.subtitle}
        >
          <Mapbox translations={translatedNavigation} token={MAPBOX_TOKEN} />
        </Section>
      )}
    </Container>
  )
}