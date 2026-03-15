'use client'

import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger
} from '@radix-ui/react-tooltip'
import {cn} from '@/src/lib/utils'

const TooltipProvider = Provider
const Tooltip = Root
const TooltipTrigger = Trigger
const TooltipPortal = Portal
interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

function TooltipContent({
  className,
  side = 'bottom',
  sideOffset = 8,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <Content
      className={cn(
        'px-3 py-1.5 z-50 text-sm bg-secondary text-secondary-foreground font-bold rounded-sm shadow',
        className
      )}
      side={side}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <Arrow className='fill-secondary w-4 h-2' />
    </Content>
  )
}

TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipPortal.displayName = 'TooltipPortal'
TooltipContent.displayName = 'TooltipContent'

export {Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger}
