import {type Messages, useMessages} from 'next-intl'
import * as React from 'react'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {Card, CardContent, CardFooter} from '@/src/components/ui/card'
import {Separator} from '@/src/components/ui/separator'
import {Typography} from '@/src/components/ui/typography'

const CategoryProducts: React.FC<{categoryKey: keyof Messages['Menu']}> = ({
  categoryKey
}) => {
  const messages = useMessages()
  const category = messages.Menu[categoryKey]

  return (
    <Section className='first:pt-20 last:pb-20'>
      <Card className='relative'>
        <CardContent>
          <ul>
            {Object.values(category.products)
              .filter((product) => !product.disabled)
              .map((product, i, a) => (
                <React.Fragment key={product.name}>
                  <MenuProduct {...product} />
                  {i !== a.length - 1 && (
                    <Separator
                      className='my-6 bg-secondary/25'
                      decorative
                    />
                  )}
                </React.Fragment>
              ))}
          </ul>
        </CardContent>
        {category.notes && (
          <CardFooter className='pt-6 justify-start border-t border-dashed border-t-secondary'>
            <ul className='pl-3.5'>
              {category.notes.map((note) => (
                <li
                  key={note}
                  className='list-disc'
                >
                  <Typography variant='small'>{note}</Typography>
                </li>
              ))}
            </ul>
          </CardFooter>
        )}
      </Card>
    </Section>
  )
}

CategoryProducts.displayName = 'CategoryProducts'

export {CategoryProducts}
