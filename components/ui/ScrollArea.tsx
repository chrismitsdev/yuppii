'use client'

import * as React from 'react'
import {Root, Viewport, ScrollAreaScrollbar, ScrollAreaThumb, Corner} from '@radix-ui/react-scroll-area'
import {cn} from '@/lib/utils'

type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof Root> & {
  hasCorner?: boolean
  orientation?: 'horizontal' | 'vertical'
  invisible?: boolean
  showShadows?: boolean
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof Root>,
  ScrollAreaProps
>((_props, ref) => {
  const {
    className, 
    children, 
    hasCorner = true, 
    orientation = 'vertical', 
    invisible = false,
    showShadows = false,
    ...props
  } = _props

  return (
    <Root
      className={cn('relative overflow-hidden', className)}
      ref={ref}
      {...props}
    >
      <ScrollAreaViewport showShadows={showShadows}>
        {children}
      </ScrollAreaViewport>
      <ScrollBar orientation={orientation} invisible={invisible} />
      {hasCorner && <Corner />}
    </Root>
  )
})

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport> & {
    showShadows?: boolean
  }
>(({className, showShadows = true, children, ...props}, ref) => {
  const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = React.useState<boolean>(true)

  if (!showShadows) {
    return (
      <Viewport 
        className={cn(
          'h-full w-full rounded-[inherit]', 
          className
        )}
        ref={ref}
        {...props} 
      >
        {children}
      </Viewport>
    )
  }

  function handleShowShadows(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    if (!showShadows) return
    const {scrollLeft, scrollWidth, clientWidth} = e.currentTarget
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollWidth - scrollLeft !== clientWidth)
  }

  return (
    <div 
      className={cn(
        'relative',
        'before:absolute before:-left-1 before:top-0 before:z-[1] before:block before:h-full before:w-10 before:opacity-0 before:bg-gradient-to-r before:from-primary before:duration-150 before:pointer-events-none',
        'after:absolute after:-right-1 after:top-0 after:z-[1] after:block after:h-full after:w-10 after:bg-gradient-to-l after:from-primary after:duration-150 after:pointer-events-none',
        canScrollLeft && 'before:opacity-100',
        !canScrollRight && 'after:opacity-0'
      )}
    >
      <Viewport 
        className={cn('h-full w-full rounded-[inherit] overscroll-none', className)}
        onScroll={handleShowShadows}
        ref={ref}
        {...props}
      >
        {children}
      </Viewport>
    </div>
  )
})

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
ScrollAreaViewport.displayName = 'ScrollAreaViewport'
ScrollBar.displayName = 'ScrollBar'

export {ScrollArea, ScrollBar}
