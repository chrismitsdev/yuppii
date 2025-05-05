import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/src/lib/utils'

const Container: React.FC<
  React.ComponentPropsWithRef<'div'> & {
    asChild?: boolean
  }
> = ({className, asChild = false, ...props}) => {
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
