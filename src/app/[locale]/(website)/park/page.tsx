import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {ParkInfo} from './(components)/park-info'
import {ParkMap} from './(components)/park-map'
import {ParkReasons} from './(components)/park-reasons'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: `${t('Park')} • Yuppii Luna Park`
  }
}

export default function ParkPage({params}: Params) {
  const {locale} = React.use(params)
  setRequestLocale(locale)

  return (
    <Container>
      <ParkInfo />
      <ParkMap />
      <ParkReasons />
    </Container>
  )
}
