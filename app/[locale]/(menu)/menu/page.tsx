import * as  React from 'react'
import {getTranslations} from 'next-intl/server'
import {Container} from '@/components/Container'
import {Card, CardHeader, CardContent, CardFooter, CardTitle} from '@/components/ui/Card'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {Badge} from '@/components/ui/Badge'
import {Separator} from '@/components/ui/Separator'
import {Section} from '@/components/Section'
import {Menu} from '@/components/page/menu/Menu'
import {formatCurrency} from '@/lib/utils'
import {getAllProductsPromise} from '@/lib/promises/getAllProductsPromise'

export async function generateMetadata({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
 
  return {
    title: `${t('Menu')} | Yuppii Luna Park`,
    openGraph: {
      title: locale === 'en' ? 'Yuppii Menu' : 'Yuppii Μενού',
      description: locale === 'en' 
        ? 'Discover our comprehensive menu of beverages, drinks, and food' 
        : 'Ανακαλύψτε το ολοκληρωμένο μενού μας με ποτά, αναψυκτικά και φαγητό'
    },
  }
}

export default async function MenuPage({params: {locale}}: Params) {
  const {tMenu} = await getAllProductsPromise(locale)

  return (
    <Container>
      <Section className='space-y-6'>
        {tMenu.map(category => (
          <Card key={category.name}>
            <CardHeader className='px-4 sticky top-0 bg-[#DBBCC3] border-b border-b-secondary shadow-md rounded-t-lg'>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent className='py-6 px-4 space-y-6'>
              {category.products.map((entry, i, {length}) => (
                <React.Fragment key={entry.name}>
                  <div className='grid grid-cols-[1fr_auto] gap-1'>
                    <TypographyP className='font-semibold col-span-1'>
                      {entry.name}
                    </TypographyP>
                    {entry.description && (
                      <div className='flex flex-wrap gap-1.5 row-start-2 col-span-2'>
                        {entry.description.map(desc => (
                          <Badge key={desc} variant='secondary' className='text-sm font-semibold'>
                            {desc}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <TypographyP className='font-semibold col-start-2'>
                      {formatCurrency(entry.price)}
                    </TypographyP>
                  </div>

                  {i !== length - 1 && <Separator className='bg-secondary/20 col-span-2' />}
                </React.Fragment>
              ))}
            </CardContent>
            {category.notes && (
              <CardFooter className='px-4 py-4 border-t border-t-secondary'>
                <ul className='pl-5 list-disc'>
                  {category.notes.map(note => (
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
        ))}
        <Menu />
      </Section>
    </Container>
  )
}