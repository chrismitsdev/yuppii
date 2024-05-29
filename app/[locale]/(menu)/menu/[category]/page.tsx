import {getTranslations} from 'next-intl/server'
import {Link} from '@/navigation'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'
import {getMenuItemsPromise} from '@/lib/promises/getMenuItemsPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Card, CardHeader, CardContent} from '@/components/ui/Card'
import {buttonVariants} from '@/components/ui/Button'
import {TypographyP} from '@/components/typography/TypographyP'
import {Separator} from '@/components/ui/Separator'
import {formatCurrency} from '@/lib/utils'
import {Badge} from '@/components/ui/Badge'
import {ArrowLeft} from 'lucide-react'
import {uniqueCategories} from '@/lib/utils'
import React from 'react'

export function generateStaticParams() {
  return uniqueCategories.map(category => ({category}))
}

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {translatedCategories} = await getMenuPromise(locale)
  const foundCategory = translatedCategories.find(({href}) => href.toLowerCase() === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.label} | Yuppii Luna Park`
  }
}

export default async function MenuItemsPage({params: {locale, category}}: MenuParams) {
  const {translatedMenu} = await getMenuItemsPromise(locale, category)

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
                  size: 'sm'
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
          <CardContent className='py-6 px-4'>
            <div className='grid grid-cols-[1fr_auto] gap-y-2'>
              {translatedMenu.map((product, i, {length}) => (
                <React.Fragment key={product.name}>
                  <div>
                    <TypographyP className='font-semibold'>{product.name}</TypographyP>
                    {product.description && (
                      <div className='flex flex-wrap gap-1 mt-0.5'>
                        {product.description.map(desc => (
                          <Badge key={desc} variant='secondary'>
                            {desc}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <TypographyP className='font-semibold'>
                      {formatCurrency(product.price)}
                    </TypographyP>
                  </div>
                  {i !== length - 1 && <Separator className='bg-secondary/40 col-span-2' />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>
    </Container>
  )
}