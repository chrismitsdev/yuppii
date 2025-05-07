import {Resend} from 'resend'
import {type ContactFormActionState} from '@/src/lib/actions'
import {ContactFormInternal} from '@/src/components/email/contact-form-internal'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(
  formData: ContactFormActionState['data']
) {
  try {
    const {error} = await resend.emails.send({
      from: 'Yuppii Luna Park <info@moccaliving.com>',
      subject: 'Νέα φόρμα επικοινωνίας',
      react: ContactFormInternal(formData) as React.JSX.Element,
      ...(process.env.NODE_ENV === 'production'
        ? {
            to: 'mokalis@gmail.com',
            cc: 'chrismits88@gmail.com'
          }
        : {
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
