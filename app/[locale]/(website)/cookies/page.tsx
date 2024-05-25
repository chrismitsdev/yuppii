import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Cookies')} | Yuppii Luna Park`
  }
}

export default function CookiesPage({params: {locale}}: Params) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Cookies')

  return (
    <Container>
      <Section
        className='[&>div]:m-0'
        title={t('Section1.title')}
      >
        <TypographyP className='!mt-0'>
          {t('Section1.content')}
        </TypographyP>
      </Section>
    </Container>
  )
}