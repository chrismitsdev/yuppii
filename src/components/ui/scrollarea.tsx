'use client'

import * as React from 'react'
import {
  Root,
  Viewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Corner
} from '@radix-ui/react-scroll-area'
import {cn} from '@/src/lib/utils'

type ScrollAreaProps = React.ComponentPropsWithRef<typeof Root> & {
  hasCorner?: boolean
  orientation?: 'horizontal' | 'vertical'
  invisible?: boolean
  showShadows?: boolean
  isFlex?: boolean
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  className,
  children,
  hasCorner = true,
  orientation = 'vertical',
  invisible = false,
  showShadows = false,
  isFlex = false,
  ...props
}) => {
  return (
    <Root
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaViewport
        showShadows={showShadows}
        isFlex={isFlex}
      >
        {children}
      </ScrollAreaViewport>
      <ScrollBar
        orientation={orientation}
        invisible={invisible}
      />
      {hasCorner && <Corner />}
    </Root>
  )
}

const ScrollAreaViewport: React.FC<
  React.ComponentPropsWithRef<typeof Viewport> & {
    showShadows?: boolean
    isFlex?: boolean
  }
> = ({className, showShadows, children, isFlex, ...props}) => {
  const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = React.useState<boolean>(true)

  if (!showShadows) {
    return (
      <Viewport
        className={cn(
          'h-full w-full rounded-[inherit]',
          isFlex && '[&>div]:!flex',
          className
        )}
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
        'before:absolute before:-left-1 before:top-0 before:z-10 before:block before:h-full before:w-8 before:opacity-0 before:bg-gradient-to-r before:from-primary before:pointer-events-none',
        'after:absolute after:-right-1 after:top-0 after:z-10 after:block after:h-full after:w-8 after:bg-gradient-to-l after:from-primary after:pointer-events-none',
        canScrollLeft && 'before:opacity-100',
        !canScrollRight && 'after:opacity-0'
      )}
    >
      <Viewport
        className={cn(
          'h-full w-full rounded-[inherit] overscroll-none',
          className
        )}
        onScroll={handleShowShadows}
        {...props}
      >
        {children}
      </Viewport>
    </div>
  )
}

const ScrollBar: React.FC<
  React.ComponentPropsWithRef<typeof ScrollAreaScrollbar> & {
    invisible?: boolean
  }
> = ({className, orientation, invisible, ...props}) => {
  return (
    <ScrollAreaScrollbar
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-3 border-l border-l-transparent p-0.5',
        orientation === 'horizontal' &&
          'h-3 border-t border-t-transparent p-0.5',
        invisible && 'invisible',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaThumb
        className={cn(
          orientation === 'vertical' && 'flex-1',
          'relative rounded-full bg-accent/30 hover:bg-accent/50 transition-colors'
        )}
      />
    </ScrollAreaScrollbar>
  )
}

ScrollArea.displayName = 'ScrollArea'
ScrollAreaViewport.displayName = 'ScrollAreaViewport'
ScrollBar.displayName = 'ScrollBar'

export {ScrollArea, ScrollBar}
