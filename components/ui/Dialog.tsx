'use client'

import * as React from 'react'
import {
  Root, 
  Trigger, 
  Portal, 
  Overlay, 
  Content, 
  Close, 
  Title, 
  Description
} from '@radix-ui/react-dialog'
import {X} from 'lucide-react'
import {cn} from '@/lib/utils'

const Dialog = Root
const DialogTrigger = Trigger
const DialogPortal = Portal

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({className, ...props}, ref) => (
  <Overlay
    className={cn(
      'fixed inset-0 z-50 bg-accent/25 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
      className
    )}
    ref={ref}
    {...props}
  />
))

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({className, children, ...props}, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-[95%] max-w-lg translate-x-[-50%] translate-y-[-50%] bg-primary gap-4 p-6 shadow-lg duration-300 data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-closed:slide-out-to-left-1/2 data-closed:slide-out-to-top-[48%] data-open:slide-in-from-left-1/2 data-open:slide-in-from-top-[48%] rounded sm:rounded-lg md:w-full',
        className
      )}
      ref={ref}
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
  </DialogPortal>
))

const DialogHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'space-y-4',
      className
    )}
    {...props}
  />
)

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({className, ...props}, ref) => (
  <Title
    className={cn(
      'text-lg lg:text-xl font-semibold leading-none tracking-tight',
      className
    )}
    ref={ref}
    {...props}
  />
))

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({className, ...props}, ref) => (
  <Description
    className={cn(
      'text-sm text-accent lg:text-base', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const DialogFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props} />
)

Dialog.displayName = 'Dialog'
DialogTrigger.displayName = 'DialogTrigger'
DialogPortal.displayName = 'DialogPortal'
DialogOverlay.displayName = 'DialogOverlay'
DialogContent.displayName = 'DialogContent'
DialogHeader.displayName = 'DialogHeader'
DialogTitle.displayName = 'DialogTitle'
DialogDescription.displayName = 'DialogDescription'
DialogFooter.displayName = 'DialogFooter'

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
}
