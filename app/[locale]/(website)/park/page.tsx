import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Information} from '@/components/page/park/Information'
import {Map} from '@/components/page/park/Map'
import {Reasons} from '@/components/page/park/Reasons'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Park')} | Yuppii Luna Park`
  }
}

export default function ParkPage({params: {locale}}: Params) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Park')
  
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