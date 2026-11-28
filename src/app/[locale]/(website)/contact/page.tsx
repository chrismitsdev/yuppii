import type {Metadata} from 'next'
import {getLocale, getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {localeAlternates} from '@/src/lib/seo'
import {ContactForm} from './(components)/contact-form'
import {ContactMap} from './(components)/contact-map'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  const locale = await getLocale()

  return {
    title: t('Contact'),
    alternates: localeAlternates(locale, '/contact')
  }
}

export default function ContactPage() {
  return (
    <Container>
      <ContactForm />
      <DecorativeDivider />
      <ContactMap />
    </Container>
  )
}
