import {type Messages, useMessages, useTranslations} from 'next-intl'
import * as React from 'react'
import {MenuProduct} from '@/src/components/menu-product'
import {Section} from '@/src/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/src/components/ui/accordion'
import {Separator} from '@/src/components/ui/separator'
import {Typography} from '@/src/components/ui/typography'
import {categoryIcons} from '@/src/lib/utils'

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
        {categoryKeys.map((categoryKey) => {
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
                {messages.Menu[categoryKey].notes && (
                  <ul className='py-6 pr-6 pl-9.5 border-t border-dashed border-t-secondary'>
                    {messages.Menu[categoryKey].notes.map((note) => (
                      <li
                        key={note}
                        className='list-disc'
                      >
                        <Typography variant='small'>{note}</Typography>
                      </li>
                    ))}
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
