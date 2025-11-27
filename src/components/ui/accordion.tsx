'use client'

import {Content, Header, Item, Root, Trigger} from '@radix-ui/react-accordion'
import {ChevronDownIcon, ChevronUpIcon} from 'lucide-react'
import type * as React from 'react'
import {cn} from '@/src/lib/utils'

const Accordion = Root

const AccordionItem: React.FC<React.ComponentPropsWithRef<typeof Item>> = ({
  className,
  ...props
}) => {
  return (
    <Item
      className={cn(
        'overflow-hidden bg-secondary/50 border border-secondary rounded-lg shadow-md transition',
        className
      )}
      {...props}
    />
  )
}

const AccordionTrigger: React.FC<
  React.ComponentPropsWithRef<typeof Trigger>
> = ({className, children, ...props}) => {
  return (
    <Header>
      <Trigger
        className={cn(
          'p-6 w-full flex flex-1 items-center justify-between group',
          className
        )}
        {...props}
      >
        <div className='flex items-center gap-2 grow sm:gap-4'>{children}</div>
        <span className='relative w-6 h-6'>
          <ChevronUpIcon className='size-4 absolute -top-0.5 left-1/2 -translate-x-1/2 group-data-open:translate-y-2 group-data-open:duration-750 group-data-closed:duration-375 transition' />
          <ChevronDownIcon className='size-4 absolute -bottom-0.5 left-1/2 -translate-x-1/2 group-data-open:-translate-y-2 group-data-open:duration-750 group-data-closed:duration-375 transition' />
        </span>
      </Trigger>
    </Header>
  )
}

const AccordionContent: React.FC<
  React.ComponentPropsWithRef<typeof Content>
> = ({className, children, ...props}) => {
  return (
    <Content
      className='data-open:animate-accordion-open data-closed:animate-accordion-close'
      {...props}
    >
      <div className={cn('p-6', className)}>{children}</div>
    </Content>
  )
}

Accordion.displayName = 'Accordion'
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
