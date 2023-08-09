import {cn} from '@/lib/utils'

const TypographyP = ({className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p 
    className={cn(
      'leading-6', 
      className
    )}
    {...props}
  />
)

TypographyP.displayName = 'Typography P'

export {TypographyP}