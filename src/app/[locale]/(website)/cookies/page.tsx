import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {CookiesInfo} from './(components)/cookies-info'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: `${t('Cookies')} • Yuppii Luna Park`
  }
}

export default function CookiesPage({params}: PageProps<'/[locale]/cookies'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <CookiesInfo />
    </Container>
  )
}
