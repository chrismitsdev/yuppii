import type {LucideProps} from 'lucide-react'
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
}) => {
  const locale = useLocale()
  const baseClass =
    'pt-1 pb-3 w-full leading-6 focus:outline-none disabled:cursor-not-allowed'

  return (
    <div
      className={cn(
        'p-3 relative bg-secondary/40 border border-secondary rounded-lg shadow-md transition sm:p-4',
        disabled && 'opacity-50'
      )}
    >
      <div className='pb-1 flex items-center gap-2'>
        <Icon size={16} />
        <label
          className='mt-0.5 grow text-sm uppercase font-bold leading-5 tracking-wider'
          htmlFor={id}
          lang={isoLocaleMap[locale]}
          aria-disabled={disabled}
        >
          {label}
        </label>
        {error && (
          <Typography
            className='leading-5 font-semibold text-red-600 tracking-wide'
            variant='tiny'
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
