'use client'
 
import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import {cva, type VariantProps} from 'class-variance-authority'
import {X} from 'lucide-react'
import {cn} from '@/lib/utils'
 
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
 
const SheetPortal = ({className, ...props}: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal 
    className={cn(className)} 
    {...props} 
  />
)

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
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
        left: 'inset-y-0 left-0 h-full w-3/4 rounded-r-lg data-closed:slide-out-to-left data-open:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 rounded-l-lg data-closed:slide-out-to-right data-open:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
)
 
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>
>(({side = 'right', className, children, ...props}, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({side}), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close 
        className='absolute right-4 top-4 rounded-sm disabled:pointer-events-none text-secondary'
      >
        <X className='w-5 h-5' strokeWidth={2.5} />
        <span className='sr-only'>Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
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
 
const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)
 
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Title
    className={cn('text-lg font-semibold text-foreground', className)}
    ref={ref}
    {...props}
  />
))
 
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Description
    className={cn('text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
))

SheetPortal.displayName = SheetPrimitive.Portal.displayName
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
SheetContent.displayName = SheetPrimitive.Content.displayName
SheetHeader.displayName = 'SheetHeader'
SheetFooter.displayName = 'SheetFooter'
SheetTitle.displayName = SheetPrimitive.Title.displayName
SheetDescription.displayName = SheetPrimitive.Description.displayName
 
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}