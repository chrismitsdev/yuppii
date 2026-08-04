import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {CookiesInfo} from './(components)/cookies-info'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Cookies')
  }
}

export default function CookiesPage() {
  return (
    <Container>
      <CookiesInfo />
    </Container>
  )
}
