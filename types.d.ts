type Messages = typeof import('./messages/gr.json')
declare interface IntlMessages extends Messages {}

type Params = {
  params: {
    locale: string
  }
}

type HeaderLink = {
  href: string,
  label: string,
  icon?: React.ReactElement
}

type Game = {
  value: string
  label: string
  description?: string
}

type MenuItem = {
  name: string
  category: string
  description: Array<string> | null
  price: number
}

type FormValues = {
  name: string
  email: string,
  phone: string
  feedback?: string
}

type SubmissionStatus = {
  ok: boolean
  message: string
}

type Coords = {
  lat: number,
  lon: number
}