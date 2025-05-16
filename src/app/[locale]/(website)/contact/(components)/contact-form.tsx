'use client'

import * as React from 'react'
import {useTranslations, useLocale} from 'next-intl'
import {toast} from 'react-hot-toast'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageSquareIcon,
  SendHorizonalIcon,
  LoaderCircleIcon
} from 'lucide-react'
import {type ContactFormActionState, contactFormAction} from '@/src/lib/actions'
import {Section} from '@/src/components/section'
import {FormField} from '@/src/components/ui/form-field'
import {Button} from '@/src/components/ui/button'

const initialState: ContactFormActionState = {
  data: {
    fullname: '',
    email: '',
    phone: '',
    message: ''
  },
  errors: {},
  ok: null
}

const ContactForm: React.FC = () => {
  const locale = useLocale()
  const [state, action, isPending] = React.useActionState(
    contactFormAction.bind(null, locale),
    initialState
  )
  const t = useTranslations('Pages.Contact.ContactForm')

  React.useEffect(
    function () {
      if (state.ok === null) return

      if (state.ok) {
        toast.success(t('toast.success.description'))
      } else if (!state.ok) {
        toast.error(t(`toast.error.${state.type}.description`))
      }
    },
    [state]
  )

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <form
          action={action}
          noValidate
        >
          <div className='mb-6 space-y-6'>
            <FormField
              icon={UserIcon}
              label={t('fields.fullname')}
              defaultValue={state.data.fullname}
              error={state.errors.fullname}
              disabled={isPending}
              id='fullname'
              name='fullname'
              type='text'
              autoComplete='name'
            />
            <FormField
              icon={MailIcon}
              label={t('fields.email')}
              defaultValue={state.data.email}
              error={state.errors.email}
              disabled={isPending}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
            />
            <FormField
              icon={PhoneIcon}
              label={t('fields.phone')}
              defaultValue={state.data.phone}
              error={state.errors.phone}
              disabled={isPending}
              id='phone'
              name='phone'
              type='tel'
              autoComplete='tel'
            />
            <FormField
              icon={MessageSquareIcon}
              label={t('fields.message')}
              defaultValue={state.data.message}
              error={state.errors.message}
              disabled={isPending}
              id='message'
              name='message'
              fieldType='textarea'
            />
          </div>
          <div className='flex sm:justify-end'>
            <Button
              className='w-full sm:w-auto'
              size='lg'
              locale={locale}
              disabled={isPending}
            >
              <span>{t('submit')}</span>
              {isPending ? (
                <LoaderCircleIcon className='size-4 animate-spin' />
              ) : (
                <SendHorizonalIcon className='size-4' />
              )}
            </Button>
          </div>
        </form>
      </article>
    </Section>
  )
}

ContactForm.displayName = 'ContactForm'

export {ContactForm}
