'use client'

import * as React from 'react'
import {Drawer as DrawerPrimitive} from 'vaul'
import {cn} from '@/lib/utils'

const Drawer = DrawerPrimitive.Root
const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerClose = DrawerPrimitive.Close
const DrawerPortal = DrawerPrimitive.Portal
const DrawerTitle = DrawerPrimitive.Title
const DrawerDescription = DrawerPrimitive.Description

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <DrawerPrimitive.Overlay 
    className={cn(
      'fixed inset-0 bg-accent/50 backdrop-blur-sm',
      className
    )}
    ref={ref}
    {...props}
  />
))

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        'fixed bottom-0 left-0 right-0 flex flex-col bg-primary rounded-t-lg',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))

DrawerTrigger.displayName = 'DrawerTrigger'
DrawerPortal.displayName = 'DrawerPortal'
DrawerOverlay.displayName = 'DrawerOverlay'
DrawerContent.displayName = 'DrawerContent'
DrawerTitle.displayName = 'DrawerTitle'
DrawerDescription.displayName = 'DrawerDescription'
DrawerClose.displayName = 'DrawerClose'


export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
}