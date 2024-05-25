type Messages = typeof import('./messages/gr.json')
declare interface IntlMessages extends Messages {}

type Locale = {
  locale: string
}

type MenuLocale = {
  locale: string
  category: string
}

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

type SubmissionResponse = {
  ok: boolean
  message: string
}

type Coords = {
  lat: number,
  lon: number
}

type LucideIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>

type LucideIcon2 = React.FunctionComponentElement<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>