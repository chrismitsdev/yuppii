import {Header} from '@/components/Header'

export default function WebsiteLayout({children, params: {locale}}: {
  children: React.ReactNode, 
  params: {
    locale: string
  }
}) {
  return (
    <> 
      <Header locale={locale} />
      <main className='overflow-auto'>{children}</main>
    </>
  )
}