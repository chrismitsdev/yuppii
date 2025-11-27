'use server'

import type {Locale} from 'next-intl'
import {
  check,
  email,
  flatten,
  type InferOutput,
  maxLength,
  minLength,
  nonEmpty,
  object,
  pipe,
  regex,
  safeParse,
  setSpecificMessage,
  string,
  trim
} from 'valibot'
import {sendContactForm} from '@/src/lib/send-contact-form'
import {bannedKeywordPatterns} from '@/src/lib/utils'

setSpecificMessage(string, 'Πρέπει να είναι γράμματα & αριθμοί', 'gr')
setSpecificMessage(string, 'Must contain only letters & numbers', 'en')
setSpecificMessage(nonEmpty, 'Υποχρεωτικό πεδίο', 'gr')
setSpecificMessage(nonEmpty, 'Mandatory field', 'en')

function getValibotMessage(grMessage: string, enMessage: string) {
  return ({lang}: {lang?: string}) => (lang === 'gr' ? grMessage : enMessage)
}

const ContactFormSchema = object({
  fullname: pipe(
    string(),
    nonEmpty(),
    trim(),
    minLength(
      5,
      getValibotMessage('Tουλάχιστον 5 χαρακτήρες', 'At least 5 characters')
    ),
    maxLength(
      25,
      getValibotMessage('Μέγιστο 25 χαρακτήρες', 'Maximum 25 characters')
    )
  ),
  email: pipe(
    string(),
    nonEmpty(),
    trim(),
    email(getValibotMessage('Μη έγκυρη μορφή email', 'Invalid email format')),
    check(
      (input) =>
        ['@gmail.com', '@icloud.com', '@yahoo.com'].some((provider) =>
          input.endsWith(provider)
        ),
      getValibotMessage(
        'Αποδεκτοί πάροχοι email: gmail, icloud, yahoo',
        'Accepted email providers: gmail, icloud, yahoo'
      )
    )
  ),
  phone: pipe(
    string(),
    nonEmpty(),
    trim(),
    regex(
      /^\d{10,}$/,
      getValibotMessage(
        'Μη έγκυρη μορφή αριθμού τηλεφώνου',
        'Invalid phone number format'
      )
    )
  ),
  message: pipe(
    string(),
    nonEmpty(),
    trim(),
    check(
      (input) => !bannedKeywordPatterns.some((pattern) => pattern.test(input)),
      getValibotMessage(
        'Βρέθηκε ανεπιθύμητο μήνυμα. Δοκιμάστε να αναδιατυπώσετε.',
        'Spam-like message detected. Try rephrasing.'
      )
    )
  )
})

type ContactFormData = InferOutput<typeof ContactFormSchema>
type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

type ContactFormResponse =
  | {ok: null}
  | {ok: true}
  | {ok: false; type: 'validation' | 'api'}

export type ContactFormActionState = {
  data: ContactFormData
  errors: ContactFormErrors
} & ContactFormResponse

export async function contactFormAction(
  locale: Locale,
  _prevState: ContactFormActionState,
  formData: FormData
): Promise<ContactFormActionState> {
  const data = Object.fromEntries(formData) as ContactFormData
  const result = safeParse(ContactFormSchema, data, {lang: locale})

  if (!result.success) {
    const issues = flatten<typeof ContactFormSchema>(result.issues)

    return {
      data,
      errors: {
        fullname: issues.nested?.fullname?.[0],
        email: issues.nested?.email?.[0],
        phone: issues.nested?.phone?.[0],
        message: issues.nested?.message?.[0]
      },
      ok: false,
      type: 'validation'
    }
  }

  const error = await sendContactForm(result.output)
  if (error) {
    return {
      data: result.output,
      errors: {},
      ok: false,
      type: 'api'
    }
  }

  return {
    data: {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    },
    errors: {},
    ok: true
  }
}
