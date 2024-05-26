'use client'

import * as React from 'react'
import {Link, usePathname} from '@/navigation'
import {
  TooltipProvider,
  Tooltip, 
  TooltipTrigger, 
  TooltipPortal, 
  TooltipContent
} from '@/components/ui/Tooltip'
import {Drawer, DrawerTrigger, DrawerContent} from '@/components/ui/Drawer'
import {buttonVariants} from '@/components/ui/Button'
import {LocaleSwitcher} from '@/components/LocaleSwitcher'
import {Menu} from 'lucide-react'
import {isActive} from '@/lib/utils'
import {Facebook, Instagram, Map} from 'lucide-react'

interface NavigationProps {
  links: HeaderLink[]
  locale: string
  localeContent: string
}

const Navigation = ({links, locale, localeContent}: NavigationProps) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const pathname = usePathname()

  return (
    <React.Fragment>
      <nav className='hidden items-center gap-x-4 sm:flex'>
        <TooltipProvider delayDuration={0}>
          {links.map((link, index) => {
            const active = isActive(index, pathname, link.href)

            return (
              <Tooltip key={link.label}>
                <TooltipTrigger>
                  <Link 
                    className={
                      buttonVariants({
                        variant: active ? 'accent' : 'ghost-secondary',
                        size: 'icon', 
                      })
                    } 
                    href={link.href}
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent side='bottom'>
                    {link.label}
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            )
          })}
          <LocaleSwitcher 
            locale={locale} 
            tooltipContent={localeContent} 
          />
        </TooltipProvider>
      </nav>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger 
          className={buttonVariants({
            variant: 'primary', 
            size: 'icon', 
            className: 'flex sm:hidden data-open:opacity-0 transition-opacity'
          })}>
          <Menu strokeWidth={2.5} />
        </DrawerTrigger>
        <DrawerContent className='p-4 h-[calc(100%-72px)] mt-[72px]'>
          <div className='mx-auto w-16 h-1 flex-shrink-0 rounded-full bg-accent/50 mb-8' />
          <nav className='flex flex-col gap-y-3 flex-1'>
            {links.map((link, index) => {
              const active = isActive(index, pathname, link.href)

              return (
                <Link 
                  key={link.label} 
                  className={buttonVariants({variant: active ? 'accent' : 'ghost-accent', size: 'lg'})} 
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                  <span className='leading-4'>
                    {locale === 'gr' ? link.label.toLocaleUpperCase('el-GR') : link.label}
                  </span> 
                </Link>
              )
            })}
          </nav>
          <div className='flex justify-between'>
            <div className='space-x-3'>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'accent'})}
                href='https://www.facebook.com/yuppii.gr'
                target='_blank'
              >
                <Facebook />
              </Link>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'accent'})}
                href='https://www.instagram.com/yuppiilunapark/'
                target='_blank'
              >
                <Instagram />
              </Link>
              <Link 
                className={buttonVariants({size: 'icon', variant: 'accent'})}
                href='https://goo.gl/maps/vWBvWk3Tvcw5XkF87'
                target='_blank'
              >
                <Map />
              </Link>
            </div>
            <LocaleSwitcher locale={locale} type='mobile' />
          </div>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}

Navigation.displayName = 'Navigation'

export {Navigation}