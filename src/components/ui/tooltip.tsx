'use client'

import {Content, Portal, Provider, Root, Trigger} from '@radix-ui/react-tooltip'
import {cva, type VariantProps} from 'class-variance-authority'
import type * as React from 'react'
import {cn} from '@/src/lib/utils'

const TooltipProvider = Provider
const Tooltip = Root
const TooltipTrigger = Trigger
const TooltipPortal = Portal

const tooltipProps = cva(
  [
    'px-3',
    'py-1.5',
    'z-50',
    'text-sm',
    'font-black',
    'overflow-hidden',
    'rounded-md',
    'animate-in',
    'fade-in-0',
    'zoom-in-95',
    'data-closed:animate-out',
    'data-closed:fade-out-0',
    'data-closed:zoom-out-95',
    'data-top:slide-in-from-bottom-2',
    'data-right:slide-in-from-left-2',
    'data-bottom:slide-in-from-top-2',
    'data-left:slide-in-from-right-2',
    'lg:text-base'
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        accent: 'bg-accent text-accent-foreground'
      }
    },
    defaultVariants: {
      variant: 'secondary'
    }
  }
)

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof tooltipProps> {}

const TooltipContent: React.FC<TooltipContentProps> = ({
  variant,
  className,
  sideOffset = 4,
  ...props
}) => (
  <Content
    className={cn(tooltipProps({variant, className}))}
    sideOffset={sideOffset}
    {...props}
  />
)

TooltipProvider.displayName = 'TooltipProvider'
Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipPortal.displayName = 'TooltipPortal'
TooltipContent.displayName = 'TooltipContent'

export {Tooltip, TooltipTrigger, TooltipPortal, TooltipContent, TooltipProvider}
