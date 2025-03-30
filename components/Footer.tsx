import {headers} from 'next/headers'
import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {Facebook, Instagram, Map} from 'lucide-react'
import {Link} from '@/navigation'
import {cn} from '@/lib/utils'
import {Container} from '@/components/Container'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {buttonVariants} from '@/components/ui/Button'
import logo from '@/public/logo-full.svg'

function Footer() {
  const t = useTranslations('Footer')
  const headersList = headers()
  const pathname = headersList.get('x-current-path')
  const isInMenu = pathname && pathname.includes('menu')

  return (
    <footer className='bg-accent/95 text-primary'>
      <Container className='py-16'>
        <article
          className={cn(
            'grid gap-10 sm:grid-rows-[1fr,_auto]',
            !isInMenu ? 'sm:grid-cols-5' : 'sm:grid-cols-3'
          )}
        >
          <div className='space-y-3'>
            <div className='px-6 py-4 bg-brand inline-block rounded box-border'>
              <Image
                src={logo}
                width={122}
                alt='Yuppii Luna Park'
              />
            </div>
            <div className='flex gap-6 [&>*]:shrink-0'>
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
          <div
            className={cn('space-y-3', isInMenu && 'sm:justify-self-center')}
          >
            <TypographyLarge>{t('Box2.title')}</TypographyLarge>
            <div className='flex flex-col gap-y-2'>
              <TypographySmall>{t('Box2.info1')}</TypographySmall>
              <TypographySmall>{t('Box2.info2')}</TypographySmall>
              <TypographySmall>{t('Box2.info3')}</TypographySmall>
              <TypographySmall>{t('Box2.info4')}</TypographySmall>
            </div>
          </div>
          <div className={cn('space-y-3', isInMenu && 'sm:justify-self-end')}>
            <TypographyLarge>{t('Box4.title')}</TypographyLarge>
            <div className='flex flex-col gap-y-2'>
              <TypographySmall>{t('Box4.info1')}</TypographySmall>
              <TypographySmall>{t('Box4.info2')}</TypographySmall>
            </div>
          </div>
          {!isInMenu && (
            <>
              <div className='space-y-3'>
                <TypographyLarge>{t('Box3.title')}</TypographyLarge>
                <div className='flex flex-col gap-y-2'>
                  <Link
                    className='flex hover:underline'
                    href='/privacy'
                  >
                    <TypographySmall>{t('Box3.link1')}</TypographySmall>
                  </Link>
                  <Link
                    className='flex hover:underline'
                    href='/cookies'
                  >
                    <TypographySmall>{t('Box3.link2')}</TypographySmall>
                  </Link>
                </div>
              </div>
              <div className='space-y-3'>
                <TypographyLarge>{t('Box5.title')}</TypographyLarge>
                <div className='flex flex-col gap-y-2'>
                  <Link
                    className='flex hover:underline'
                    href='https://www.moccaliving.com'
                    target='_blank'
                  >
                    <TypographySmall>Mocca Living</TypographySmall>
                  </Link>
                  <Link
                    className='flex hover:underline'
                    href='https://www.startpilates.gr'
                    target='_blank'
                  >
                    <TypographySmall>Start Pilates</TypographySmall>
                  </Link>
                </div>
              </div>
            </>
          )}
          <div className='flex flex-col gap-2 justify-between sm:flex-row sm:items-center sm:col-span-full'>
            <TypographySmall>
              Copyright &copy; {new Date().getFullYear()} Yuppii Luna Park
            </TypographySmall>
            <TypographySmall>Designed & Developed by CM</TypographySmall>
          </div>
        </article>
      </Container>
    </footer>
  )
}

Footer.displayName = 'Footer'

export {Footer}
