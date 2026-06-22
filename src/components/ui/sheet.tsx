'use client'

import {cva, type VariantProps} from 'class-variance-authority'
import {XIcon} from 'lucide-react'
import {Dialog} from 'radix-ui'
import {IconButton} from '@/src/components/ui/icon-button'
import {cn} from '@/src/lib/utils'

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger
const SheetPortal = Dialog.Portal

function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-accent/50 backdrop-blur-[1px] data-open:animate-overlay-open data-closed:animate-overlay-close',
        className
      )}
      {...props}
    />
  )
}

const sheetContentProps = cva(
  ['fixed', 'overflow-hidden', 'z-50', 'bg-secondary', 'shadow-md'],
  {
    variants: {
      side: {
        top: [
          'inset-x-0',
          'inset-bs-0',
          'data-open:animate-sheet-top-open',
          'data-closed:animate-sheet-top-close'
        ],
        right: [
          'inset-y-0',
          'inset-e-0',
          'h-full',
          'w-full',
          'data-open:animate-sheet-right-open',
          'data-closed:animate-sheet-right-close',
          'sm:max-w-lg'
        ],
        bottom: [
          'inset-x-0',
          'inset-be-0',
          'data-open:animate-sheet-bottom-open',
          'data-closed:animate-sheet-bottom-close'
        ],
        left: [
          'inset-bs-2',
          'inset-s-2',
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
      side: 'left'
    }
  }
)

function SheetContent({
  side,
  className,
  'aria-describedby': ariaDescribedBy = undefined,
  ...props
}: React.ComponentPropsWithRef<typeof Dialog.Content> &
  VariantProps<typeof sheetContentProps>) {
  return (
    <Dialog.Content
      className={sheetContentProps({side, className})}
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
      className={cn('p-6 space-y-4 border-b sm:p-8', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn('text-xl font-display font-bold', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={cn('text-accent', className)}
      {...props}
    />
  )
}

function SheetBody({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('px-6 py-1 sm:px-8', className)}
      {...props}
    />
  )
}

function SheetClose({
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<React.ComponentPropsWithRef<typeof Dialog.Close>, 'asChild'>) {
  return (
    <Dialog.Close
      className={cn('absolute inset-bs-4 inset-e-4 z-50', className)}
      {...props}
      asChild
    >
      <IconButton
        aria-label={ariaLabel || 'Close drawer'}
        size='sm'
      >
        <XIcon />
      </IconButton>
    </Dialog.Close>
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
SheetBody.displayName = 'SheetBody'
SheetClose.displayName = 'SheetClose'

export {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
}
