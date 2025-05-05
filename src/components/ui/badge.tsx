import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/utils'

const badgeProps = cva(
  [
    'px-2',
    'py-0.5',
    'inline-flex',
    'items-center',
    'text-sm',
    'font-semibold',
    'tracking-wide',
    'border',
    'rounded',
    'shrink-0',
    'transition-colors'
  ],
  {
    variants: {
      variant: {
        brand: 'bg-brand/50 text-brand-foreground border-brand',
        secondary: 'bg-secondary/50 text-secondary-foreground border-secondary',
        accent: 'bg-accent/50 text-accent-foreground border-accent',
        outline: 'bg-transparent text-accent'
      }
    },
    defaultVariants: {
      variant: 'brand'
    }
  }
)

interface BadgeProps
  extends React.ComponentPropsWithRef<'div'>,
    VariantProps<typeof badgeProps> {
  asChild?: boolean
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(badgeProps({variant}), className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

export {Badge}
