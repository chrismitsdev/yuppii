import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

const Cookies = () => {
  const translate = useTranslations('Cookies')

  return (
    <Container>
      <Section
        className='[&>div]:m-0'
        title={translate('section1.title')}
      >
        <TypographyP className='!mt-0'>{translate('section1.content')}</TypographyP>
      </Section>
    </Container>
  )
}

Cookies.displayName = 'Cookies'

export {Cookies}