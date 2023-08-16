import React from 'react'
import {cn} from '@/lib/utils'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div 
    className={cn(
      'container max-w-5xl', 
      className
    )} 
    ref={ref} 
    {...props}
  />
))

Container.displayName = 'Container'

export {Container}