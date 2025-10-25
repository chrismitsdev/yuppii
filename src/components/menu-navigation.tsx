'use client'

import * as React from 'react'
import {useSearchParams} from 'next/navigation'
import {type Messages, useTranslations, useLocale, useMessages} from 'next-intl'
import {HomeIcon} from 'lucide-react'
import {Link, usePathname} from '@/src/i18n/navigation'
import {cn, sourceQueryString} from '@/src/lib/utils'
import {ScrollArea} from '@/src/components/ui/scrollarea'

const MenuNavigation: React.FC = () => {
  const t = useTranslations('Menu')
  const locale = useLocale()
  const messages = useMessages()
  const pathname = usePathname()
  const isInternal = useSearchParams().get('src') === 'website'
  const queryString = isInternal ? sourceQueryString : ''
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return (
    <nav className='sticky top-0 z-10 overflow-x-hidden flex justify-center bg-primary border-b border-b-secondary/25'>
      <ScrollArea
        orientation='horizontal'
        invisible
        isFlex
      >
        <div className='px-1 flex items-center shrink-0'>
          {isInternal && (
            <MenuNavigationLink href='/'>
              <HomeIcon />
            </MenuNavigationLink>
          )}
          <MenuNavigationLink
            href={`/menu${queryString}`}
            isActive={pathname === '/menu'}
          >
            {locale === 'gr' ? 'Όλες οι κατηγορίες' : 'All categories'}
          </MenuNavigationLink>
          {categoryKeys.map(function (categoryKey) {
            return (
              <MenuNavigationLink
                key={categoryKey}
                href={`/menu/${categoryKey.toLowerCase()}${queryString}`}
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
  React.ComponentPropsWithRef<typeof Link> & {isActive?: boolean}
> = ({className, isActive, ...props}) => {
  return (
    <Link
      className={cn(
        'p-4 relative shrink-0 text-accent/30 duration-375 font-bold select-none after:h-1 after:absolute after:-bottom-1 after:inset-x-0 after:rounded-t-lg after:duration-375 sm:px-3',
        isActive && 'text-accent after:bg-secondary after:bottom-0',
        className
      )}
      {...props}
    />
  )
}

MenuNavigation.displayName = 'MenuNavigation'
MenuNavigationLink.displayName = 'MenuNavigationLink'

export {MenuNavigation}
