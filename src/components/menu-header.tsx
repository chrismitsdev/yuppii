import Image from 'next/image'
import {Suspense} from 'react'
import logo from '@/public/yuppii-logo-new.png'
import {Container} from '@/src/components/container'
import {LocaleCycle} from '@/src/components/locale-cycle'
import {MenuNavigation} from '@/src/components/menu-navigation'
import {Link} from '@/src/i18n/navigation'

function MenuHeader() {
  return (
    <>
      <header className='py-6'>
        <Container className='flex items-center justify-between'>
          <Link
            href='/'
            aria-label='Go to home page'
          >
            <Image
              className='inline-auto block-24'
              src={logo}
              alt='Yuppii Luna Park'
              preload
            />
          </Link>

          <LocaleCycle />
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
