import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const inputVariants = cva(
  'px-3 py-[7px] w-full rounded-md border border-transparent text-base font-semibold placeholder:font-medium focus-visible:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 transition',
  {
    variants: {
      variant: {
        primary: 'border border-primary bg-primary/50 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary selection:bg-accent',
        secondary: 'border border-secondary bg-secondary/50 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:bg-secondary selection:bg-accent',
        accent: 'border border-accent bg-accent/50 text-accent-foreground placeholder:text-accent-foreground/50 focus:bg-accent selection:bg-secondary',
        field: 'py-0 bg-transparent placeholder:text-accent-foreground/50 selection:bg-accent'
      }
    },
    defaultVariants: {
      variant: 'secondary'
    }
  }
)

export interface InputProps extends 
  React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<
  HTMLInputElement, 
  InputProps
>(({variant, className, ...props}, ref) => (
  <input
    className={cn(inputVariants({variant, className}))}
    ref={ref}
    {...props}
  />
))

Input.displayName = 'Input'

export {Input, inputVariants}
