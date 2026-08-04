import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {DecorativeDivider} from '@/src/components/ui/decorative-divider'
import {ContactForm} from './(components)/contact-form'
import {ContactMap} from './(components)/contact-map'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  return {
    title: t('Contact')
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
