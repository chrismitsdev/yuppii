import {Slot} from '@radix-ui/react-slot'
import {type Locale} from 'next-intl'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn, isoLocaleMap} from '@/src/lib/utils'

const buttonProps = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-bold',
    'uppercase',
    'border',
    'bg-clip-padding',
    'rounded-md',
    'outline-none',
    'ring-0',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground border-primary hover:bg-primary/75 hover:border-primary/75',
        secondary:
          'bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/75 hover:border-secondary/75',
        accent:
          'bg-accent text-accent-foreground border-accent hover:bg-accent/75 hover:border-accent/75',
        outline: 'bg-transparent text-secondary-foreground border-accent',
        ghost: '',
        'ghost-primary':
          'hover:bg-primary hover:text-primary-foreground hover:border-primary',
        'ghost-secondary':
          'hover:bg-secondary hover:text-secondary-foreground hover:border-secondary',
        'ghost-accent':
          'hover:bg-accent hover:text-accent-foreground hover:border-accent'
      },
      size: {
        sm: 'px-2 py-0.75',
        md: 'px-4 py-1.75',
        lg: 'px-6 py-2.75',
        xl: 'px-8 py-4',
        icon: 'w-10 h-10'
      }
    },
    compoundVariants: [
      {
        variant: ['ghost', 'ghost-primary', 'ghost-secondary', 'ghost-accent'],
        className: 'bg-transparent border-transparent'
      },
      {size: 'sm', className: ['[&_svg]:mb-0.5', 'has-[svg]:pr-1']},
      {
        size: ['md', 'lg', 'xl'],
        className: '[&>svg]:mb-1'
      }
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'md'
    }
  }
)

export interface ButtonProps
  extends React.ComponentPropsWithRef<'button'>,
    VariantProps<typeof buttonProps> {
  locale?: Locale
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'secondary',
  size = 'md',
  asChild = false,
  draggable = false,
  disabled,
  locale,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonProps({variant, size, className}))}
      draggable={draggable}
      aria-disabled={disabled}
      disabled={disabled}
      {...(locale ? {lang: isoLocaleMap[locale]} : {})}
      {...props}
    />
  )
}

Button.displayName = 'Button'

export {Button, buttonProps}
