import * as React from 'react'
import Image from 'next/image'
import {headers} from 'next/headers'
import {useTranslations, useLocale} from 'next-intl'
import {FacebookIcon, InstagramIcon, MapIcon, HeartIcon} from 'lucide-react'
import {cn} from '@/src/lib/utils'
import {Link} from '@/src/i18n/navigation'
import {Container} from '@/src/components/container'
import {Typography} from '@/src/components/ui/typography'
import {Button} from '@/src/components/ui/button'
import logo from '@/public/logo-full-light.svg'

const Footer: React.FC = () => {
  const headersList = React.use(headers())
  const t = useTranslations('Components.Footer.columns')
  const locale = useLocale()
  const pathname = headersList.get('x-current-path')
  const isWebsite = pathname && !pathname.includes('menu')

  return (
    <footer className='py-20 bg-accent/95 text-primary'>
      <FooterColumn className='space-y-10 sm:space-y-10'>
        <Image
          className='mx-auto'
          src={logo}
          height={144}
          alt='Yuppii luna park logo'
        />
        <div className='h-px w-full bg-primary/10' />
      </FooterColumn>
      <Container className='max-w-7xl'>
        <section className='py-10 grid gap-y-10 sm:pb-10 sm:grid-flow-col'>
          <FooterColumn
            className={cn(!isWebsite && 'justify-self-center')}
            title={t('operating.title')}
          >
            <Typography variant='small'>{t('operating.info1')}</Typography>
            <Typography variant='small'>{t('operating.info2')}</Typography>
            <Typography variant='small'>{t('operating.info3')}</Typography>
            <Typography variant='small'>{t('operating.info4')}</Typography>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-center'
            title={t('information.title')}
          >
            <Typography variant='small'>{t('information.info1')}</Typography>
            <Typography variant='small'>{t('information.info2')}</Typography>
          </FooterColumn>
          {isWebsite && (
            <>
              <FooterColumn
                className='sm:justify-self-center'
                title={t('policies.title')}
              >
                <Link
                  className='hover:underline'
                  href='/privacy'
                >
                  <Typography variant='small'>{t('policies.link1')}</Typography>
                </Link>
                <Link
                  className='hover:underline'
                  href='/cookies'
                >
                  <Typography variant='small'>{t('policies.link2')}</Typography>
                </Link>
              </FooterColumn>
              <FooterColumn
                className='sm:justify-self-end'
                title={t('brands.title')}
              >
                <a
                  className='hover:underline'
                  href={`https://moccaliving.com/${locale}`}
                  target='_blank'
                >
                  <Typography variant='small'>Mocca Living</Typography>
                </a>
                <a
                  className='hover:underline'
                  href='https://startpilates.gr'
                  target='_blank'
                >
                  <Typography variant='small'>Start Pilates</Typography>
                </a>
              </FooterColumn>
            </>
          )}
        </section>
      </Container>

      <div className='h-px w-full bg-primary/10' />

      <Container className='max-w-7xl'>
        <section className='pt-10 flex flex-col items-center justify-between sm:flex-row'>
          <Typography
            className='order-2 sm:order-1'
            variant='small'
          >
            Copyright &copy; {new Date().getFullYear()} Yuppii Luna Park
          </Typography>
          <FooterColumn className='mb-6 !space-y-0 space-x-4 order-1 sm:mb-0 sm:order-2'>
            <Button
              variant='ghost-primary'
              size='icon'
              asChild
            >
              <Link
                href='https://www.facebook.com/yuppii.gr'
                target='_blank'
              >
                <FacebookIcon />
              </Link>
            </Button>
            <Button
              variant='ghost-primary'
              size='icon'
              asChild
            >
              <Link
                href='https://www.instagram.com/yuppiilunapark/'
                target='_blank'
              >
                <InstagramIcon />
              </Link>
            </Button>
            <Button
              variant='ghost-primary'
              size='icon'
              asChild
            >
              <Link
                href='https://goo.gl/maps/vWBvWk3Tvcw5XkF87'
                target='_blank'
              >
                <MapIcon />
              </Link>
            </Button>
          </FooterColumn>
          <div className='order-3 flex items-center gap-1'>
            <Typography variant='small'>Designed & Developed with</Typography>
            <HeartIcon className='size-3 text-red-700 fill-red-700' />
            <Typography variant='small'>by</Typography>
            <Typography
              variant='small'
              asChild
            >
              <a
                className='underline'
                href='https://www.linkedin.com/in/chrismits/'
                target='_blank'
              >
                CM
              </a>
            </Typography>
          </div>
        </section>
      </Container>
    </footer>
  )
}

const FooterColumn: React.FC<
  React.PropsWithChildren & {title?: string; className?: string}
> = ({title, className, children}) => {
  return (
    <div
      className={cn(
        'space-y-2 text-center sm:text-left sm:space-y-4',
        className
      )}
    >
      {title ? (
        <>
          <Typography variant='large'>{title}</Typography>
          <div>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  )
}

Footer.displayName = 'Footer'
FooterColumn.displayName = 'FooterColumn'

export {Footer}
