import {StarIcon} from 'lucide-react'
import {Container} from '@/src/components/container'
import {Separator} from '@/src/components/ui/separator'

function DecorativeDivider() {
  return (
    <Container asChild>
      <div className='my-4 flex items-center gap-6'>
        <Separator className='w-auto grow' />
        <div className='flex items-center gap-2 shrink'>
          <StarIcon className='size-4 fill-primary text-primary' />
          <StarIcon className='fill-primary text-primary' />
          <StarIcon className='size-4 fill-primary text-primary' />
        </div>
        <Separator className='w-auto grow' />
      </div>
    </Container>
  )
}

DecorativeDivider.displayName = 'DecorativeDivider'

export {DecorativeDivider}
