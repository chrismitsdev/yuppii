import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/utils'

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
  extends React.ComponentPropsWithRef<'button'>,
    VariantProps<typeof buttonProps> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonProps({variant, size, className}))}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    />
  )
}

Button.displayName = 'Button'

export {Button, buttonProps}
