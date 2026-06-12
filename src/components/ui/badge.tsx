import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'

interface BadgeProps extends React.ComponentPropsWithRef<'div'> {
  asChild?: boolean
}

function Badge({className, asChild = false, ...props}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        'px-2 py-1 inline-flex justify-center items-center bg-primary text-primary-foreground rounded text-xs font-bold font-display tracking-wider',
        className
      )}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

export {Badge}
