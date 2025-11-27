import {Resend} from 'resend'
import {ContactFormInternal} from '@/src/components/email/contact-form-internal'
import type {ContactFormActionState} from '@/src/lib/actions'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(
  formData: ContactFormActionState['data']
) {
  try {
    const {error} = await resend.emails.send({
      from: 'Yuppii Luna Park <info@moccaliving.com>',
      react: ContactFormInternal(formData) as React.JSX.Element,
      ...(process.env.NODE_ENV === 'production'
        ? {
            subject: 'Φόρμα επικοινωνίας - Yuppii Luna Park',
            to: 'mokalis@gmail.com',
            cc: 'chrismits88@gmail.com'
          }
        : {
            subject: 'Φόρμα επικοινωνίας - Yuppii Luna Park (Dev mode)',
            to: 'chrismits88@gmail.com'
          })
    })

    if (error) {
      console.error(error)
      return error
    }
  } catch (error) {
    console.error(`sendContactForm() catch block error: ${error}`)
  }
}
