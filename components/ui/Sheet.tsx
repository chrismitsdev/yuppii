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
import {X} from 'lucide-react'
import {cn} from '@/lib/utils'
 
const Sheet = Root
const SheetTrigger = Trigger
const SheetPortal = Portal
const SheetClose = Close

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({className, ...props}, ref) => (
  <Overlay
    className={cn(
      'fixed inset-0 z-50 bg-accent/50 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
      className
    )}
    {...props}
    ref={ref}
  />
))

const sheetVariants = cva(
  'fixed overflow-hidden z-50 bg-primary shadow-lg transition ease-in-out data-open:animate-in data-open:duration-300 data-closed:animate-out data-closed:duration-300',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 data-closed:slide-out-to-top data-open:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 data-closed:slide-out-to-left data-open:slide-in-from-left sm:max-w-sm sm:rounded-r-lg',
        right: 'inset-y-0 right-0 h-full w-3/4 data-closed:slide-out-to-right data-open:slide-in-from-right sm:max-w-sm sm:rounded-l-lg',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
)
 
const SheetContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & VariantProps<typeof sheetVariants>
>(({side = 'right', className, children, ...props}, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Content
      ref={ref}
      className={cn(sheetVariants({side}), className)}
      {...props}
    >
      {children}
      <Close 
        className='absolute right-4 top-4 rounded-sm disabled:pointer-events-none text-secondary'
      >
        <X className='w-5 h-5' strokeWidth={2.5} />
        <span className='sr-only'>Close</span>
      </Close>
    </Content>
  </SheetPortal>
))
 
const SheetHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
 
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({className, ...props}, ref) => (
  <Title
    className={cn('text-lg font-semibold text-foreground', className)}
    ref={ref}
    {...props}
  />
))
 
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({className, ...props}, ref) => (
  <Description
    className={cn('text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
))

const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)

Sheet.displayName = 'Sheet'
SheetTrigger.displayName = 'SheetTrigger'
SheetPortal.displayName = 'SheetPortal'
SheetOverlay.displayName = 'SheetOverlay'
SheetContent.displayName = 'SheetContent'
SheetHeader.displayName = 'SheetHeader'
SheetTitle.displayName = 'SheetTitle'
SheetDescription.displayName = 'SheetDescription'
SheetFooter.displayName = 'SheetFooter'
 
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
}