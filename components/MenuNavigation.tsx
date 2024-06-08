'use client'

import {Link, usePathname} from '@/navigation'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {TypographyP} from '@/components/typography/TypographyP'
import {cn} from '@/lib/utils'

type MenuNavigationProps = {
  links: {
    href: string, 
    label: string
    icon: React.ReactElement
  }[]
}

function MenuNavigation({links}: MenuNavigationProps) {
  const pathname = usePathname()

  return (
    <div className='px-4 mt-4'>
      <ScrollArea orientation='horizontal' invisible>
        <div className='flex gap-2 sm:justify-center'>
          {links.map(link => (
            <Link 
              key={link.href} 
              href={`/menu/${link.href}`}
              className={cn(
                'py-[5.5px] px-4 flex items-center gap-2 shrink-0 rounded duration-300',
                pathname.includes(link.href) && 'bg-accent text-accent-foreground'
              )}
            >
              {link.icon}
              <TypographyP className='font-bold mt-[5px]'>
                {link.label}
              </TypographyP>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export {MenuNavigation}