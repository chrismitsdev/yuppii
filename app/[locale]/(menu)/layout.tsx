import {HeaderMenu} from '@/components/HeaderMenu'

export default function MenuLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  return (
    <> 
      <HeaderMenu locale={locale} />
      <main>{children}</main> 
    </>
  )
}