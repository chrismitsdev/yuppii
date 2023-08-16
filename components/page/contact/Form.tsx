'use client'

import {useForm} from 'react-hook-form'
import {toast} from 'react-hot-toast'
import {Button} from '@/components/ui/Button'
import {inputVariants} from '@/components/ui/Input'
import {FormField} from '@/components/ui/FormField'
import {Textarea} from '@/components/ui/Textarea'
import {User, Mail, Phone, PenSquare, SendHorizonal, AlertTriangle, Loader2} from 'lucide-react'
import {cn} from '@/lib/utils'

const DEV_MODE = process.env.NODE_ENV === 'development'

interface FormProps {
  locale: string
  translations: {
    name: {
      label: string
      required: string
      pattern: string
    }
    email: {
      label: string
      required: string
      pattern: string
      providers: string
    }
    phone: {
      label: string
      required: string
      pattern: string
    }
    feedback: {
      label: string
      required: string
    }
    button: {
      label: string
      loading: string
    }
  }
}

const Form = ({locale, translations}: FormProps) => {
  const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<FormValues>()
  const ORIGIN = DEV_MODE ? 'http://localhost:3000' : window.location.origin
  const endpoint = `${ORIGIN}/${locale}/api`

  const onSubmit = async (data: FormValues) => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const {ok, message} = await response.json() as SubmissionStatus
    
    if (ok) {
      toast.success(message)
      reset()
    } else {
      toast.error(message)
    }
  }

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField 
          id='name'
          type='text' 
          label={
            <>
              <User />
              <span>{translations.name.label}</span>
            </>
          }
          {...register('name', {
            required: {
              value: true,
              message: translations.name.required
            },
            minLength: {
              value: 5,
              message: translations.name.pattern
            },
            maxLength: {
              value: 20,
              message: translations.name.pattern
            }
          })}
          errors={errors.name?.message}
        />
        <FormField 
          id='email' 
          type='email' 
          label={
            <>
              <Mail />
              <span>{translations.email.label}</span>
            </>
          }
          {...register('email', {
            required: {
              value: true,
              message: translations.email.required
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: translations.email.pattern
            },
            validate: {
              whitelistedProviders: (fieldValue) => {
                return (
                  fieldValue.endsWith('@gmail.com') || 
                  fieldValue.endsWith('@yahoo.com') || 
                  fieldValue.endsWith('@outlook.com') ||
                  fieldValue.endsWith('@hotmail.com') ||
                  fieldValue.endsWith('@icloud.com') ||
                  translations.email.providers
                )
              }
            }
          })}
          errors={errors.email?.message}
        />
        <FormField 
          id='phone' 
          type='text' 
          label={
            <>
              <Phone />
              <span>{translations.phone.label}</span>
            </>
          }
          {...register('phone', {
            required: {
              value: true,
              message: translations.phone.required
            },
            pattern: {
              value: /^(2\d|69)\d{8}$/g,
              message: translations.phone.pattern
            }
          })}
          errors={errors.phone?.message}
        />
        <div className='relative px-3 py-4 bg-secondary/50 border border-secondary rounded focus-within:bg-secondary transition group'>
          <label 
            htmlFor='feedback' 
            className='flex items-center font-medium text-sm sm:text-base [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:mb-[3px] [&>svg]:mr-1.5 group-focus-within:font-semibold transition-[font-weight] duration-300'
          >
            <PenSquare />
            <span>{translations.feedback.label}</span>
          </label>
          <Textarea 
            id='feedback' 
            rows={3}
            className={cn(inputVariants({variant: 'field', className: 'px-5 resize-none'}))}
            {...register('feedback', {
              required: {
                value: true,
                message: translations.feedback.required
              }
            })}
          />
          {errors.feedback?.message && (
            <span 
              className='absolute bottom-1 right-3 flex items-center text-[10px] sm:text-xs font-bold [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:mb-[3px] [&>svg]:mr-1'
            >
              <AlertTriangle />
              {errors.feedback?.message}
            </span>
          )}
        </div>

        <Button variant='outline' size='lg' type='submit' className='self-end min-w-[180px]' disabled={isSubmitting}>
          {isSubmitting 
            ? (
              <>
                <span>{translations.button.loading}</span>
                <Loader2 className='animate-spin'/>
              </>
            ) 
            : (
              <>
                <span>{translations.button.label}</span>
                <SendHorizonal />
              </>
            )
          }
        </Button>
      </form>
    </div>
  )
}

Form.displayName = 'Form'

export {Form}