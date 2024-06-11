'use client'

import {Link, usePathname} from '@/navigation'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'
import {cn} from '@/lib/utils'

function MenuNavigation({categories}: {categories: Category[]}) {
  const pathname = usePathname()

  return (
    <div className='px-1 mt-4'>
      <ScrollArea orientation='horizontal' invisible>
        <div className='flex gap-2 sm:justify-center'>
          {categories.map(category => (
            <Link 
              key={category.name} 
              href={`/menu/${category.name}`}
              className={cn(
                'py-[5.5px] px-4 flex items-center gap-2 shrink-0 rounded duration-300',
                pathname.includes(category.name) && 'bg-accent text-accent-foreground'
              )}
            >
              {category.categoryIcon}
              <TypographyP className='font-bold mt-[5px]'>
                {category.categoryName}
              </TypographyP>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export {MenuNavigation}