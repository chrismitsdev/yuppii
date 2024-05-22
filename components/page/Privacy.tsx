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
        title={translate('section1.title')}
      >
        <TypographyP className='!mt-0'>{translate('section1.content')}</TypographyP>
      </Section>
      <Section
        className='pt-8 [&>div]:m-0'
        title={translate('section2.title')}
      >
        <TypographyP className='!mt-0'>{translate('section2.content')}</TypographyP>
      </Section>
    </Container>
  )
}

Privacy.displayName = 'Privacy'

export {Privacy}