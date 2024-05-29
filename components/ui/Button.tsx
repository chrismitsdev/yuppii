import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'
 
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md ring-0 outline-none text-sm font-bold uppercase transition-colors disabled:pointer-events-none disabled:opacity-30 [&>svg:not(:only-child)]:w-4 [&>svg:not(:only-child)]:h-4 [&>svg:not(:only-child)]:mb-[4px] [&>svg:not(:only-child):first-child]:mr-2 [&>svg:not(:only-child):last-child]:ml-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/75',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/75',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/75',
        outline: 'bg-secondary/50 text-secondary-foreground border border-secondary hover:bg-secondary',
        ['ghost-secondary']: 'hover:bg-secondary hover:text-secondary-foreground',
        ['ghost-accent']: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        primary: 'px-4 py-2 h-10',
        sm: 'px-3 h-9',
        lg: 'px-8 h-11',
        icon: 'w-10 h-10',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'primary',
    }
  }
)
 
export interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
 
const Button = React.forwardRef<
  HTMLButtonElement, 
  ButtonProps
>(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonVariants({variant, size, className}))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'
 
export {Button, buttonVariants}