import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/utils'

const iconButtonProps = cva(
  [
    'cursor-pointer',
    'inline-flex',
    'justify-center',
    'items-center',
    'rounded-md',
    'transition',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-secondary',
          'text-secondary-foreground',
          'focus-visible:outline-secondary',
          'hover:bg-secondary/80',
          'focus-visible:bg-secondary/80'
        ],
        secondary: [
          'bg-accent',
          'text-accent-foreground',
          'focus-visible:outline-accent',
          'hover:bg-accent/80',
          'focus-visible:bg-accent/80'
        ],
        ghost: [
          'bg-transparent',
          'text-primary-foreground',
          'focus-visible:outline-accent',
          'hover:bg-secondary',
          'focus-visible:bg-secondary'
        ]
      },
      size: {
        sm: 'size-8 rounded-sm',
        md: 'size-10 rounded-md',
        lg: 'size-12 rounded-lg'
      }
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface IconButtonProps
  extends Omit<
      React.ComponentPropsWithRef<'button'>,
      'aria-label' | 'aria-disabled'
    >,
    VariantProps<typeof iconButtonProps> {
  'aria-label': string
  asChild?: boolean
}

function IconButton({
  className,
  'aria-label': ariaLabel,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: IconButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const isButton = !asChild

  return (
    <Comp
      className={cn(iconButtonProps({variant, size, className}))}
      aria-label={ariaLabel}
      aria-disabled={!isButton ? disabled : undefined}
      disabled={disabled}
      {...props}
    />
  )
}

IconButton.displayName = 'IconButton'

export {IconButton}
