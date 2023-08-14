import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Carousel} from '@/components/page/home/Carousel'
import {ModalCards} from '@/components/page/home/ModalCards'
import {HomeGallery} from '@/components/page/home/HomeGallery'

const Home = () => {
  const translate = useTranslations('Home')

  return (
    <Container>
      <Section>
        <Carousel />
      </Section>
      <Section
        title={translate('Section1.title')}
        subtitle={translate('Section1.subtitle')}
      >
        <ModalCards />
      </Section>
      <Section
        title={translate('Section2.title')}
        subtitle={translate('Section2.subtitle')}
      >
        <HomeGallery />
      </Section>
    </Container>
  )
}

Home.displayName = 'Home'

export {Home}