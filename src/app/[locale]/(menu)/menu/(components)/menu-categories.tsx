import {getMenu} from '@chrismitsdev/menu-data'
import {useLocale} from 'next-intl'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/src/components/ui/accordion'
import {Typography} from '@/src/components/ui/typography'
import {getCategoryIcon} from '@/src/lib/utils'

function MenuCategories() {
  const locale = useLocale()
  const categories = getMenu('yuppii')

  return (
    <Section className='first:pt-20 last:pb-20'>
      <Accordion
        className='space-y-6'
        type='multiple'
      >
        {categories.map((category) => {
          const notes = category.notes?.[locale]
          const Icon = getCategoryIcon(category.id)

          return (
            <AccordionItem
              key={category.id}
              value={category.id}
            >
              <AccordionTrigger>
                <Icon />
                <Typography variant='lead'>{category.name[locale]}</Typography>
              </AccordionTrigger>
              <AccordionContent className='space-y-4 sm:pl-16'>
                <ul>
                  {category.products.map((product) => {
                    return (
                      <MenuProduct
                        key={product.id}
                        name={product.name[locale]}
                        variants={product.variants?.[locale]}
                        price={product.price}
                      />
                    )
                  })}
                </ul>
                {notes && (
                  <ul className='list-inside list-disc'>
                    {notes.map((note) => {
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
                    })}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Section>
  )
}

MenuCategories.displayName = 'MenuCategories'

export {MenuCategories}
