import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {ParkInfo} from './(components)/park-info'
import {ParkMap} from './(components)/park-map'
import {ParkReasons} from './(components)/park-reasons'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Park')
  }
}

export default function ParkPage() {
  return (
    <Container>
      <ParkInfo />
      <DecorativeDivider />
      <ParkMap />
      <DecorativeDivider />
      <ParkReasons />
    </Container>
  )
}
