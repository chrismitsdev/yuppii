import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'

interface ContainerProps extends React.ComponentPropsWithRef<'div'> {
  asChild?: boolean
}

function Container({className, asChild = false, ...props}: ContainerProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn('px-3 mx-auto container max-w-5xl', className)}
      {...props}
    />
  )
}

Container.displayName = 'Container'

export {Container}
