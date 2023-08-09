import {useTranslations, useLocale} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Information} from '@/components/page/park/Information'
import {Map} from '@/components/page/park/Map'
import {Reasons} from '@/components/page/park/Reasons'

const Park = () => {
  const translate = useTranslations('Park')
  const locale = useLocale()

  return (
    <Container>
      <Section 
        title={translate('Section1.title')}
        subtitle={translate('Section1.subtitle')}
      >
        <Information />
      </Section>
      <Section 
        title={translate('Section2.title')}
        subtitle={translate('Section2.subtitle')}
      >
        <Map locale={locale} />
      </Section>
      <Section
        title={translate('Section3.title')}
        subtitle={translate('Section3.subtitle')}
      >
        <Reasons />
      </Section>
    </Container>
  )
}

Park.displayName = 'Park'

export {Park}