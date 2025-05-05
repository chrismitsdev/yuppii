'use client'

import * as React from 'react'
import {Root} from '@radix-ui/react-separator'
import {cn} from '@/src/lib/utils'

const Separator: React.FC<React.ComponentPropsWithRef<typeof Root>> = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => {
  return (
    <Root
      className={cn(
        'shrink-0 bg-accent/50',
        orientation === 'horizontal' ? 'my-2 w-full h-px' : 'mx-2 h-full w-px',
        className
      )}
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  )
}

Separator.displayName = 'Separator'

export {Separator}
