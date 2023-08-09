import {cn} from '@/lib/utils'

const TypographyH4 = ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-tight', 
      className
    )}
    {...props}
  />
)

TypographyH4.displayName = 'Typography H4'

export {TypographyH4}