import Image from 'next/image'
import {Link} from '@/src/i18n/navigation'
import {Container} from '@/src/components/container'
import {WebsiteNavigation} from '@/src/components/website-navigation'
import logo from '@/public/logo.svg'

const WebsiteHeader: React.FC = () => {
  return (
    <header className='py-6'>
      <Container className='max-w-7xl'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              priority
              src={logo}
              width={124}
              alt='Yuppii Luna Park'
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
