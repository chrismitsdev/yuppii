'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipPortal = TooltipPrimitive.Portal

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
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, 
  VariantProps<typeof tooltipVariants> {}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({variant, className, sideOffset = 4, ...props}, ref) => (
  <TooltipPrimitive.Content
    className={cn(tooltipVariants({variant, className}))}
    sideOffset={sideOffset}
    ref={ref}
    {...props}
  />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {Tooltip, TooltipTrigger, TooltipPortal, TooltipContent, TooltipProvider}