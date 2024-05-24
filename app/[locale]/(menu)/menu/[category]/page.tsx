import {getTranslations} from 'next-intl/server'
import {Link} from '@/navigation'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'
import {getMenuItemsPromise} from '@/lib/promises/getMenuItemsPromise'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/Card'
import {buttonVariants} from '@/components/ui/Button'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {formatCurrency} from '@/lib/utils'
import {ArrowLeft} from 'lucide-react'

export async function generateMetadata({params: {locale, category}}: MenuParams) {
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})
  const {translatedCategories} = await getMenuPromise(locale)
  const foundCategory = translatedCategories.find(({href}) => href.toLowerCase() === category)
 
  return {
    title: `${t('Menu')} - ${foundCategory?.label} | Yuppii Luna Park`
  }
}

export default async function MenuItemsPage({params: {locale, category}}: MenuParams) {
  const {translatedCategories} = await getMenuPromise(locale)
  const {translatedMenu} = await getMenuItemsPromise(locale, category)
  const foundCategory = translatedCategories.find(({href}) => href.toLowerCase() === category)

  return (
    <Container>
      <Section>
        <Card>
          <CardHeader className='flex-row items-center justify-between space-y-0'>
            <Link 
              href='/menu'
              className={
                buttonVariants({
                  variant: 'outline',
                  size: 'icon'
                })
              }
            >
              <ArrowLeft />
            </Link>
            <CardTitle>{foundCategory?.label}</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            {translatedMenu.map(product => (
              <div 
                key={product.name} 
                className='flex items-center justify-between'
              >
                <TypographyP>{product.name}</TypographyP>
                <TypographySmall className='font-semibold'>
                  {formatCurrency(product.price)}
                </TypographySmall>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>
    </Container>
  )
}