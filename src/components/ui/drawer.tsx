'use client'

import {Drawer as Vaul} from 'vaul'
import {cn} from '@/src/lib/utils'

const Drawer = Vaul.Root
const DrawerTrigger = Vaul.Trigger
const DrawerPortal = Vaul.Portal
const DrawerTitle = Vaul.Title
const DrawerDescription = Vaul.Description
const DrawerHandle = Vaul.Handle
const DrawerClose = Vaul.Close

const DrawerOverlay: React.FC<
  React.ComponentPropsWithRef<typeof Vaul.Overlay>
> = ({className, ...props}) => {
  return (
    <Vaul.Overlay
      className={cn('fixed inset-0 z-1 bg-accent/50 backdrop-blur-[1px]')}
      {...props}
    />
  )
}

const DrawerContent: React.FC<
  React.ComponentPropsWithRef<typeof Vaul.Content>
> = ({
  className,
  'aria-describedby': ariaDescribedBy = undefined,
  ...props
}) => {
  return (
    <Vaul.Content
      className={cn(
        'fixed inset-x-0 bottom-0 z-1 flex flex-col bg-primary outline-none',
        className
      )}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

DrawerTrigger.displayName = 'DrawerTrigger'
DrawerOverlay.displayName = 'DrawerOverlay'
DrawerContent.displayName = 'DrawerContent'
DrawerTitle.displayName = 'DrawerTitle'
DrawerDescription.displayName = 'DrawerDescription'
DrawerHandle.displayName = 'DrawerHandle'
DrawerClose.displayName = 'DrawerClose'

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHandle,
  DrawerClose
}
