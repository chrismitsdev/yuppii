import {useLocale as getLocale} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Form} from '@/components/page/contact/Form'
import {Mapbox} from '@/components/page/contact/Mapbox'
import {getContactPromise} from '@/lib/promises/getContactPromise'

const Contact = async () => {
  const locale = getLocale()
  const {formSection, translatedFormFields, navigationSection, translatedNavigation} = await getContactPromise(locale)

  return (
    <Container>
      <Section
        title={formSection.title}
        subtitle={formSection.subtitle}
      >
        <Form locale={locale} translations={translatedFormFields} />
      </Section>
      <Section 
        title={navigationSection.title}
        subtitle={navigationSection.subtitle}
      >
        <Mapbox translations={translatedNavigation} />
      </Section>
    </Container>
  )
}

Contact.displayName = 'Contact'

export {Contact}