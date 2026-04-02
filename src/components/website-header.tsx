import Image from 'next/image'
import logo from '@/public/logo.svg'
import {Container} from '@/src/components/container'
import {EspaBanner} from '@/src/components/espa-banner'
import {WebsiteNavigation} from '@/src/components/website-navigation'
import {Link} from '@/src/i18n/navigation'

function WebsiteHeader() {
  return (
    <header className='py-6'>
      <Container className='max-w-7xl'>
        <EspaBanner />
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              src={logo}
              width={124}
              alt='Yuppii Luna Park'
              preload
            />
          </Link>
          <WebsiteNavigation />
        </div>
      </Container>
    </header>
  )
}

WebsiteHeader.displayName = 'WebsiteHeader'

export {WebsiteHeader}
