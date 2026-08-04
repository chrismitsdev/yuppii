import {WebsiteHeader} from '@/src/components/website-header'

export default function WebsiteLayout({children}: LayoutProps<'/[locale]'>) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr]'>
      <WebsiteHeader withEspaBanner />
      {children}
    </div>
  )
}
