import Image from 'next/image'
import {Suspense} from 'react'
import logo from '@/public/logo.svg'
import {Container} from '@/src/components/container'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {SuspenseLocaleSwitcher} from '@/src/components/suspense-locale-switcher'

const MenuHeader: React.FC = () => {
  return (
    <>
      <header className='py-6'>
        <Container className='flex justify-between'>
          <Image
            src={logo}
            height={40}
            alt='Yuppii Luna Park'
            priority
          />
          <SuspenseLocaleSwitcher />
        </Container>
      </header>

      <Suspense>
        <MenuNavigation />
      </Suspense>
    </>
  )
}

MenuHeader.displayName = 'MenuHeader'

export {MenuHeader}
