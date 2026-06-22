'use client'

import {ScrollArea as RadixScrollArea} from 'radix-ui'
import {cn} from '@/src/lib/utils'

const ScrollareaCorner = RadixScrollArea.Corner

function Scrollarea({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixScrollArea.Root>) {
  return (
    <RadixScrollArea.Root
      className={cn('relative overflow-hidden', className)}
      {...props}
    />
  )
}

function ScrollareaViewport({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof RadixScrollArea.Viewport>) {
  return (
    <RadixScrollArea.Viewport
      className={cn('h-full w-full rounded-[inherit]', className)}
      {...props}
    />
  )
}

function ScrollareaBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentPropsWithRef<typeof RadixScrollArea.Scrollbar>) {
  return (
    <RadixScrollArea.Scrollbar
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col p-px',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <RadixScrollArea.Thumb className='flex-1 relative rounded-full bg-accent/30 hover:bg-accent/50 transition-colors' />
    </RadixScrollArea.Scrollbar>
  )
}

Scrollarea.displayName = 'Scrollarea'
ScrollareaViewport.displayName = 'ScrollareaViewport'
ScrollareaBar.displayName = 'ScrollareaBar'
ScrollareaCorner.displayName = 'ScrollareaCorner'

export {Scrollarea, ScrollareaBar, ScrollareaCorner, ScrollareaViewport}

// ANATOMY
// <ScrollArea>
//   <ScrollareaViewport>
//     <div>Some content ...</div>
//   </ScrollareaViewport>
//   <ScrollareaBar orientation='horizontal' />
//   <ScrollareaBar orientation='vertical' />
//   <ScrollareaCorner />
// </ScrollArea>
