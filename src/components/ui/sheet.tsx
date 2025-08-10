'use client'

import * as React from 'react'
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close
} from '@radix-ui/react-dialog'
import {type VariantProps, cva} from 'class-variance-authority'
import {cn} from '@/src/lib/utils'

const sheetContentProps = cva(
  ['fixed', 'overflow-hidden', 'z-1', 'bg-primary', 'shadow-md'],
  {
    variants: {
      side: {
        top: [
          'inset-x-0',
          'top-0',
          'data-open:animate-sheet-top-open',
          'data-closed:animate-sheet-top-close'
        ],
        right: [
          'inset-y-0',
          'right-0',
          'h-full',
          'w-full',
          'data-open:animate-sheet-right-open',
          'data-closed:animate-sheet-right-close',
          'sm:max-w-lg'
        ],
        bottom: [
          'inset-x-0',
          'bottom-0',
          'data-open:animate-sheet-bottom-open',
          'data-closed:animate-sheet-bottom-close'
        ],
        left: [
          'top-2',
          'left-2',
          'rounded-lg',
          'w-[calc(100%-16px)]',
          'h-[calc(100%-16px)]',
          'data-open:animate-sheet-left-open',
          'data-closed:animate-sheet-left-close',
          'sm:max-w-lg'
        ]
      }
    },
    defaultVariants: {
      side: 'right'
    }
  }
)

const Sheet = Root
const SheetTrigger = Trigger
const SheetPortal = Portal
const SheetClose = Close

function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Overlay>) {
  return (
    <Overlay
      className={cn(
        'fixed inset-0 z-1 bg-accent/50 backdrop-blur-[1px] data-open:animate-overlay-open data-closed:animate-overlay-close',
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  side = 'right',
  className,
  'aria-describedby': ariaDescribedBy = undefined,
  ...props
}: React.ComponentPropsWithRef<typeof Content> &
  VariantProps<typeof sheetContentProps>) {
  return (
    <Content
      className={cn(sheetContentProps({side}), className)}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('flex flex-col space-y-2 sm:text-left', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Title>) {
  return (
    <Title
      className={cn(
        'text-foreground text-lg font-semibold leading-6',
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Description>) {
  return (
    <Description
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className
      )}
      {...props}
    />
  )
}

Sheet.displayName = 'Sheet'
SheetTrigger.displayName = 'SheetTrigger'
SheetPortal.displayName = 'SheetPortal'
SheetOverlay.displayName = 'SheetOverlay'
SheetContent.displayName = 'SheetContent'
SheetHeader.displayName = 'SheetHeader'
SheetTitle.displayName = 'SheetTitle'
SheetDescription.displayName = 'SheetDescription'
SheetFooter.displayName = 'SheetFooter'
SheetClose.displayName = 'SheetClose'

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
}
