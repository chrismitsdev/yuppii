import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

const buttonProps = cva(
  [
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'text-sm',
    'font-bold',
    'uppercase',
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
        sm: 'px-2 h-8 gap-0.5 rounded-xs [&>svg]:size-4',
        md: 'px-4 h-10 gap-1 rounded [&>svg]:size-5',
        lg: 'px-6 h-12 gap-1.5 rounded-md [&>svg]:size-6'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'aria-disabled'>,
    VariantProps<typeof buttonProps> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  disabled,
  type = 'button',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      aria-disabled={disabled}
      className={buttonProps({variant, size, className})}
      type={asChild ? undefined : type}
      disabled={asChild ? undefined : disabled}
      {...props}
    />
  )
}

Button.displayName = 'Button'

export {Button, buttonProps}
