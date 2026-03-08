import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

const typographyProps = cva(['block', 'transition-colors', 'text-balance'], {
  variants: {
    variant: {
      h1: ['text-5xl'],
      h2: ['text-4xl'],
      h3: ['text-3xl'],
      h4: ['text-2xl'],
      lead: ['text-xl'],
      large: ['text-lg', 'leading-7'],
      p: ['text-base', 'leading-6'],
      small: ['text-sm', 'leading-5'],
      tiny: ['text-xs', 'leading-4'],
      mini: ['text-[10px]', 'leading-3', 'tracking-wider']
    }
  },
  compoundVariants: [
    {
      variant: ['h1', 'h2', 'h3', 'h4', 'lead'],
      className: 'font-display font-bold'
    },
    {variant: ['p', 'small', 'tiny'], className: 'leading-6'}
  ],
  defaultVariants: {
    variant: 'p'
  }
})

interface TypographyProps
  extends React.ComponentPropsWithRef<'span'>,
    VariantProps<typeof typographyProps> {
  asChild?: boolean
}

function Typography({
  className,
  variant = 'p',
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={typographyProps({variant, className})}
      {...props}
    />
  )
}

Typography.displayName = 'Typography'

export {Typography}
