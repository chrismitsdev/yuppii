import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import type {Locale} from 'next-intl'
import type * as React from 'react'
import {cn, isoLocaleMap} from '@/src/lib/utils'

const typographyProps = cva(['block', 'text-inherit', 'transition-colors'], {
  variants: {
    variant: {
      h1: ['text-5xl', 'font-black'],
      h2: ['text-3xl', 'sm:text-4xl'],
      h3: ['text-3xl'],
      h4: ['text-2xl'],
      lead: ['text-xl'],
      large: ['text-lg', 'leading-8'],
      p: ['text-base'],
      small: ['text-sm'],
      tiny: ['text-xs']
    }
  },
  compoundVariants: [
    {variant: ['h2', 'h3', 'h4', 'lead'], className: 'font-semibold'},
    {variant: ['p', 'small', 'tiny'], className: 'leading-6'}
  ],
  defaultVariants: {
    variant: 'p'
  }
})

interface TypographyProps
  extends Omit<React.ComponentPropsWithRef<'span'>, 'color'>,
    VariantProps<typeof typographyProps> {
  locale?: Locale
  asChild?: boolean
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = 'p',
  asChild = false,
  locale,
  ...props
}) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(typographyProps({variant, className}))}
      {...(locale ? {lang: isoLocaleMap[locale]} : {})}
      {...props}
    />
  )
}

Typography.displayName = 'Typography'

export {Typography}
