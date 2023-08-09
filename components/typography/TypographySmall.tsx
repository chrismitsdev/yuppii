import {cn} from '@/lib/utils'

const TypographySmall = ({className, ...props}: React.HTMLAttributes<HTMLSpanElement>) => (
  <small
    className={cn(
      'text-sm font-light leading-none',
      className
    )}
    {...props}
  />
)

TypographySmall.displayName = 'Typography Small'

export {TypographySmall}