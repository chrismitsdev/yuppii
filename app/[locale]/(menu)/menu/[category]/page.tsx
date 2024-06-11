import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import {getAllProductsPromise} from '@/lib/promises/getAllProductsPromise'
import {formatCurrency} from '@/lib/utils'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Card, CardContent, CardFooter} from '@/components/ui/Card'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {Separator} from '@/components/ui/Separator'
import {Badge} from '@/components/ui/Badge'

export async function generateStaticParams({params: {locale}}: Params) {
  const {tMenu} = await getAllProductsPromise(locale)
  return tMenu.map(({name}) => ({category: name}))
}

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {tMenu} = await getAllProductsPromise(locale)
  const foundCategory = tMenu.find(({name}) => name === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.categoryName} | Yuppii Luna Park`
  }
}

export default async function CategoryPage({params: {locale, category}}: MenuParams) {
  const {tMenu} = await getAllProductsPromise(locale)
  const filteredCategory = tMenu?.find(ctg => ctg.name === category)

  return (
    <Container>
      <Section>
        <Card>
          <CardContent className='py-6 px-4 space-y-6'>
            {filteredCategory?.categoryProducts.map((product, i, {length}) => (
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
          {filteredCategory?.categoryNotes && (
            <CardFooter className='px-4 py-4 border-t border-t-secondary'>
              <ul className="list-disc pl-5">
                {filteredCategory.categoryNotes.map(note => (
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
      </Section>
    </Container>
  )
}