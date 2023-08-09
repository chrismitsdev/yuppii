import Link from 'next-intl/link'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import {Container} from '@/components/Container'
import {Navigation} from '@/components/Navigation'
import logo from '@/public/logo.svg'
import {links} from '@/lib/data/links'

interface HeaderProps {
  locale: string
}

const Header = ({locale}: HeaderProps) => {
  const t = useTranslations('Metadata.Pages')

  const translatedLinks = links.map(link => ({
    ...link,
    label: t(link.label as 'Home' | 'Park' | 'Games' | 'Services' | 'Contact') 
  }))

  return (
    <header className='py-4 @container'>
      <Container className='flex justify-between'>
        <Link href='/'>
          <Image src={logo} width={124} alt='Yuppii Luna Park' />
        </Link>
        <Navigation 
          links={translatedLinks} 
          locale={locale} 
          localeContent={t('LocaleContent')}
        />
      </Container>
    </header>
  )
}

Header.displayName = 'Header'

export {Header}