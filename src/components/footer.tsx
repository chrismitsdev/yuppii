import Image from 'next/image'
import {useTranslations} from 'next-intl'
import logo from '@/public/yuppii-logo.png'
import {Container} from '@/src/components/container'
import {
  FacebookIconButton,
  GoogleMapsIconButton,
  InstagramIconButton
} from '@/src/components/links'
import {Separator} from '@/src/components/ui/separator'
import {Typography} from '@/src/components/ui/typography'
import {Link} from '@/src/i18n/navigation'
import {cn, PHONE} from '@/src/lib/utils'

function Footer() {
  const t = useTranslations('Components.Footer.columns')

  return (
    <footer className='py-20 bg-secondary border-t-4 border-t-secondary'>
      <Link
        className='inline-fit mx-auto'
        href='/'
      >
        <Image
          className='mx-auto w-auto h-36'
          src={logo}
          alt='Yuppii Luna Park'
        />
      </Link>

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
            <FooterLink href={`tel:${PHONE}`}>
              <Typography variant='small'>{t('information.tel')}</Typography>
            </FooterLink>
            <FooterLink
              href='https://maps.google.com/?q=Yuppii+Luna+Park+Alexandroupoli'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>{t('information.map')}</Typography>
            </FooterLink>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-center'
            title={t('links.title')}
          >
            <FooterLink href='/privacy'>
              <Typography variant='small'>{t('links.privacy')}</Typography>
            </FooterLink>
            <FooterLink href='/cookies'>
              <Typography variant='small'>{t('links.cookies')}</Typography>
            </FooterLink>
          </FooterColumn>
          <FooterColumn
            className='sm:justify-self-end'
            title={t('brands.title')}
          >
            <FooterLink
              href='https://www.thechristmaslighthouse.gr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>The Christmas Lighthouse</Typography>
            </FooterLink>
            <FooterLink
              href='https://www.moccaliving.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>Mocca Living</Typography>
            </FooterLink>
            <FooterLink
              href='https://www.startpilates.gr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography variant='small'>Start Pilates</Typography>
            </FooterLink>
          </FooterColumn>
        </section>
      </Container>

      <Separator className='my-14' />

      <Container
        className='max-w-7xl'
        asChild
      >
        <section className='flex flex-col items-center gap-6 sm:flex-row sm:justify-between'>
          <Typography variant='tiny'>
            © {new Date().getFullYear()} Yuppii Luna Park
          </Typography>
          <div className='space-x-6 not-sm:order-first'>
            <FacebookIconButton />
            <InstagramIconButton />
            <GoogleMapsIconButton />
          </div>
          <Typography variant='tiny'>Designed & Developed by CM </Typography>
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
    <div className={cn('space-y-4 text-center sm:text-left', className)}>
      {title && <Typography variant='lead'>{title}</Typography>}
      <div className='flex flex-col items-center gap-y-2 sm:items-start'>
        {children}
      </div>
    </div>
  )
}

function FooterLink({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Link>) {
  return (
    <Link
      className={cn('hover:underline', className)}
      {...props}
    />
  )
}

Footer.displayName = 'Footer'
FooterColumn.displayName = 'FooterColumn'
FooterLink.displayName = 'FooterLink'

export {Footer}
