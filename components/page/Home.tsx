import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Carousel} from '@/components/page/home/Carousel'
import {ModalCards} from '@/components/page/home/ModalCards'
import {HomeGallery} from '@/components/page/home/HomeGallery'

async function Home({locale}: Locale) {
  const t = await getTranslations({locale, namespace: 'Home'})
  
  return (
    <Container>
      <Section>
        <Carousel />
      </Section>
      <Section
        title={t('Section1.title')}
        subtitle={t('Section1.subtitle')}
      >
        <ModalCards locale={locale} />
      </Section>
      <Section
        title={t('Section2.title')}
        subtitle={t('Section2.subtitle')}
      >
        <HomeGallery />
      </Section>
    </Container>
  )
}

Home.displayName = 'Home'

export {Home}