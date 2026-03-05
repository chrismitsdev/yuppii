'use client'

import {HomeIcon} from 'lucide-react'
import {useSearchParams} from 'next/navigation'
import {type Messages, useLocale, useMessages, useTranslations} from 'next-intl'
import {
  Scrollarea,
  ScrollareaBar,
  ScrollareaViewport
} from '@/src/components/ui/scrollarea'
import {Link, usePathname} from '@/src/i18n/navigation'
import {cn} from '@/src/lib/utils'

function MenuNavigation() {
  const t = useTranslations('Menu')
  const locale = useLocale()
  const messages = useMessages()
  const pathname = usePathname()
  const isInternal = useSearchParams().get('src') === 'website'
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return (
    <nav className='sticky top-0 z-10 overflow-x-hidden flex justify-center bg-primary border-b border-b-secondary/25'>
      <Scrollarea>
        <ScrollareaViewport>
          <div className='px-1 flex items-center shrink-0'>
            {isInternal && (
              <MenuNavigationLink href='/'>
                <HomeIcon />
              </MenuNavigationLink>
            )}
            <MenuNavigationLink
              href='/menu'
              isActive={pathname === '/menu'}
            >
              {locale === 'el' ? 'Όλες οι κατηγορίες' : 'All categories'}
            </MenuNavigationLink>
            {categoryKeys.map((categoryKey) => (
              <MenuNavigationLink
                key={categoryKey}
                href={`/menu/${categoryKey.toLowerCase()}`}
                isActive={pathname.includes(categoryKey.toLowerCase())}
              >
                {t(`${categoryKey}.name`)}
              </MenuNavigationLink>
            ))}
          </div>
        </ScrollareaViewport>
        <ScrollareaBar orientation='horizontal' />
      </Scrollarea>
    </nav>
  )
}

function MenuNavigationLink({
  className,
  isActive,
  ...props
}: React.ComponentPropsWithRef<typeof Link> & {isActive?: boolean}) {
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
