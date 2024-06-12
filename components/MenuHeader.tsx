import Image from 'next/image'
import {getAllProductsPromise} from '@/lib/promises/getAllProductsPromise'
import {Link} from '@/navigation'
import {MenuNavigation} from '@/components/MenuNavigation'
import {Container} from '@/components/Container'
import {LocaleSwitcher} from '@/components/LocaleSwitcher'
import logo from '@/public/logo.svg'

async function MenuHeader({locale}: {locale: string}) {
  const {tMenu} = await getAllProductsPromise(locale)

  return (
    <>
      <header className='py-4'>
        <Container className='flex justify-between'>
          <Link href='/menu'>
            <Image src={logo} height={40} alt='Yuppii Luna Park' priority />
          </Link>
          <LocaleSwitcher locale={locale} type='mobile' />
        </Container>
      </header>
      
      <MenuNavigation categories={tMenu} />
    </>
  )
}

MenuHeader.displayName = 'MenuHeader'

export {MenuHeader}