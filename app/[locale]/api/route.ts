import {getTranslations} from 'next-intl/server'

const FORMSPARK_URL = process.env.FORMSPARK_ACTION_URL as string

export async function POST(request: Request, {params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: 'Contact.Section1.Form'})
  const {name, email, phone, feedback} = await request.json() as FormValues

  const res = await fetch(FORMSPARK_URL, {
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

  let status: SubmissionResponse = {
    ok: res.ok,
    message: res.ok ? t('success') : t('error')
  }

  return Response.json(status)
}