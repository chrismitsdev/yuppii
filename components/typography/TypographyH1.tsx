import {cn} from '@/lib/utils'

const TypographyH1 = ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', 
      className
    )}
    {...props}
  />
)

TypographyH1.displayName = 'Typography H1'

export {TypographyH1}