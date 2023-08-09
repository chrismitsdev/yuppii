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
}

const Form = ({locale}: FormProps) => {
  const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormValues>()
  const endpoint = `${DEV_MODE ? 'http://localhost:3000' : process.env.VERCEL_URL}/${locale}/api`

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
    <div className='max-w-5xl mx-auto'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField 
          id='name'
          type='text' 
          label={
            <>
              <User />
              <span>Ονοματεπώνυμο</span>
            </>
          }
          {...register('name', {
            required: {
              value: true,
              message: 'Υποχρεωτικό πεδίο'
            },
            minLength: {
              value: 5,
              message: 'Το όνομα πρέπει να είναι 5-20 χαρακτήρες.'
            },
            maxLength: {
              value: 20,
              message: 'Το όνομα πρέπει να είναι 5-20 χαρακτήρες.'
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
              <span>Διεύθυνση email</span>
            </>
          }
          {...register('email', {
            required: {
              value: true,
              message: 'Υποχρεωτικό πεδίο'
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Μη έγκυρη μορφή email'
            },
            validate: {
              whitelistedProviders: (fieldValue) => {
                return (
                  fieldValue.endsWith('@gmail.com') || 
                  fieldValue.endsWith('@yahoo.com') || 
                  fieldValue.endsWith('@outlook.com') ||
                  fieldValue.endsWith('@hotmail.com') ||
                  fieldValue.endsWith('@icloud.com') ||
                  'Aυτός ο πάροχος δεν υποστηρίζεται'
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
              <span>Αριθμός τηλεφώνου</span>
            </>
          }
          {...register('phone', {
            required: {
              value: true,
              message: 'Υποχρεωτικό πεδίο'
            },
            pattern: {
              value: /^(2\d|69)\d{8}$/g,
              message: 'Μη έγκυρη μορφή τηλεφώνου'
            }
          })}
          errors={errors.phone?.message}
        />
        <div className='relative px-3 py-4 bg-secondary/50 rounded focus-within:bg-secondary transition group'>
          <label 
            htmlFor='feedback' 
            className='flex items-center font-medium text-sm sm:text-base [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:mb-[3px] [&>svg]:mr-1.5 group-focus-within:font-semibold transition-[font-weight] duration-300'
          >
            <PenSquare />
            <span>Το μήνυμά σας</span>
          </label>
          <Textarea 
            id='feedback' 
            rows={3}
            className={cn(inputVariants({variant: 'field', className: 'px-5 resize-none'}))}
            {...register('feedback', {
              required: {
                value: true,
                message: 'Υποχρεωτικό πεδίο'
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

        <Button size='lg' type='submit' className='self-end min-w-[160px]' disabled={isSubmitting}>
          {isSubmitting 
            ? (
              <>
                <span>Αποστολή</span>
                <Loader2 className='animate-spin'/>
              </>
            ) 
            : (
              <>
              <span>Υποβολη</span>
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