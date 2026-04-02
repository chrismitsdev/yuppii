import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import logo from '@/public/logo-full-light.svg'
import {Container} from '@/src/components/container'
import {
  FacebookIconButton,
  GoogleMapsIconButton,
  InstagramIconButton
} from '@/src/components/links'
import {Separator} from '@/src/components/ui/separator'
import {Typography} from '@/src/components/ui/typography'
import {Link} from '@/src/i18n/navigation'
import {cn} from '@/src/lib/utils'

function Footer() {
  const t = useTranslations('Components.Footer.columns')
  const locale = useLocale()

  return (
    <footer className='py-20 bg-accent text-primary'>
      <FooterColumn className='space-y-10 sm:space-y-10'>
        <Image
          className='mx-auto w-auto h-36'
          src={logo}
          alt='Yuppii luna park logo'
        />
      </FooterColumn>

      <Separator className='my-14' />

      <Container
        className='max-w-7xl'
        asChild
      >
        <section className='grid gap-10 sm:grid-flow-col sm:auto-cols-fr'>
          <FooterColumn title={t('operating.title')}>
            <Typography variant='small'>{t('operating.summer')}</Typography>
            <Typography variant='small'>{t('operating.christmas')}</Typography>
            <Typography variant='small'>{t('operating.holidays')}</Typography>
            <Typography variant='small'>{t('operating.daily')}</Typography>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-center'
            title={t('information.title')}
          >
            <Typography variant='small'>{t('information.tel')}</Typography>
            <Typography variant='small'>{t('information.location')}</Typography>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-center'
            title={t('links.title')}
          >
            <Link href='/privacy'>
              <Typography variant='small'>{t('links.privacy')}</Typography>
            </Link>
            <Link href='/cookies'>
              <Typography variant='small'>{t('links.cookies')}</Typography>
            </Link>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-end'
            title={t('brands.title')}
          >
            <Link
              href={`https://www.thechristmaslighthouse.gr/${locale}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>The Christmas Lighthouse</Typography>
            </Link>
            <Link
              href={`https://moccaliving.com/${locale}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>Mocca Living</Typography>
            </Link>
            <Link
              href='https://startpilates.gr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>Start Pilates</Typography>
            </Link>
          </FooterColumn>
        </section>
      </Container>

      <Separator className='my-14' />

      <Container
        className='max-w-7xl'
        asChild
      >
        <section className='flex flex-col items-center gap-6 sm:flex-row sm:justify-between'>
          <Typography variant='small'>
            Copyright &copy; {new Date().getFullYear()} Yuppii Luna Park
          </Typography>
          <div className='space-x-6 not-sm:order-last'>
            <FacebookIconButton variant='primary' />
            <InstagramIconButton variant='primary' />
            <GoogleMapsIconButton variant='primary' />
          </div>
          <Typography variant='small'>Designed & Developed by CM </Typography>
        </section>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  className,
  children
}: React.PropsWithChildren & {title?: string; className?: string}) {
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
