import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Carousel} from '@/components/page/home/Carousel'
import {ModalCards} from '@/components/page/home/ModalCards'
import {HomeGallery} from '@/components/page/home/HomeGallery'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Home')} | Yuppii Luna Park`
  }
}

export default function IndexPage({params: {locale}}: Params) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')
  
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
