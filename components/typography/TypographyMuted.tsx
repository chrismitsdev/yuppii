import {cn} from '@/lib/utils'

const TypographyMuted = ({className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p 
    className={cn(
      'text-sm text-accent/50',
      className
    )} 
    {...props}
  />
)

TypographyMuted.displayName = 'Typography Muted'

export {TypographyMuted}