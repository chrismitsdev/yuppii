import Image from 'next/image'
import {Link} from '@/navigation'
import {Container} from '@/components/Container'
import {LocaleSwitcher} from '@/components/LocaleSwitcher'
import logo from '@/public/logo.svg'

function HeaderMenu({locale}: Locale) {
  return (
    <header className='py-4'>
      <Container className='flex justify-between'>
        <Link href='/menu'>
          <Image src={logo} height={40} alt='Yuppii Luna Park' />
        </Link>
        <LocaleSwitcher locale={locale} type='mobile' />
      </Container>
    </header>
  )
}

HeaderMenu.displayName = 'HeaderMenu'

export {HeaderMenu}