'use client'

import * as React from 'react'
import {type Messages, useTranslations, useLocale, useMessages} from 'next-intl'
import {Link, usePathname} from '@/src/i18n/navigation'
import {cn} from '@/src/lib/utils'
import {ScrollArea} from '@/src/components/ui/scrollarea'

const MenuNavigation: React.FC = () => {
  const t = useTranslations('Menu')
  const locale = useLocale()
  const messages = useMessages()
  const pathname = usePathname()
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return (
    <nav className='sticky top-0 z-10 overflow-x-hidden flex justify-center bg-primary border-b border-b-secondary/40'>
      <ScrollArea
        orientation='horizontal'
        invisible
        isFlex
      >
        <div className='px-1 flex items-center shrink-0'>
          <MenuNavigationLink
            href='/menu'
            isActive={pathname === '/menu'}
          >
            {locale === 'gr' ? 'Όλες οι κατηγορίες' : 'All categories'}
          </MenuNavigationLink>
          {categoryKeys.map(function (categoryKey) {
            return (
              <MenuNavigationLink
                key={categoryKey}
                href={`/menu/${categoryKey.toLowerCase()}`}
                isActive={pathname.includes(categoryKey.toLowerCase())}
              >
                {t(`${categoryKey}.name`)}
              </MenuNavigationLink>
            )
          })}
        </div>
      </ScrollArea>
    </nav>
  )
}

const MenuNavigationLink: React.FC<
  React.ComponentPropsWithRef<typeof Link> & {isActive: boolean}
> = ({className, isActive, ...props}) => {
  return (
    <Link
      className={cn(
        'p-4 relative flex-shrink-0 text-accent/50 duration-200 font-bold select-none after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:rounded-t-lg after:duration-200 sm:px-3',
        isActive && 'after:bg-secondary text-accent after:bottom-0',
        className
      )}
      {...props}
    />
  )
}

MenuNavigation.displayName = 'MenuNavigation'
MenuNavigationLink.displayName = 'MenuNavigationLink'

export {MenuNavigation}
