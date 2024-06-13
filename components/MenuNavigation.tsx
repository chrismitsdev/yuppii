'use client'

import * as React from 'react'
import {Link, usePathname} from '@/navigation'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'
import {cn} from '@/lib/utils'

function MenuNavigation({categories}: {categories: Category[]}) {
  const [yPos, setYPos] = React.useState(0)
  const pathname = usePathname()
  const rootMenu = pathname === '/menu'

  React.useEffect(
    function() {
      if (typeof window === 'undefined') return
      setYPos(window.scrollY)
      
      function handleScroll() {
        setYPos(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, 
    []
  )

  return (
    <nav 
      className={cn(
        'py-4 px-1 max-w-[100vw] bg-[#cee9e7]',
        !rootMenu && 'sticky top-0 z-10',
        (!rootMenu && yPos > 72) && 'border-b border-b-border/25 shadow-md' 
      )}
    >
      <ScrollArea orientation='horizontal' invisible showShadows>
        <div className='flex gap-1 sm:justify-center'>
          {categories.map(category => (
            <Link 
              key={category.name} 
              href={`/menu/${category.name}`}
              className={cn(
                'py-[5.5px] px-4 flex items-center gap-2 shrink-0 rounded duration-300',
                pathname.includes(category.name) && 'bg-accent text-accent-foreground'
              )}
              scroll={false}
            >
              {category.categoryIcon}
              <TypographyP className='mt-[5px] font-bold'>
                {category.categoryName}
              </TypographyP>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}

export {MenuNavigation}