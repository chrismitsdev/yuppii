import * as React from 'react'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import {Link} from '@/navigation'
import {Container} from '@/components/Container'
import {WebsiteNavigation} from '@/components/WebsiteNavigation'
import {Home, FerrisWheel, Gamepad, ListChecks, ScrollText} from 'lucide-react'
import logo from '@/public/logo.svg'

const links: HeaderLink[] = [
  {
    label: 'Home', 
    href: '/', 
    icon: React.createElement(Home, {strokeWidth: 2.5})
  },
  {
    label: 'Park', 
    href: '/park', 
    icon: React.createElement(FerrisWheel, {strokeWidth: 2.5})
  },
  {
    label: 'Games', 
    href: '/games', 
    icon: React.createElement(Gamepad, {strokeWidth: 2.5})
  },
  {
    label: 'Services', 
    href: '/services', 
    icon: React.createElement(ListChecks, {strokeWidth: 2.5})
  },
  {
    label: 'Contact', 
    href: '/contact', 
    icon: React.createElement(ScrollText, {strokeWidth: 2.5})
  }
]

function WebsiteHeader({locale}: {locale: string}) {
  const t = useTranslations('Metadata.Pages')

  const tLinks = links.map(link => ({
    ...link,
    label: t(link.label as keyof IntlMessages['Metadata']['Pages']) 
  }))

  return (
    <header className='py-4'>
      <Container className='flex justify-between'>
        <Link href='/'>
          <Image priority src={logo} width={124} alt='Yuppii Luna Park' />
        </Link>
        <WebsiteNavigation 
          links={tLinks} 
          locale={locale} 
          localeContent={t('LocaleContent')}
        />
      </Container>
    </header>
  )
}

WebsiteHeader.displayName = 'WebsiteHeader'

export {WebsiteHeader}