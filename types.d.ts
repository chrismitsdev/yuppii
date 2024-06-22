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

type Category = {
  name: string
  categoryName: string
  categoryNotes: string[] | null
  categoryProducts: {
    name: string
    price: string
    description: string[] | null
  }[]
  categoryIcon?: React.ReactElement
}

type MenuItem = {
  name: string
  category: string
  price: number
  description: string[] | null
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