import {Badge} from '@/src/components/ui/badge'
import {Typography} from '@/src/components/ui/typography'
import {formatCurrency} from '@/src/lib/utils'

interface MenuProductProps {
  name: string
  variants: string[] | null
  price: string
}

function MenuProduct({name, variants, price}: MenuProductProps) {
  return (
    <li className='py-4 grid grid-cols-[auto_1fr_auto] items-baseline gap-2'>
      <Typography variant='small'>{name}</Typography>
      <span className='border-b border-dotted' />
      <Typography variant='small'>{formatCurrency(price)}</Typography>
      {variants && variants.length > 0 && (
        <div className='col-span-full flex flex-wrap items-center gap-1'>
          {variants.map((variant) => (
            <Badge key={variant}>{variant}</Badge>
          ))}
        </div>
      )}
    </li>
  )
}

MenuProduct.displayName = 'MenuProduct'

export {MenuProduct}
