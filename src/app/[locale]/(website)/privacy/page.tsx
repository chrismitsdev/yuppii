import type {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import * as React from 'react'
import {Container} from '@/src/components/container'
import {PrivacyAgreement} from './(components)/privacy-agreement'
import {PrivacyTerms} from './(components)/privacy-terms'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Privacy')
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
