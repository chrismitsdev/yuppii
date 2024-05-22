'use client'

import * as React from 'react'
import {Root} from '@radix-ui/react-separator'
import {cn} from '@/lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({className, orientation = 'horizontal', decorative = true, ...props},ref) => (
  <Root
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

Separator.displayName = 'Separator'

export {Separator}
