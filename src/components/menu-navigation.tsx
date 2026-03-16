'use client'

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
  const categories = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  const renderedLinks = categories.map((category) => {
    const path = category.toLowerCase()

    return (
      <MenuNavigationLink
        key={category}
        href={`/menu/${path}`}
        isActive={pathname.includes(path)}
      >
        {t(`${category}.name`)}
      </MenuNavigationLink>
    )
  })

  return (
    <nav className='sticky top-0 z-10 overflow-x-hidden flex justify-center bg-primary border-b border-b-secondary'>
      <Scrollarea>
        <ScrollareaViewport>
          <div className='px-1 w-max flex items-center'>
            <MenuNavigationLink
              href='/menu'
              isActive={pathname === '/menu'}
            >
              {locale === 'el' ? 'Όλες οι κατηγορίες' : 'All categories'}
            </MenuNavigationLink>
            {renderedLinks}
          </div>
        </ScrollareaViewport>
        <ScrollareaBar
          className='invisible'
          orientation='horizontal'
        />
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
        'shrink-0 p-3 relative text-accent/25 duration-375 font-bold select-none after:h-1 after:absolute after:inset-x-0 after:-bottom-1 after:rounded-t-lg after:duration-375',
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
