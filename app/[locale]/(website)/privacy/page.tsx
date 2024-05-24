import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Privacy')} | Yuppii Luna Park`
  }
}

export default function PrivacyPage({params: {locale}}: Params) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Privacy')

  return (
    <Container>
      <Section
        className='pb-8 [&>div]:m-0'
        title={t('Section1.title')}
      >
        <TypographyP className='!mt-0'>{t('Section1.content')}</TypographyP>
      </Section>
      <Section
        className='pt-8 [&>div]:m-0'
        title={t('Section2.title')}
      >
        <TypographyP className='!mt-0'>{t('Section2.content')}</TypographyP>
      </Section>
    </Container>
  )
}