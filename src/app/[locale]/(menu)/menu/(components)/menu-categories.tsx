import {type Messages, useMessages, useTranslations} from 'next-intl'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/src/components/ui/accordion'
import {Typography} from '@/src/components/ui/typography'
import {categoryIcons} from '@/src/lib/utils'

function MenuCategories() {
  const t = useTranslations('Menu')
  const messages = useMessages()
  const menuKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return (
    <Section className='first:pt-20 last:pb-20'>
      <Accordion
        className='space-y-6'
        type='multiple'
      >
        {menuKeys.map((categoryKey) => {
          const products = Object.values(messages.Menu[categoryKey].products)
          const notes = messages.Menu[categoryKey].notes
          const Icon = categoryIcons[categoryKey]

          return (
            <AccordionItem
              key={categoryKey}
              value={categoryKey}
            >
              <AccordionTrigger>
                <Icon />
                <Typography variant='lead'>
                  {t(`${categoryKey}.name`)}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className='space-y-4 sm:pl-16'>
                <ul>
                  {products
                    .filter((product) => !product.disabled)
                    .map((product) => {
                      return (
                        <MenuProduct
                          key={product.name}
                          {...product}
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
