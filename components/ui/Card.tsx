import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn(
      'rounded-lg border border-secondary bg-secondary/40 shadow-md', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 p-6', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
  <h3
    className={cn(
      'text-xl font-semibold leading-none tracking-tight', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
  <p
    className={cn(
      'text-base text-accent', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div 
    className={cn(
      'p-6 pt-0 space-y-1.5', 
      className
    )} 
    ref={ref} 
    {...props} 
  />
))

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    className={cn(
      'flex items-center p-6 pt-0', 
      className
    )}
    ref={ref}
    {...props}
  />
))

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export {
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent
}
