import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {TypographyP} from '@/components/typography/TypographyP'

const Privacy = () => {
  const translate = useTranslations('Privacy')

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