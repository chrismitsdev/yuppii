import {type Messages, useMessages} from 'next-intl'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {Card, CardBody} from '@/src/components/ui/card'
import {Typography} from '@/src/components/ui/typography'

function CategoryProducts({
  categoryKey
}: {
  categoryKey: keyof Messages['Menu']
}) {
  const messages = useMessages()
  const category = messages.Menu[categoryKey]

  const renderedProducts = Object.values(category.products).map((product) => {
    return (
      <MenuProduct
        key={product.name}
        {...product}
      />
    )
  })

  const renderedNotes = category.notes?.map((note) => {
    return (
      <Typography
        key={note}
        className='list-item'
        variant='small'
        asChild
      >
        <li>{note}</li>
      </Typography>
    )
  })

  return (
    <Section className='first:pt-20 last:pb-20'>
      <Card>
        <CardBody>
          <ul>{renderedProducts}</ul>
          {renderedNotes && (
            <ul className='list-inside list-disc'>{renderedNotes}</ul>
          )}
        </CardBody>
      </Card>
    </Section>
  )
}

CategoryProducts.displayName = 'CategoryProducts'

export {CategoryProducts}
