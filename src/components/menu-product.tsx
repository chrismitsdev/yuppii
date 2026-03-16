import {useFormatter} from 'next-intl'
import {Badge} from '@/src/components/ui/badge'
import {Typography} from '@/src/components/ui/typography'

interface MenuProductProps {
  name: string
  variants: string[] | null
  price: string
}

function MenuProduct({name, variants, price}: MenuProductProps) {
  const format = useFormatter()

  const renderedVariants = variants?.map((variant) => {
    return <Badge key={variant}>{variant}</Badge>
  })

  return (
    <li className='py-4 grid grid-cols-[auto_1fr_auto] items-baseline gap-2'>
      <Typography>{name}</Typography>
      <span className='border-b border-dotted' />
      <Typography>
        {format.number(Number.parseFloat(price), {
          style: 'currency',
          currency: 'EUR'
        })}
      </Typography>
      {renderedVariants && renderedVariants.length > 0 && (
        <div className='col-span-full flex flex-wrap items-center gap-1'>
          {renderedVariants}
        </div>
      )}
    </li>
  )
}

MenuProduct.displayName = 'MenuProduct'

export {MenuProduct}
