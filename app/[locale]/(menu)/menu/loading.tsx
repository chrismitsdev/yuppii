import {Section} from '@/components/Section'
import {LoaderCircle} from 'lucide-react'

export default function Loading() {
  return (
    <Section className='h-full flex items-center justify-center'>
      <LoaderCircle 
        className='animate-spin text-secondary h-1/2 w-1/2' 
        strokeWidth={1.5} 
      />
    </Section>
  )
}