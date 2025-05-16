import * as React from 'react'
import {type LucideProps} from 'lucide-react'
import {useLocale} from 'next-intl'
import {cn, isoLocaleMap} from '@/src/lib/utils'
import {Typography} from '@/src/components/ui/typography'

interface FormFieldProps {
  icon: React.ComponentType<LucideProps>
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

const FormField: React.FC<FormFieldProps> = ({
  icon,
  label,
  fieldType = 'input',
  id,
  name,
  defaultValue,
  disabled = false,
  type = 'text',
  autoComplete,
  error
}) => {
  const locale = useLocale()
  const baseClass =
    'pt-0.5 pl-0 sm:pl-5.5 mb-3 w-full leading-6 focus:outline-none disabled:cursor-not-allowed'

  return (
    <div
      className={cn(
        'p-4 relative bg-secondary/40 border border-secondary rounded-lg shadow-md transition',
        disabled && 'opacity-50'
      )}
    >
      <div className='pb-0.5 flex items-center gap-1.5'>
        {React.createElement(icon, {size: 16})}
        <label
          className='mt-1 grow text-sm uppercase font-bold leading-5 tracking-wider'
          htmlFor={id}
          lang={isoLocaleMap[locale]}
          aria-disabled={disabled}
        >
          {label}
        </label>
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

      {error && (
        <div className='absolute bottom-0 left-4 sm:left-9.5'>
          <Typography
            className='font-semibold text-red-800'
            variant='tiny'
          >
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}

FormField.displayName = 'FormField'

export {FormField}
