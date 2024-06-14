import {Section} from '@/components/Section'
import {LoaderCircle} from 'lucide-react'

export default function Loading() {
  return (
    <Section className='flex justify-center'>
      <LoaderCircle className='animate-spin text-secondary h-10 w-10' />
    </Section>
  )
}