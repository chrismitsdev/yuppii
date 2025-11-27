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
import {cn} from '@/src/lib/utils'

const Dialog = Root
const DialogTrigger = Trigger
const DialogPortal = Portal
const DialogClose = Close

const DialogOverlay: React.FC<React.ComponentPropsWithRef<typeof Overlay>> = ({
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

const DialogContent: React.FC<React.ComponentPropsWithRef<typeof Content>> = ({
  className,
  'aria-describedby': ariaDescribedBy = undefined,
  ...props
}) => {
  return (
    <Content
      className={cn(
        'p-6 fixed left-1/2 top-1/2 -translate-1/2 origin-center z-1 w-full max-w-[calc(100%-24px)] bg-primary rounded shadow-md data-open:animate-dialog-open data-closed:animate-dialog-close sm:p-8 sm:max-w-xl',
        className
      )}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

const DialogHeader: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('mb-3 space-y-4', className)}
      {...props}
    />
  )
}

const DialogTitle: React.FC<React.ComponentPropsWithRef<typeof Title>> = ({
  className,
  ...props
}) => {
  return (
    <Title
      className={cn('text-2xl font-semibold', className)}
      {...props}
    />
  )
}

const DialogDescription: React.FC<
  React.ComponentPropsWithRef<typeof Description>
> = ({className, ...props}) => {
  return (
    <Description
      className={cn('text-lg text-accent', className)}
      {...props}
    />
  )
}

const DialogFooter: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('pt-2', className)}
      {...props}
    />
  )
}

Dialog.displayName = 'Dialog'
DialogTrigger.displayName = 'DialogTrigger'
DialogPortal.displayName = 'DialogPortal'
DialogOverlay.displayName = 'DialogOverlay'
DialogContent.displayName = 'DialogContent'
DialogHeader.displayName = 'DialogHeader'
DialogTitle.displayName = 'DialogTitle'
DialogDescription.displayName = 'DialogDescription'
DialogFooter.displayName = 'DialogFooter'
DialogClose.displayName = 'DialogClose'

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
}
