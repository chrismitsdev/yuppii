import * as React from 'react'
import {Input} from '@/components/ui/Input'
import {AlertTriangle} from 'lucide-react'
import {cn} from '@/lib/utils'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'field'
  errors?: string
}

const FormField = React.forwardRef<
  HTMLInputElement,
  FormFieldProps
>(({label, variant = 'field', className, errors, id, ...props}, ref) => {
  return (
    <div 
      className={cn(
        'relative px-3 py-4 bg-secondary/50 border border-secondary rounded focus-within:bg-secondary transition group',
        className
      )}
    >
      {label && (
        <label 
          htmlFor={id} 
          className='flex items-center font-medium text-sm sm:text-base [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:mb-[3px] [&>svg]:mr-1.5 group-focus-within:font-semibold transition-[font-weight] duration-300'
        >
          {label}
        </label>
      )}
      <Input 
        id={id}
        className='px-5'
        variant={variant}
        ref={ref}
        {...props}
      />
      {errors && (
        <span className='absolute bottom-1 right-3 flex items-center text-[10px] sm:text-xs font-bold [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:mb-[3px] [&>svg]:mr-1'>
          <AlertTriangle />
          {errors}
        </span>
      )}
    </div>
  )
})

FormField.displayName = 'FormField'

export {FormField}