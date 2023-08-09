import {cn} from '@/lib/utils'

const TypographyLead = ({className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      'text-xl',
      className
    )}
    {...props}
  />
)

TypographyLead.displayName = 'Typography Lead'

export {TypographyLead}