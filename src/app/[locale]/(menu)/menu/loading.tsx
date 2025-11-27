import {LoaderCircle} from 'lucide-react'
import {Section} from '@/src/components/section'

export default function Loading() {
  return (
    <Section className='h-full flex items-start justify-center'>
      <LoaderCircle className='animate-spin text-secondary h-1/2 w-1/2' />
    </Section>
  )
}
