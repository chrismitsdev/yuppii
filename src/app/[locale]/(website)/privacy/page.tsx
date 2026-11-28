import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {localeAlternates} from '@/src/lib/seo'
import {PrivacyAgreement} from './(components)/privacy-agreement'
import {PrivacyTerms} from './(components)/privacy-terms'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Privacy'),
    alternates: localeAlternates(locale, '/privacy')
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
