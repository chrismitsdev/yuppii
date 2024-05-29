import Link from 'next/link'
import {useTranslations} from 'next-intl'
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/Card'
import {Cake, HeartHandshake} from 'lucide-react'

function Secondaries() {
  const t = useTranslations('Services.Section2.Cards')

  return (
    <article className='grid grid-cols-1 sm:grid-cols-5 gap-4'>
      <Card className='overflow-hidden sm:col-span-2'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Cake strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {t('Card1.title')}
          </CardTitle>
          <CardDescription>
            {t('Card1.content')}
          </CardDescription>
        </CardContent>
      </Card>
      <Card className='overflow-hidden sm:col-span-3'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <HeartHandshake strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {t('Card2.title')}
          </CardTitle>
          <CardDescription>
            {t.rich('Card2.content', {
              link: (chunks) => (
                <Link className='font-bold' href='tel:+306973433980' target='_blank'> 
                  {chunks}
                </Link>
              )
            })}
          </CardDescription>
        </CardContent>
      </Card>
    </article>
  )
}

Secondaries.displayName = 'Secondaries'

export {Secondaries}