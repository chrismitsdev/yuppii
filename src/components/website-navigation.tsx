'use client'

import {
  ClipboardListIcon,
  FerrisWheelIcon,
  type LucideIcon,
  MailIcon,
  MenuIcon,
  RollerCoasterIcon,
  StoreIcon
} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {Fragment, useEffect, useState} from 'react'
import {
  FacebookIconButton,
  GoogleMapsIconButton,
  InstagramIconButton
} from '@/src/components/links'
import {Button} from '@/src/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
} from '@/src/components/ui/drawer'
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger
} from '@/src/components/ui/tooltip'
import {Link, usePathname} from '@/src/i18n/navigation'
import {LocaleCycle} from './locale-cycle'
import {IconButton} from './ui/icon-button'

const links = [
  {key: 'Home', href: '/', icon: StoreIcon},
  {key: 'Park', href: '/park', icon: FerrisWheelIcon},
  {key: 'Games', href: '/games', icon: RollerCoasterIcon},
  {key: 'Contact', href: '/contact', icon: MailIcon},
  {key: 'Menu', href: '/menu', icon: ClipboardListIcon}
] satisfies {
  key: keyof Messages['Metadata']['Pages']
  href: string
  icon: LucideIcon
}[]

function WebsiteNavigation() {
  return (
    <Fragment>
      <DesktopNavigation />
      <MobileNavigation />
    </Fragment>
  )
}

function DesktopNavigation() {
  const pathname = usePathname()
  const t = useTranslations()

  const renderedLinks = links.map(({key, href, icon: Icon}) => {
    const isActive =
      pathname === href || (href !== '/' && pathname.includes(href))

    return (
      <Tooltip key={key}>
        <TooltipTrigger asChild>
          <IconButton
            aria-label={`Navigate to ${key} page`}
            variant={isActive ? 'primary' : 'ghost'}
            asChild
          >
            <Link href={href}>
              <Icon />
            </Link>
          </IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>{t(`Metadata.Pages.${key}`)}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    )
  })

  return (
    <nav className='hidden space-x-2 col-start-3 self-center justify-self-end sm:block'>
      <TooltipProvider delayDuration={0}>
        {renderedLinks}
        <Tooltip>
          <TooltipTrigger asChild>
            <LocaleCycle />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent>{t('Components.LocaleCycle.label')}</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </nav>
  )
}

function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Metadata.Pages')

  const renderedLinks = links.map(({key, href, icon: Icon}) => {
    const isActive =
      pathname === href || (href !== '/' && pathname.includes(href))

    return (
      <Button
        key={key}
        variant={isActive ? 'primary' : 'ghost'}
        size='lg'
        asChild
      >
        <Link href={href}>
          <Icon />
          <span>{t(key)}</span>
        </Link>
      </Button>
    )
  })

  useEffect(() => {
    if (!pathname) return
    setOpen(false)
  }, [pathname])

  return (
    <div className='justify-self-end sm:hidden'>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        shouldScaleBackground
      >
        <DrawerTrigger asChild>
          <IconButton
            aria-label='Open drawer'
            variant='secondary'
          >
            <MenuIcon />
          </IconButton>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay />
          <DrawerContent className='h-4/5 rounded-t-lg'>
            <div className='p-8 h-full flex flex-col'>
              <DrawerHandle
                aria-hidden
                className='mb-10 w-1/3! bg-accent/50! shrink-0'
              />
              <DrawerTitle className='sr-only'>Menu</DrawerTitle>
              <div className='h-full flex flex-col gap-y-4'>
                {renderedLinks}
              </div>
              <div className='mx-auto space-x-4'>
                <FacebookIconButton />
                <InstagramIconButton />
                <GoogleMapsIconButton />
                <LocaleCycle />
              </div>
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  )
}

WebsiteNavigation.displayName = 'WebsiteNavigation'
DesktopNavigation.displayName = 'DesktopNavigation'
MobileNavigation.displayName = 'MobileNavigation'

export {WebsiteNavigation}
