'use client'

import * as React from 'react'
import {
  Root, 
  Viewport, 
  ScrollAreaScrollbar, 
  ScrollAreaThumb, 
  Corner
} from '@radix-ui/react-scroll-area'
import {cn} from '@/lib/utils'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & {
    hasCorner?: boolean
    orientation?: 'horizontal' | 'vertical'
    invisible?: boolean
  }
>(({className, children, hasCorner = true, orientation = 'vertical', invisible = false, ...props}, ref) => (
  <Root
    className={cn('relative overflow-hidden', className)}
    ref={ref}
    {...props}
  >
    <Viewport className='h-full w-full rounded-[inherit]'>
      {children}
    </Viewport>
    <ScrollBar orientation={orientation} invisible={invisible} />
    {hasCorner && <Corner />}
  </Root>
))

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar> & {
    invisible?: boolean
  }
>(({className, orientation, invisible, ...props}, ref) => (
  <ScrollAreaScrollbar
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-3 border-l border-l-transparent p-0.5',
      orientation === 'horizontal' && 'h-3 border-t border-t-transparent p-0.5',
      invisible && 'invisible',
      className
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  >
    <ScrollAreaThumb 
      className={cn(
        orientation === 'vertical' && 'flex-1',
        'relative rounded-full bg-accent/30 hover:bg-accent/50 transition-colors'
      )}
    />
  </ScrollAreaScrollbar>
))

ScrollArea.displayName = 'ScrollArea'
ScrollBar.displayName = 'ScrollBar'

export {ScrollArea, ScrollBar}
