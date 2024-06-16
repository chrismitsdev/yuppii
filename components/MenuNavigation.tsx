'use client'

import * as React from 'react'
import {m, LazyMotion, domMax} from 'framer-motion'
import {Link, usePathname} from '@/navigation'
import {cn} from '@/lib/utils'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'
import {SquareMenu} from 'lucide-react'

type MenuNavigationProps = {
  locale: string
  categories: Category[]
}

function MenuNavigation({locale, categories}: MenuNavigationProps) {
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
        'py-4 px-1 max-w-[100vw] bg-[#cee9e7]',
        !rootPath && 'sticky top-0 z-10',
        (!rootPath && yPos > 72) && 'border-b border-b-border/25 shadow-md' 
      )}
    >
      <ScrollArea orientation='horizontal' invisible showShadows>
        <div className='flex gap-1 sm:justify-center'>
          <LazyMotion features={domMax}>
            <Link 
              href='/menu'
              className='py-[5.5px] px-4 relative flex items-center gap-2 shrink-0 text-primary'
              scroll={false}
            >
              {rootPath && (
                <m.div 
                  layoutId='active-link'
                  className='absolute inset-0 bg-accent' 
                  style={{borderRadius: 9999}}
                  transition={{
                    type: 'spring',
                    duration: 0.6,
                  }}
                />
              )}
              <span className='relative z-[1] mix-blend-difference'>
                <SquareMenu />
              </span>
              <TypographyP className='mt-[5px] relative font-semibold z-[1] mix-blend-difference'>
                {locale === 'gr' ? 'Όλες οι κατηγορίες' : 'All categories'}
              </TypographyP>
            </Link>
            {categories.map(category => (
              <Link 
                key={category.name} 
                href={`/menu/${category.name}`}
                className='py-[5.5px] px-4 relative flex items-center gap-2 shrink-0 text-primary'
                scroll={false}
              >
                {categoryPath === category.name && (
                  <m.div 
                    layoutId='active-link'
                    className='absolute inset-0 bg-accent' 
                    style={{borderRadius: 9999}}
                    transition={{
                      type: 'spring',
                      duration: 0.6,
                    }}
                  />
                )}
                <span className='relative z-[1] mix-blend-difference'>
                  {category.categoryIcon}
                </span>
                <TypographyP className='mt-[5px] relative font-semibold z-[1] mix-blend-difference'>
                  {category.categoryName}
                </TypographyP>
              </Link>
            ))}
          </LazyMotion>
        </div>
      </ScrollArea>
    </nav>
  )
}

export {MenuNavigation}