import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Information} from '@/components/page/park/Information'
import {Map} from '@/components/page/park/Map'
import {Reasons} from '@/components/page/park/Reasons'

async function Park({locale}: Locale) {
  const t = await getTranslations({locale, namespace: 'Park'})

  return (
    <Container>
      <Section 
        title={t('Section1.title')}
        subtitle={t('Section1.subtitle')}
      >
        <Information locale={locale} />
      </Section>
      <Section 
        title={t('Section2.title')}
        subtitle={t('Section2.subtitle')}
      >
        <Map locale={locale} />
      </Section>
      <Section
        title={t('Section3.title')}
        subtitle={t('Section3.subtitle')}
      >
        <Reasons locale={locale} />
      </Section>
    </Container>
  )
}

Park.displayName = 'Park'

export {Park}