'use client'

import * as React from 'react'
import {Provider, Root, Trigger, Portal, Content} from '@radix-ui/react-tooltip'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const TooltipProvider = Provider
const Tooltip = Root
const TooltipTrigger = Trigger
const TooltipPortal = Portal

const tooltipVariants = cva(
  'z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm lg:text-base font-black shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        accent: 'bg-accent text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'secondary'
    }
  }
)

interface TooltipContentProps extends 
  React.ComponentPropsWithoutRef<typeof Content>, 
  VariantProps<typeof tooltipVariants> {}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  TooltipContentProps
>(({variant, className, sideOffset = 4, ...props}, ref) => (
  <Content
    className={cn(tooltipVariants({variant, className}))}
    sideOffset={sideOffset}
    ref={ref}
    {...props}
  />
))

TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipPortal.displayName = 'TooltipPortal'
TooltipContent.displayName = 'TooltipContent'

export {
  Tooltip, 
  TooltipTrigger, 
  TooltipPortal, 
  TooltipContent, 
  TooltipProvider
}