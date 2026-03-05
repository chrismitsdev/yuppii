'use client'

import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport
} from '@radix-ui/react-scroll-area'
import {cn} from '@/src/lib/utils'

const ScrollareaCorner = Corner

function Scrollarea({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Root>) {
  return (
    <Root
      className={cn('relative overflow-hidden', className)}
      {...props}
    />
  )
}

function ScrollareaViewport({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof Viewport>) {
  return (
    <Viewport
      className={cn('h-full w-full rounded-[inherit]', className)}
      {...props}
    />
  )
}

function ScrollareaBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentPropsWithRef<typeof Scrollbar>) {
  return (
    <Scrollbar
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col p-px',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <Thumb className='flex-1 relative rounded-full bg-accent/30 hover:bg-accent/50 transition-colors' />
    </Scrollbar>
  )
}

Scrollarea.displayName = 'Scrollarea'
ScrollareaViewport.displayName = 'ScrollareaViewport'
ScrollareaBar.displayName = 'ScrollareaBar'
ScrollareaCorner.displayName = 'ScrollareaCorner'

export {Scrollarea, ScrollareaViewport, ScrollareaBar, ScrollareaCorner}

// ANATOMY
// <ScrollArea>
//   <ScrollareaViewport>
//     <div>Some content ...</div>
//   </ScrollareaViewport>
//   <ScrollareaBar orientation='horizontal' />
//   <ScrollareaBar orientation='vertical' />
//   <ScrollareaCorner />
// </ScrollArea>
