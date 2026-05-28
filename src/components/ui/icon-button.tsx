import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

const iconButtonProps = cva(
  [
    'cursor-pointer',
    'inline-flex',
    'justify-center',
    'items-center',
    'transition',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-accent',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'aria-disabled:opacity-50',
    'aria-disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'text-primary-foreground',
          'hover:bg-primary/75',
          'focus-visible:bg-primary/75'
        ],
        secondary: [
          'bg-secondary',
          'text-secondary-foreground',
          'hover:bg-secondary/75',
          'focus-visible:bg-secondary/75'
        ],
        accent: [
          'bg-accent',
          'text-accent-foreground',
          'hover:bg-accent/75',
          'focus-visible:bg-accent/75'
        ],
        ghost: [
          'bg-transparent',
          'text-foreground',
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
  type = 'button',
  asChild = false,
  ...props
}: IconButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={iconButtonProps({variant, size, className})}
      type={asChild ? undefined : type}
      disabled={asChild ? undefined : disabled}
      {...props}
    />
  )
}

IconButton.displayName = 'IconButton'

export {IconButton}
