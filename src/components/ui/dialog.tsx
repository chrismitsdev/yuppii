'use client'

import {XIcon} from 'lucide-react'
import {Dialog as RadixDialog} from 'radix-ui'
import {cn} from '@/src/lib/utils'
import {IconButton} from './icon-button'

const Dialog = RadixDialog.Root
const DialogTrigger = RadixDialog.Trigger
const DialogPortal = RadixDialog.Portal

function DialogOverlay({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixDialog.Overlay>) {
  return (
    <RadixDialog.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-accent/50 backdrop-blur-[1px] data-open:animate-overlay-open data-closed:animate-overlay-close',
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixDialog.Content>) {
  return (
    <RadixDialog.Content
      className={cn(
        'w-full max-w-[calc(100%-24px)] fixed inset-s-1/2 inset-bs-1/2 -translate-1/2 z-50 origin-center bg-secondary rounded shadow-md data-open:animate-dialog-open data-closed:animate-dialog-close sm:max-w-5xl',
        className
      )}
      {...props}
    />
  )
}

function DialogHeader({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('px-6 pt-6 space-y-4 sm:px-8 sm:pt-8', className)}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixDialog.Title>) {
  return (
    <RadixDialog.Title
      className={cn('text-xl font-display font-bold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixDialog.Description>) {
  return (
    <RadixDialog.Description
      className={cn('text-accent', className)}
      {...props}
    />
  )
}

function DialogBody({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('h-full p-6 sm:p-8', className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('px-6 pb-6 sm:px-8 sm:pb-8', className)}
      {...props}
    />
  )
}

function DialogClose({
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<React.ComponentPropsWithRef<typeof RadixDialog.Close>, 'asChild'>) {
  return (
    <RadixDialog.Close
      className={cn('absolute inset-bs-4 inset-e-4 z-50', className)}
      {...props}
      asChild
    >
      <IconButton
        aria-label={ariaLabel || 'Close dialog'}
        size='sm'
      >
        <XIcon />
      </IconButton>
    </RadixDialog.Close>
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
DialogBody.displayName = 'DialogBody'
DialogFooter.displayName = 'DialogFooter'
DialogClose.displayName = 'DialogClose'

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
}
