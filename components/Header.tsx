import * as React from 'react'
import {Link} from '@/navigation'
import {getTranslations} from 'next-intl/server'
import Image from 'next/image'
import {Container} from '@/components/Container'
import {Navigation} from '@/components/Navigation'
import {Home, FerrisWheel, Gamepad, ListChecks, ScrollText} from 'lucide-react'
import logo from '@/public/logo.svg'

const links: Array<HeaderLink> = [
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

async function Header({locale}: Locale) {
  const translations = await getTranslations({locale, namespace: 'Metadata.Pages'})

  const tLinks = links.map(link => ({
    ...link,
    label: translations(
      link.label as 'Home' | 'Park' | 'Games' | 'Services' | 'Contact'
    ) 
  }))

  return (
    <header className='py-4'>
      <Container className='flex justify-between'>
        <Link href='/'>
          <Image src={logo} width={124} alt='Yuppii Luna Park' />
        </Link>
        <Navigation 
          links={tLinks} 
          locale={locale} 
          localeContent={translations('LocaleContent')}
        />
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}