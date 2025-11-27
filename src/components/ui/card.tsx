import type * as React from 'react'
import {cn} from '@/src/lib/utils'

const Card: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-secondary/40 border border-secondary rounded-lg shadow-md',
        className
      )}
      {...props}
    />
  )
}

const CardHeader: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-6 space-y-1.5 flex flex-col', className)}
      {...props}
    />
  )
}

const CardTitle: React.FC<React.ComponentPropsWithRef<'h3'>> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={cn('text-xl font-semibold ', className)}
      {...props}
    />
  )
}

const CardDescription: React.FC<React.ComponentPropsWithRef<'p'>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn('text-lg', 'leading-8', 'text-accent', className)}
      {...props}
    />
  )
}

const CardContent: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-6 space-y-4', className)}
      {...props}
    />
  )
}

const CardFooter: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-6 pt-0 flex justify-end', className)}
      {...props}
    />
  )
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
