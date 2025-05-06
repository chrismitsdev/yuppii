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
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/utils'

const Sheet = Root
const SheetTrigger = Trigger
const SheetPortal = Portal
const SheetClose = Close

const SheetOverlay: React.FC<React.ComponentPropsWithRef<typeof Overlay>> = ({
  className,
  ...props
}) => {
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
          // 'inset-y-0',
          // 'left-0',
          // 'h-full',
          // 'w-full',
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

const SheetContent: React.FC<
  React.ComponentPropsWithRef<typeof Content> &
    VariantProps<typeof sheetContentProps>
> = ({
  side = 'right',
  className,
  'aria-describedby': ariaDescribedBy = undefined,
  ...props
}) => {
  return (
    <Content
      className={cn(sheetContentProps({side}), className)}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

const SheetHeader: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex flex-col space-y-2 sm:text-left', className)}
      {...props}
    />
  )
}

const SheetTitle: React.FC<React.ComponentPropsWithRef<typeof Title>> = ({
  className,
  ...props
}) => {
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

const SheetDescription: React.FC<
  React.ComponentPropsWithRef<typeof Description>
> = ({className, ...props}) => {
  return (
    <Description
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

const SheetFooter: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
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
