import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {localeAlternates} from '@/src/lib/seo'
import {HomeCards} from './(components)/home-cards'
import {HomeCarousel} from './(components)/home-carousel'
import {HomeGallery} from './(components)/home-gallery'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Home'),
    alternates: localeAlternates(locale)
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
