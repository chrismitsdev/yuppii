import {cn} from '@/lib/utils'

const TypographyH3 = ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight', 
      className
    )}
    {...props}
  />
)

TypographyH3.displayName = 'Typography H3'

export {TypographyH3}