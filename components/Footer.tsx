import Image from 'next/image'
import {Link} from '@/navigation'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {buttonVariants} from '@/components/ui/Button'
import {Facebook, Instagram, Map} from 'lucide-react'
import logo from '@/public/logo-full.svg'

async function Footer({locale}: Locale) {
  const translate = await getTranslations({locale, namespace: 'Footer'})
  
  return (
    <footer className='bg-accent/95 text-primary'>
      <Container className='py-16'>
        <article className='grid gap-10 sm:grid-rows-[1fr,_auto] sm:grid-cols-4'>
          <div className='space-y-3'>
            <div className='px-6 py-4 bg-brand inline-block rounded box-border'>
              <Image src={logo} width={122} alt='Yuppii Luna Park' />
            </div>
            <div className='space-x-6'>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'primary'})}
                href='https://www.facebook.com/yuppii.gr'
                target='_blank'
              >
                <Facebook strokeWidth={2.5} />
              </Link>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'primary'})}
                href='https://www.instagram.com/yuppiilunapark/'
                target='_blank'
              >
                <Instagram strokeWidth={2.5} />
              </Link>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'primary'})}
                href='https://goo.gl/maps/vWBvWk3Tvcw5XkF87'
                target='_blank'
              >
                <Map strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          <div className='space-y-3'>
            <TypographyLarge>{translate('Box2.title')}</TypographyLarge>
            <div className='flex flex-col gap-y-2'>
              <TypographySmall>{translate('Box2.info1')}</TypographySmall>
              <TypographySmall>{translate('Box2.info2')}</TypographySmall>
              <TypographySmall>{translate('Box2.info3')}</TypographySmall>
              <TypographySmall>{translate('Box2.info4')}</TypographySmall>
            </div>
          </div>
          <div className='space-y-3'>
            <TypographyLarge>{translate('Box4.title')}</TypographyLarge>
            <div className='flex flex-col gap-y-2'>
              <TypographySmall>{translate('Box4.info1')}</TypographySmall>
              <TypographySmall>{translate('Box4.info2')}</TypographySmall>
            </div>
          </div>
          <div className='space-y-3'>
            <TypographyLarge>{translate('Box3.title')}</TypographyLarge>
            <div className='flex flex-col gap-y-2'>
              <Link className='flex hover:underline' href='/privacy'>
                <TypographySmall>{translate('Box3.link1')}</TypographySmall>
              </Link>
              <Link className='flex hover:underline' href='/cookies'>
                <TypographySmall>{translate('Box3.link2')}</TypographySmall>
              </Link>
            </div>
          </div>
          <div className='block [&>*]:block sm:[&>*]:inline sm:contents'>
            <TypographySmall>
              Copyright &copy; {new Date().getFullYear()} Yuppii Luna Park
            </TypographySmall>
            <TypographySmall className='mt-2 sm:mt-0 sm:col-start-4'>
              Designed & Developed by CM
            </TypographySmall>
          </div>
        </article>
      </Container>
    </footer>
  )
}

Footer.displayName = 'Footer'

export {Footer}