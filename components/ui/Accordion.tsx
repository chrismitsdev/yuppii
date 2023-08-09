'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronRight} from 'lucide-react'
import {cn} from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, ref) => (
  <AccordionPrimitive.Item
    className={cn(
      'bg-secondary/50 rounded shadow-sm overflow-hidden transition hover:bg-secondary hover:shadow-md data-open:bg-secondary data-open:shadow-md',
      className
    )}
    ref={ref}
    {...props}
  />
))

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between p-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-90',
        className
      )}
      ref={ref}
      {...props}
    >
      <div className='flex items-center gap-2 lg:gap-4'>
        {children}
      </div>
      <ChevronRight className='shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    className={cn(
      'overflow-hidden text-sm font-medium data-open:animate-accordion-down data-closed:animate-accordion-up',
      className
    )}
    ref={ref}
    {...props}
  >
    <div className='pl-4 pr-4 pb-4 lg:pl-14'>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionItem.displayName = 'Accordion Item'
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
