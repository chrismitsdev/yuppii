'use client'

import {Link, usePathname} from '@/navigation'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'
import {cn} from '@/lib/utils'

type MenuNavigationProps = {
  categories: {
    href: string, 
    label: string
    icon: React.ReactElement
  }[]
}

function MenuNavigation({categories}: MenuNavigationProps) {
  const pathname = usePathname()

  return (
    <div className='px-4 mt-4'>
      <ScrollArea orientation='horizontal' invisible>
        <div className='flex gap-2 sm:justify-center'>
          {categories.map(category => (
            <Link 
              key={category.href} 
              className={cn(
                'py-[5.5px] px-4 flex items-center gap-2 shrink-0 rounded duration-300',
                pathname.includes(category.href) && 'bg-accent text-accent-foreground'
              )}
              href={`/menu/${category.href}`}
            >
              {category.icon}
              <TypographyP className='font-bold mt-[5px]'>
                {category.label}
              </TypographyP>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export {MenuNavigation}