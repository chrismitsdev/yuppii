'use client'

import * as React from 'react'
import {Link, usePathname} from '@/navigation'
import {cn} from '@/lib/utils'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'

function MenuNavigation({categories}: {categories: Category[]}) {
  const [yPos, setYPos] = React.useState(0)
  const pathname = usePathname()
  const rootPath = pathname === '/menu'
  const categoryPath = pathname.split('/')[pathname.split('/').length - 1]

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
        'py-4 px-1 max-w-[100vw] sticky top-0 z-10 bg-primary border-b border-b-transparent duration-300',
        yPos > 72 && 'border-b-border/20 shadow-md'
      )}
    >
      <ScrollArea type='always' orientation='horizontal' invisible showShadows>
        <div className='flex gap-1 sm:justify-center'>
          {categories.map(category => (
            <Link 
              key={category.categoryName} 
              href={`/menu/${category.name}`}
              className={cn(
                'py-[5.5px] px-4 flex items-center gap-2 shrink-0 rounded',
                ((rootPath && !category.name) || categoryPath === category.name) && 'bg-accent text-accent-foreground'
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