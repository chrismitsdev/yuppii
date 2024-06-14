import {Section} from '@/components/Section'
import {LoaderCircle} from 'lucide-react'

export default function Loading() {
  return (
    <Section className='flex justify-center'>
      <LoaderCircle className='animate-spin text-secondary h-14 w-14' />
    </Section>
  )
}