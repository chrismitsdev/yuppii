import {NextResponse} from 'next/server'
import {getTranslator} from 'next-intl/server'

const FORMSPARK_URL = process.env.FORMSPARK_ACTION_URL as string

export async function POST(request: Request, {params: {locale}}: Params) {
  const t = await getTranslator(locale, 'Contact.Section1.Form')
  const {name, email, phone, feedback} = await request.json() as FormValues

  const response = await fetch(FORMSPARK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      phone: Number(phone),
      feedback
    })
  })

  let status: SubmissionStatus = {
    ok: response.ok,
    message: response.ok ? t('success') : t('error')
  }

  return NextResponse.json(status)
}