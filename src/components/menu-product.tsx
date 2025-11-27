import {Badge} from '@/src/components/ui/badge'
import {Typography} from '@/src/components/ui/typography'
import {formatCurrency} from '@/src/lib/utils'

interface MenuProductProps {
  name: string
  variants: string[] | null
  price: string
}

const MenuProduct: React.FC<MenuProductProps> = ({name, variants, price}) => {
  return (
    <li className='grid grid-cols-[1fr_auto] gap-1'>
      <Typography className='font-medium'>{name}</Typography>
      <Typography className='font-medium'>{formatCurrency(price)}</Typography>
      {variants && (
        <div className='flex flex-wrap items-center gap-1 col-span-full'>
          {variants.map((variant) => (
            <Badge
              key={variant}
              variant='secondary'
            >
              {variant}
            </Badge>
          ))}
        </div>
      )}
    </li>
  )
}

MenuProduct.displayName = 'MenuProduct'

export {MenuProduct}
