import * as React from 'react'
import {type Messages, useTranslations, useMessages} from 'next-intl'
import {categoryIcons} from '@/src/lib/utils'
import {Section} from '@/src/components/section'
import {MenuProduct} from '@/src/components/menu-product'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/src/components/ui/accordion'
import {Typography} from '@/src/components/ui/typography'
import {Separator} from '@/src/components/ui/separator'

const MenuCategories: React.FC = () => {
  const t = useTranslations('Menu')
  const messages = useMessages()
  const categoryKeys = Object.keys(messages.Menu) as (keyof Messages['Menu'])[]

  return (
    <Section className='first:pt-20 last:pb-20'>
      <Accordion
        className='space-y-6'
        type='multiple'
      >
        {categoryKeys.map(function (categoryKey) {
          const Icon = categoryIcons[categoryKey]

          return (
            <AccordionItem
              key={categoryKey}
              value={categoryKey}
            >
              <AccordionTrigger>
                {Icon && <Icon aria-hidden={true} />}
                <Typography
                  className='mt-1.5 leading-6'
                  variant='lead'
                >
                  {t(`${categoryKey}.name`)}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className='p-0 border-t border-dashed border-t-secondary'>
                <ul className='p-6'>
                  {Object.values(messages.Menu[categoryKey].products)
                    .filter(function (product) {
                      return !product.disabled
                    })
                    .map(function (product, i, a) {
                      return (
                        <React.Fragment key={product.name}>
                          <MenuProduct {...product} />
                          {i !== a.length - 1 && (
                            <Separator
                              className='my-6 bg-secondary/25'
                              decorative
                            />
                          )}
                        </React.Fragment>
                      )
                    })}
                </ul>
                {messages.Menu[categoryKey].notes && (
                  <ul className='py-6 pr-6 pl-9.5 border-t border-dashed border-t-secondary'>
                    {messages.Menu[categoryKey].notes.map(function (note) {
                      return (
                        <li
                          key={note}
                          className='list-disc'
                        >
                          <Typography variant='small'>{note}</Typography>
                        </li>
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
