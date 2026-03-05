import type {LucideIcon} from 'lucide-react'
import {Typography} from '@/src/components/ui/typography'
import {cn} from '@/src/lib/utils'

interface FormFieldProps {
  icon: LucideIcon
  label: string
  fieldType?: 'input' | 'textarea'
  id: string
  name: string
  defaultValue?: string
  type?: React.HTMLInputTypeAttribute
  autoComplete?: React.HTMLInputAutoCompleteAttribute
  disabled?: boolean
  error?: string
}

function FormField({
  icon: Icon,
  label,
  fieldType = 'input',
  id,
  name,
  defaultValue,
  disabled = false,
  type = 'text',
  autoComplete,
  error
}: FormFieldProps) {
  const baseClass =
    'pt-1 pb-3 w-full leading-6 focus:outline-none disabled:cursor-not-allowed'

  return (
    <div
      className={cn(
        'p-3 relative bg-secondary/40 border border-secondary rounded-lg shadow-md transition sm:p-4',
        disabled && 'opacity-50'
      )}
    >
      <div className='flex items-center gap-2'>
        <Icon className='w-4 h-lh' />
        <Typography
          className='grow'
          variant='small'
          asChild
        >
          <label htmlFor={id}>{label}</label>
        </Typography>
        {error && (
          <Typography
            className='text-red-600'
            variant='mini'
          >
            {error}
          </Typography>
        )}
      </div>

      {fieldType === 'input' ? (
        <input
          className={baseClass}
          id={id}
          name={name}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-disabled={disabled}
          type={type}
          autoComplete={autoComplete}
        />
      ) : (
        <textarea
          className={cn(baseClass, 'resize-none')}
          id={id}
          name={name}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-disabled={disabled}
          rows={4}
        />
      )}
    </div>
  )
}

FormField.displayName = 'FormField'

export {FormField}
