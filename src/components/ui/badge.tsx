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
        'px-2 py-0.5 inline-flex justify-center items-center bg-accent text-accent-foreground rounded text-xs font-bold font-display',
        className
      )}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

export {Badge}
