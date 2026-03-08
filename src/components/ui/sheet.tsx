'use client'

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger
} from '@radix-ui/react-dialog'
import {cva, type VariantProps} from 'class-variance-authority'
import {XIcon} from 'lucide-react'
import {IconButton} from '@/src/components/ui/icon-button'
import {cn} from '@/src/lib/utils'

const Sheet = Root
const SheetTrigger = Trigger
const SheetPortal = Portal

function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Overlay>) {
  return (
    <Overlay
      className={cn(
        'fixed inset-0 z-50 bg-accent/50 backdrop-blur-[1px] data-open:animate-overlay-open data-closed:animate-overlay-close',
        className
      )}
      {...props}
    />
  )
}

const sheetContentProps = cva(
  ['fixed', 'overflow-hidden', 'z-50', 'bg-primary', 'shadow-md'],
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
}: React.ComponentPropsWithRef<typeof Content> &
  VariantProps<typeof sheetContentProps>) {
  return (
    <Content
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
      className={cn(
        'p-6 space-y-4 border-b border-b-accent/10 sm:p-8',
        className
      )}
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
}: Omit<React.ComponentPropsWithRef<typeof Close>, 'asChild'>) {
  return (
    <Close
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
    </Close>
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
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetClose
}
