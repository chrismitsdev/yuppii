import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {MenuCategories} from './(components)/menu-categories'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Menu')
  }
}

export default function MenuPage() {
  return (
    <Container>
      <MenuCategories />
    </Container>
  )
}
