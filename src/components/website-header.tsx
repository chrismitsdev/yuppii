import Image from 'next/image'
import logo from '@/public/yuppii-logo-new.png'
import {Container} from '@/src/components/container'
import {EspaBanner} from '@/src/components/espa-banner'
import {WebsiteNavigation} from '@/src/components/website-navigation'
import {Link} from '@/src/i18n/navigation'

function WebsiteHeader() {
  return (
    <header className='py-6'>
      <Container className='max-w-7xl'>
        <EspaBanner />
        <div className='grid grid-cols-3'>
          <Link
            className='col-start-2 not-sm:justify-self-center sm:col-start-1'
            href='/'
            aria-label='Go to home page'
          >
            <Image
              className='inline-auto block-20'
              src={logo}
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
