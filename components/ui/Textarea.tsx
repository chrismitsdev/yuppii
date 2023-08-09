import * as React from 'react'
import {cn} from '@/lib/utils'


export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement, 
  TextareaProps
>(({className, ...props}, ref) => (
  <textarea
    className={cn(
      'px-3 py-[7px] block w-full rounded-md border border-transparent text-base font-semibold placeholder:font-medium focus-visible:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 transition scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/50 scrollbar-thumb-rounded-md',
      className
    )}
    ref={ref}
    {...props}
  />
))

Textarea.displayName = 'Textarea'

export {Textarea}
