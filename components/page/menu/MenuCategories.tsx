import {Link} from '@/navigation'
import {TypographyLarge} from '@/components/typography/TypographyLarge'

function MenuCategories({categories}: {
  categories: {
    href: string, 
    label: string
    icon: React.ReactElement
  }[]
}) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {categories.map(category => (
        <Link 
          key={category.href}
          href={`/menu/${category.href}`}
          className='p-2 bg-secondary/50 text-secondary-foreground border border-secondary rounded-lg active:scale-[0.99] duration-75'
        >
          <div className='flex flex-col items-center gap-2'>
            {category.icon}
            <TypographyLarge>{category.label}</TypographyLarge>
          </div>
        </Link>
      ))}
    </div>
  )
}

MenuCategories.displayName = 'MenuCategories'

export {MenuCategories}