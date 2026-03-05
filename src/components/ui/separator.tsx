'use client'

import {Root} from '@radix-ui/react-separator'
import {cn} from '@/src/lib/utils'

interface SeparatorProps extends React.ComponentPropsWithRef<typeof Root> {
  variant?: 'primary' | 'secondary'
}

function Separator({
  className,
  variant = 'primary',
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <Root
      className={cn(
        'shrink-0',
        variant === 'primary' && 'bg-primary/10',
        variant === 'secondary' && 'bg-secondary/10',
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
