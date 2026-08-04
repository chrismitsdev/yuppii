import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {HomeCards} from './(components)/home-cards'
import {HomeCarousel} from './(components)/home-carousel'
import {HomeGallery} from './(components)/home-gallery'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Home')
  }
}

export default function IndexPage() {
  return (
    <>
      <HomeCarousel />
      <DecorativeDivider />
      <Container>
        <HomeCards />
      </Container>
      <DecorativeDivider />
      <Container>
        <HomeGallery />
      </Container>
    </>
  )
}
