import {Link} from '@/navigation'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {ArrowRight} from 'lucide-react'

function MenuCategories({categories}: {
  categories: {
    href: string, 
    label: string
    icon: React.ReactElement
  }[]
}) {
  return (
    <div className='flex flex-col gap-4'>
      {categories.map(category => (
        <Link 
          key={category.href}
          href={`/menu/${category.href}`}
          className='bg-secondary/50 text-secondary-foreground border border-secondary rounded-lg flex justify-between items-center py-3 px-6 active:scale-[0.99] duration-75'
        >
          <div className='flex flex-col gap-2'>
            {category.icon}
            <TypographyLarge>{category.label}</TypographyLarge>
          </div>
          <ArrowRight />
        </Link>
      ))}
    </div>
  )
}

MenuCategories.displayName = 'MenuCategories'

export {MenuCategories}