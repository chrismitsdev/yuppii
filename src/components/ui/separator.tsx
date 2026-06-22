'use client'

import {Separator as RadixSeparator} from 'radix-ui'
import {cn} from '@/src/lib/utils'

interface SeparatorProps
  extends React.ComponentPropsWithRef<typeof RadixSeparator.Root> {
  variant?: 'primary' | 'secondary' | 'accent'
}

function Separator({
  className,
  variant = 'primary',
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <RadixSeparator.Root
      className={cn(
        'shrink-0',
        variant === 'primary' && 'bg-primary',
        variant === 'secondary' && 'bg-secondary',
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
