import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

async function Cookies({locale}: Locale) {
  const translate = await getTranslations({locale, namespace: 'Cookies'})

  return (
    <Container>
      <Section
        className='[&>div]:m-0'
        title={translate('section1.title')}
      >
        <TypographyP className='!mt-0'>
          {translate('section1.content')}
        </TypographyP>
      </Section>
    </Container>
  )
}

Cookies.displayName = 'Cookies'

export {Cookies}