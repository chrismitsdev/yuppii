import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const badgeVariants = cva(
  'px-1.5 inline-flex items-center rounded border border-accent text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:px-2.5 sm:py-0.5',
  {
    variants: {
      variant: {
        primary: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        accent: 'border-transparent bg-accent text-accent-foreground',
        outline: 'bg-transparent text-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>

const Badge = ({className, variant, ...props}: BadgeProps) => (
  <div 
    className={cn(badgeVariants({variant}), className)} 
    {...props} 
  />
)

Badge.displayName = 'Badge'

export {Badge, badgeVariants}
