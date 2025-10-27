import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {ContactForm} from './(components)/contact-form'
import {ContactMap} from './(components)/contact-map'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: t('Contact')
  }
}

export default function ContactPage({params}: PageProps<'/[locale]/contact'>) {
  const {locale} = React.use(params as Params['params'])
  setRequestLocale(locale)

  return (
    <Container>
      <ContactForm />
      <ContactMap />
    </Container>
  )
}
