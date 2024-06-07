import * as React from 'react'
import {getTranslations} from 'next-intl/server'
import {Link} from '@/navigation'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'
import {getCategoryProductsPromise} from '@/lib/promises/getCategoryProductsPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Card, CardHeader, CardContent, CardFooter} from '@/components/ui/Card'
import {buttonVariants} from '@/components/ui/Button'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {Separator} from '@/components/ui/Separator'
import {formatCurrency} from '@/lib/utils'
import {Badge} from '@/components/ui/Badge'
import {ArrowLeft} from 'lucide-react'
import Messages from '@/messages/en.json'

export function generateStaticParams() {
  return Object.keys(Messages.Catalog).map(category => {
    return {
      category: category.toLowerCase()
    }
  })
}

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {translatedCategories} = await getMenuPromise(locale)
  const foundCategory = translatedCategories.find(({href}) => href === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.label} | Yuppii Luna Park`
  }
}

export default async function MenuItemsPage({params: {locale, category}}: MenuParams) {
  const {notes, tProducts} = await getCategoryProductsPromise(locale, category)

  return (
    <Container>
      <Section>
        <Card>
          <CardHeader className='px-4 sticky top-0 bg-[#DBBCC3] border-b border-b-secondary rounded-t-lg shadow-md'>
            <Link 
              href='/menu'
              className={
                buttonVariants({
                  variant: 'outline',
                })
              }
            >
              <ArrowLeft width={16} height={16} />
              <span>
                {locale === 'en' 
                  ? 'Back to categories' 
                  : 'Πισω στις κατηγοριες'
                }
              </span>
            </Link>
          </CardHeader>
          <CardContent className='py-6 px-4 space-y-6'>
            {tProducts.map((product, i, {length}) => (
              <React.Fragment key={product.name}>
                <div className='grid grid-cols-[1fr_auto] gap-1'>
                  <TypographyP className='font-semibold col-span-1'>
                    {product.name}
                  </TypographyP>
                  {product.description && (
                    <div className='flex flex-wrap gap-1.5 row-start-2 col-span-2'>
                      {product.description.map(desc => (
                        <Badge key={desc} variant='secondary' className='text-sm font-semibold'>
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
          {notes && (
            <CardFooter className='px-4 py-4 border-t border-t-secondary'>
              <ul className="list-disc pl-5">
                {notes.map(note => (
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