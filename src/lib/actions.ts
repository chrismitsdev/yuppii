'use server'

import {type Locale} from 'next-intl'
import {
  type InferOutput,
  flatten,
  safeParse,
  setSpecificMessage,
  object,
  pipe,
  string,
  trim,
  nonEmpty,
  minLength,
  maxLength,
  email,
  check,
  regex
} from 'valibot'
import {sendContactForm} from '@/src/lib/send-contact-form'

setSpecificMessage(string, 'Πρέπει να είναι γράμματα & αριθμοί', 'gr')
setSpecificMessage(string, 'Must contain only letters & numbers', 'en')
setSpecificMessage(nonEmpty, 'Υποχρεωτικό πεδίο', 'gr')
setSpecificMessage(nonEmpty, 'Mandatory field', 'en')
setSpecificMessage(minLength, 'Tουλάχιστον 5 χαρακτήρες', 'gr')
setSpecificMessage(minLength, 'At least 5 characters', 'en')
setSpecificMessage(maxLength, 'Μέγιστο 25 χαρακτήρες', 'gr')
setSpecificMessage(maxLength, 'Maximum 25 characters', 'en')
setSpecificMessage(email, 'Μη έγκυρη μορφή email', 'gr')
setSpecificMessage(email, 'Invalid email format', 'en')
setSpecificMessage(check, 'Αποδεκτά email: gmail, icloud, yahoo', 'gr')
setSpecificMessage(check, 'Accepted email: gmail, icloud, yahoo', 'en')
setSpecificMessage(regex, 'Μη έγκυρη μορφή αριθμού τηλεφώνου', 'gr')
setSpecificMessage(regex, 'Invalid phone number format', 'en')

const ContactFormSchema = object({
  fullname: pipe(string(), trim(), nonEmpty(), minLength(5), maxLength(25)),
  email: pipe(
    string(),
    trim(),
    nonEmpty(),
    email(),
    check((input) =>
      ['@gmail.com', '@icloud.com', '@yahoo.com'].some((provider) =>
        input.endsWith(provider)
      )
    )
  ),
  phone: pipe(string(), trim(), nonEmpty(), regex(/^\d{10,}$/)),
  message: string()
})

type ContactFormData = InferOutput<typeof ContactFormSchema>
type ContactFormErrors = Omit<
  Partial<Record<keyof ContactFormData, string>>,
  'message'
>
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
        phone: issues.nested?.phone?.[0]
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
