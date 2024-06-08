import Image from 'next/image'
import {Link} from '@/navigation'
import {MenuNavigation} from '@/components/MenuNavigation'
import {Container} from '@/components/Container'
import {LocaleSwitcher} from '@/components/LocaleSwitcher'
import logo from '@/public/logo.svg'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'

async function HeaderMenu({locale}: {locale: string}) {
  const {tLinks} = await getMenuPromise(locale)

  return (
    <header className='py-4 overflow-hidden'>
      <Container className='flex justify-between'>
        <Link href='/menu'>
          <Image src={logo} height={40} alt='Yuppii Luna Park' />
        </Link>
        <LocaleSwitcher locale={locale} type='mobile' />
      </Container>
      <MenuNavigation links={tLinks} />
    </header>
  )
}

HeaderMenu.displayName = 'HeaderMenu'

export {HeaderMenu}