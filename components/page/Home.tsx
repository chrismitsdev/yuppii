import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Carousel} from '@/components/page/home/Carousel'
import {ModalCards} from '@/components/page/home/ModalCards'
import {HomeGallery} from '@/components/page/home/HomeGallery'

const Home = () => {
  const translate = useTranslations('Home')
  const carouselTranslate = useTranslations('Home.Section1.Carousel')

  return (
    <>  
      <Carousel 
        messages={{
          slide1Title: carouselTranslate('Slide1.title'),
          slide1Subtitle: carouselTranslate('Slide1.subtitle'),
          slide2Title: carouselTranslate('Slide2.title'),
          slide2Subtitle: carouselTranslate('Slide2.subtitle'),
          slide3Title: carouselTranslate('Slide3.title'),
          slide3Subtitle: carouselTranslate('Slide3.subtitle')
        }} 
      />
      <Container>
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
    </>
  )
}

Home.displayName = 'Home'

export {Home}