import {cn} from '@/lib/utils'

const TypographyLarge = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'text-lg font-semibold',
      className
    )}
    {...props}
  />
)

TypographyLarge.displayName = 'Typography Large'

export {TypographyLarge}