import Image from 'next/image'
import {Link} from '@/src/i18n/navigation'
import {Container} from '@/src/components/container'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {LocaleSwitcher} from '@/src/components/locale-switcher'
import logo from '@/public/logo.svg'

const MenuHeader: React.FC = () => {
  return (
    <>
      <header className='py-4'>
        <Container className='flex justify-between'>
          <Link href='/menu'>
            <Image
              src={logo}
              height={40}
              alt='Yuppii Luna Park'
              priority
            />
          </Link>
          <LocaleSwitcher />
        </Container>
      </header>

      <MenuNavigation />
    </>
  )
}

MenuHeader.displayName = 'MenuHeader'

export {MenuHeader}
