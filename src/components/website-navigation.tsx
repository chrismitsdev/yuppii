'use client'

import * as React from 'react'
import {type Messages, useTranslations, useLocale} from 'next-intl'
import {
  type LucideProps,
  HomeIcon,
  FerrisWheelIcon,
  ListChecksIcon,
  MailIcon,
  MenuIcon,
  FacebookIcon,
  InstagramIcon,
  MapIcon,
  ClipboardListIcon
} from 'lucide-react'
import {Link, usePathname} from '@/src/i18n/navigation'
import {sourceQueryString} from 'src/lib/utils'
import {SuspenseLocaleSwitcher} from '@/src/components/suspense-locale-switcher'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent
} from '@/src/components/ui/tooltip'
import {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerHandle
} from '@/src/components/ui/drawer'
import {Button} from '@/src/components/ui/button'
import {Typography} from '@/src/components/ui/typography'
import {Separator} from '@/src/components/ui/separator'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'

const links: {
  key: keyof Messages['Metadata']['Pages']
  href: string
  icon: React.ComponentType<LucideProps>
}[] = [
  {
    key: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    key: 'Park',
    href: '/park',
    icon: FerrisWheelIcon
  },
  {
    key: 'Services',
    href: '/services',
    icon: ListChecksIcon
  },
  {
    key: 'Contact',
    href: '/contact',
    icon: MailIcon
  }
]

const WebsiteNavigation: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const t = useTranslations('Metadata.Pages')
  const locale = useLocale()
  const pathname = usePathname()

  React.useEffect(
    function () {
      setDrawerOpen(false)
    },
    [pathname]
  )

  return (
    <React.Fragment>
      <nav className='hidden items-center gap-x-2 sm:flex'>
        <TooltipProvider delayDuration={0}>
          {links.map(function ({icon: Icon, ...link}) {
            return (
              <Tooltip key={link.key}>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      pathname === link.href ? 'accent' : 'ghost-secondary'
                    }
                    size='icon'
                    asChild
                  >
                    <Link href={link.href}>
                      <Icon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent>{t(link.key)}</TooltipContent>
                </TooltipPortal>
              </Tooltip>
            )
          })}
          <Separator orientation='vertical' />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost-secondary'
                size='icon'
                asChild
              >
                <Link href={`/menu${sourceQueryString}`}>
                  <ClipboardListIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent>{t('Menu')}</TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
        <SuspenseLocaleSwitcher />
      </nav>

      <div className='flex items-center sm:hidden'>
        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          shouldScaleBackground
        >
          <DrawerTrigger asChild>
            <Button
              variant='accent'
              size='icon'
            >
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent className='h-[calc(100%-88px)] rounded-t-lg'>
              <div className='p-8 h-full flex flex-col'>
                <DrawerHandle
                  aria-hidden
                  className='mb-10 w-1/3! bg-accent/50! shrink-0'
                />

                <VisuallyHidden>
                  <DrawerTitle>Menu</DrawerTitle>
                </VisuallyHidden>

                <div className='flex flex-col gap-y-4 flex-1'>
                  {links.map(function ({icon: Icon, ...link}) {
                    return (
                      <Button
                        variant={
                          pathname === link.href ? 'accent' : 'ghost-secondary'
                        }
                        size='lg'
                        key={link.key}
                        asChild
                      >
                        <Link href={link.href}>
                          <Icon size={20} />
                          <Typography locale={locale}>{t(link.key)}</Typography>
                        </Link>
                      </Button>
                    )
                  })}
                </div>
                <div className='mx-auto space-x-4'>
                  <Button
                    variant='accent'
                    size='icon'
                    asChild
                  >
                    <Link href={`/menu${sourceQueryString}`}>
                      <ClipboardListIcon />
                    </Link>
                  </Button>
                  <Button
                    variant='accent'
                    size='icon'
                    asChild
                  >
                    <a
                      href='https://www.facebook.com/yuppii.gr'
                      target='_blank'
                    >
                      <FacebookIcon />
                    </a>
                  </Button>
                  <Button
                    variant='accent'
                    size='icon'
                    asChild
                  >
                    <a
                      href='https://www.instagram.com/yuppiilunapark/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                  </Button>
                  <Button
                    variant='accent'
                    size='icon'
                    asChild
                  >
                    <a
                      href='https://goo.gl/maps/vWBvWk3Tvcw5XkF87'
                      target='_blank'
                    >
                      <MapIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
        <Separator
          className='mx-3'
          orientation='vertical'
        />
        <SuspenseLocaleSwitcher />
      </div>
    </React.Fragment>
  )
}

WebsiteNavigation.displayName = 'WebsiteNavigation'

export {WebsiteNavigation}
