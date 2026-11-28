import type {Category} from '@chrismitsdev/menu-data'
import {useLocale} from 'next-intl'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {Card, CardBody} from '@/src/components/ui/card'
import {Typography} from '@/src/components/ui/typography'

function CategoryProducts({category}: {category: Category}) {
  const locale = useLocale()

  const renderedProducts = category.products.map((product) => {
    return (
      <MenuProduct
        key={product.id}
        name={product.name[locale]}
        variants={product.variants?.[locale]}
        price={product.price}
      />
    )
  })

  const renderedNotes = category.notes?.[locale].map((note) => {
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
