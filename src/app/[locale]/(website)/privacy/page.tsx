import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {PrivacyTerms} from './(components)/privacy-terms'
import {PrivacyAgreement} from './(components)/privacy-agreement'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: `${t('Privacy')} • Yuppii Luna Park`
  }
}

export default function PrivacyPage({params}: PageProps<'/[locale]/privacy'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <PrivacyTerms />
      <PrivacyAgreement />
    </Container>
  )
}
