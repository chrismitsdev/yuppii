import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

async function Privacy({locale}: Locale) {
  const translate = await getTranslations({locale, namespace: 'Privacy'})

  return (
    <Container>
      <Section
        className='pb-8 [&>div]:m-0'
        title={translate('Section1.title')}
      >
        <TypographyP className='!mt-0'>{translate('Section1.content')}</TypographyP>
      </Section>
      <Section
        className='pt-8 [&>div]:m-0'
        title={translate('Section2.title')}
      >
        <TypographyP className='!mt-0'>{translate('Section2.content')}</TypographyP>
      </Section>
    </Container>
  )
}

Privacy.displayName = 'Privacy'

export {Privacy}