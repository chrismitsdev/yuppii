'use client'

import * as React from 'react'
import {Link, usePathname} from '@/navigation'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {cn} from '@/lib/utils'

function MenuNavigation({categories}: {categories: Category[]}) {
  const pathname = usePathname()
  const rootPath = pathname === '/menu'
  const categoryPath = pathname.split('/')[pathname.split('/').length - 1]
  const isActive = (str: string) => ((rootPath && !str) || categoryPath === str)

  return (
    <nav className='sticky top-0 z-10 w-screen flex justify-center bg-primary shadow-menu-nav'>
      <ScrollArea orientation='horizontal' invisible isFlex>
        <div className='px-1 flex items-center shrink-0'>
          {categories.map(category => (
            <Link 
              key={category.categoryName} 
              href={`/menu/${category.name}`}
              className={cn(
                'py-4 px-3 relative flex-shrink-0 font-semibold select-none after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-transparent',
                isActive(category.name) && 'after:bg-secondary'
              )}
            >
              {category.categoryName}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </nav>
  )
}

export {MenuNavigation}