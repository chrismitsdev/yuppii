import {cn} from '@/src/lib/utils'

function Card({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'bg-secondary/50 border border-secondary rounded-lg shadow-md',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('px-6 pt-6 space-y-1.5 flex flex-col', className)}
      {...props}
    />
  )
}

function CardTitle({className, ...props}: React.ComponentPropsWithRef<'h3'>) {
  return (
    <h3
      className={cn('text-xl font-semibold font-display', className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<'p'>) {
  return (
    <p
      className={cn('text-lg', 'leading-8', 'text-accent', className)}
      {...props}
    />
  )
}

function CardBody({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('p-6 space-y-4', className)}
      {...props}
    />
  )
}

function CardFooter({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('px-6 pb-6 flex justify-end', className)}
      {...props}
    />
  )
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardBody.displayName = 'CardBody'
CardFooter.displayName = 'CardFooter'

export {Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle}
