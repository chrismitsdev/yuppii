'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import {cn} from '@/lib/utils'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    hasCorner?: boolean
  }
>(({className, children, hasCorner = true, ...props}, ref) => (
  <ScrollAreaPrimitive.Root
    className={cn('relative overflow-hidden', className)}
    ref={ref}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    {hasCorner && <ScrollAreaPrimitive.Corner />}
  </ScrollAreaPrimitive.Root>
))

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({className, orientation = 'vertical', ...props}, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-3 border-l border-l-transparent p-0.5',
      orientation === 'horizontal' && 'h-3 border-t border-t-transparent p-0.5',
      className
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb 
      className={cn(
        orientation === 'vertical' && 'flex-1',
        'relative rounded-full bg-accent/30 hover:bg-accent/50 transition-colors'
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export {ScrollArea, ScrollBar}
