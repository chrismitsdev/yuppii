type Messages = typeof import('./messages/gr.json')
declare interface IntlMessages extends Messages {}

type Params = {
  params: {
    locale: string
  }
}

type MenuParams = {
  params: {
    locale: string
    category: string
  }
}

type MenuItem = {
  name: string
  category: string
  description: Array<string> | null
  price: number
}

type MenuProduct = {
  name: string
  description: string[] | null
  price: string
  disabled: boolean
  subcategory: string | null
}

// type MenuProduct = {
//   name: string
//   description: string[] | null
//   price: number
// }

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

type FormValues = {
  name: string
  email: string,
  phone: string
  feedback?: string
}

type SubmissionResponse = {
  ok: boolean
  message: string
}