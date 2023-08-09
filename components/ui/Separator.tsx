'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import {cn} from '@/lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({className, orientation = 'horizontal', decorative = true, ...props},ref) => (
  <SeparatorPrimitive.Root
    className={cn(
      'shrink-0 bg-accent',
      orientation === 'horizontal' ? 'my-2 w-full h-px' : 'mx-2 h-full w-px',
      className
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export {Separator}
