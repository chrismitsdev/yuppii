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
  MapIcon
} from 'lucide-react'
import {Link, usePathname} from '@/src/i18n/navigation'
import {LocaleSwitcher} from '@/src/components/locale-switcher'
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
  icon: (props?: LucideProps) => React.ReactNode
}[] = [
  {
    key: 'Home',
    href: '/',
    icon: (p?: LucideProps) => <HomeIcon {...p} />
  },
  {
    key: 'Park',
    href: '/park',
    icon: (p?: LucideProps) => <FerrisWheelIcon {...p} />
  },
  {
    key: 'Services',
    href: '/services',
    icon: (p?: LucideProps) => <ListChecksIcon {...p} />
  },
  {
    key: 'Contact',
    href: '/contact',
    icon: (p?: LucideProps) => <MailIcon {...p} />
  }
]

const WebsiteNavigation: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const t = useTranslations('Metadata.Pages')
  const locale = useLocale()
  const pathname = usePathname()

  React.useEffect(
    function () {
      if (drawerOpen) setDrawerOpen(false)
    },
    [pathname]
  )

  return (
    <React.Fragment>
      <nav className='hidden items-center gap-x-2 sm:flex'>
        <TooltipProvider delayDuration={0}>
          {links.map(function (link) {
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
                    <Link href={link.href}>{link.icon()}</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent>{t(link.key)}</TooltipContent>
                </TooltipPortal>
              </Tooltip>
            )
          })}
        </TooltipProvider>
        <Separator orientation='vertical' />
        <LocaleSwitcher />
      </nav>

      <div className='flex items-center sm:hidden'>
        <LocaleSwitcher />
        <Separator
          className='mr-0 ml-4'
          orientation='vertical'
        />

        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          shouldScaleBackground
        >
          <DrawerTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
            >
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent className='h-2/3 rounded-t-lg'>
              <div className='p-8 h-full flex flex-col'>
                <DrawerHandle className='mb-10 !w-1/3 !bg-accent/50' />

                <VisuallyHidden>
                  <DrawerTitle>Menu</DrawerTitle>
                </VisuallyHidden>

                <div className='flex flex-col gap-y-4 flex-1'>
                  {links.map(function (link) {
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
                          {link.icon({size: 20})}
                          <Typography locale={locale}>{t(link.key)}</Typography>
                        </Link>
                      </Button>
                    )
                  })}
                </div>
                <div className='space-x-4 flex justify-center'>
                  <Button
                    variant='ghost-accent'
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
                    variant='ghost-accent'
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
                    variant='ghost-accent'
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
      </div>
    </React.Fragment>
  )
}

WebsiteNavigation.displayName = 'WebsiteNavigation'

export {WebsiteNavigation}
