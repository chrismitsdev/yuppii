import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {PrivacyAgreement} from './(components)/privacy-agreement'
import {PrivacyTerms} from './(components)/privacy-terms'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Privacy')
  }
}

export default function PrivacyPage() {
  return (
    <Container>
      <PrivacyTerms />
      <PrivacyAgreement />
    </Container>
  )
}
