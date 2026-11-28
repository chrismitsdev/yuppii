'use client'

import {useLocale} from 'next-intl'
import {
  Scrollarea,
  ScrollareaBar,
  ScrollareaViewport
} from '@/src/components/ui/scrollarea'
import {Link, usePathname} from '@/src/i18n/navigation'
import {cn} from '@/src/lib/utils'

type MenuNavigationProps = {
  /** Menu categories with their names in the current locale. */
  categories: {id: string; name: string}[]
}

function MenuNavigation({categories}: MenuNavigationProps) {
  const locale = useLocale()
  const pathname = usePathname()

  const renderedLinks = categories.map((category) => {
    return (
      <MenuNavigationLink
        key={category.id}
        href={`/menu/${category.id}`}
        isActive={pathname.includes(category.id)}
      >
        {category.name}
      </MenuNavigationLink>
    )
  })

  return (
    <nav className='sticky top-0 z-10 overflow-x-hidden flex justify-center bg-background border-b border-b-primary'>
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
        isActive && 'text-accent after:bg-primary after:bottom-0',
        className
      )}
      {...props}
    />
  )
}

MenuNavigation.displayName = 'MenuNavigation'
MenuNavigationLink.displayName = 'MenuNavigationLink'

export {MenuNavigation}
