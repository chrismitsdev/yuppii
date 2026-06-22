'use client'

import {Tooltip as RadixTooltip} from 'radix-ui'
import {cn} from '@/src/lib/utils'

const TooltipProvider = RadixTooltip.Provider
const Tooltip = RadixTooltip.Root
const TooltipTrigger = RadixTooltip.Trigger
const TooltipPortal = RadixTooltip.Portal

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Content> {}

function TooltipContent({
  className,
  side = 'bottom',
  sideOffset = 8,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <RadixTooltip.Content
      className={cn(
        'px-3 py-1.5 z-50 text-sm bg-secondary text-secondary-foreground font-bold rounded-sm shadow',
        className
      )}
      side={side}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <RadixTooltip.Arrow className='fill-secondary w-4 h-2' />
    </RadixTooltip.Content>
  )
}

TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipPortal.displayName = 'TooltipPortal'
TooltipContent.displayName = 'TooltipContent'

export {Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger}
