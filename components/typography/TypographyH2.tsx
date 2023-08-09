import {cn} from '@/lib/utils'

const TypographyH2 = ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 
    className={cn(
      'scroll-m-20 pb-2 text-3xl text-secondary font-bold tracking-tight transition-colors first:mt-0', 
      className
    )}
    {...props}
  />
)

TypographyH2.displayName = 'Typography H2'

export {TypographyH2}