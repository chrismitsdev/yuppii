import * as React from 'react'
import {formatCurrency} from '@/lib/utils'
import {Card, CardContent, CardFooter} from '@/components/ui/Card'
import {Badge} from '@/components/ui/Badge'
import {Separator} from '@/components/ui/Separator'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'

function CategoryCard({category}: {category: Category}) {
  return (
    <Card>
      <CardContent className='py-6 px-4 space-y-6'>
        {category?.categoryProducts.map((product, i, {length}) => (
          <React.Fragment key={product.name}>
            <div className='grid grid-cols-[1fr_auto] gap-1'>
              <TypographyP className='font-semibold col-span-1'>
                {product.name}
              </TypographyP>
              {product.description && (
                <div className='flex flex-wrap gap-1.5 row-start-2 col-span-2'>
                  {product.description.map(desc => (
                    <Badge 
                      key={desc} 
                      variant='secondary' 
                      className='text-sm font-semibold'
                    >
                      {desc}
                    </Badge>
                  ))}
                </div>
              )}
              <TypographyP className='font-semibold col-start-2'>
                {formatCurrency(product.price)}
              </TypographyP>
            </div>

            {i !== length - 1 && <Separator className='bg-secondary/40 col-span-2' />}
          </React.Fragment>
        ))}
      </CardContent>
      {category?.categoryNotes && (
        <CardFooter className='px-4 py-4 border-t border-t-secondary'>
          <ul className="list-disc pl-5">
            {category.categoryNotes.map(note => (
              <li key={note}>
                <TypographySmall className='font-semibold'>
                  {note}
                </TypographySmall>
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  )
}

CategoryCard.displayName = 'CategoryCard'

export {CategoryCard}