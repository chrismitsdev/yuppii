import Link from 'next/link'
import {useTranslations} from 'next-intl'
import {CakeIcon, HandshakeIcon} from 'lucide-react'
import {Section} from '@/src/components/section'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/src/components/ui/card'

const ServicesCards: React.FC = () => {
  const t = useTranslations('Pages.Services.ServicesCards')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid grid-cols-1 gap-10 sm:grid-cols-6'>
        <Card className='bg-gradient-to-b from-secondary/75 to-secondary/25 sm:col-span-2'>
          <CardHeader className='pb-0 h-56 items-center justify-center'>
            <CakeIcon size={96} />
          </CardHeader>
          <CardContent>
            <CardTitle>{t('cards.card1.title')}</CardTitle>
            <CardDescription>{t('cards.card1.content')}</CardDescription>
          </CardContent>
        </Card>

        <Card className='bg-gradient-to-b from-secondary/75 to-secondary/25 sm:col-span-4'>
          <CardHeader className='pb-0 h-56 items-center justify-center'>
            <HandshakeIcon size={96} />
          </CardHeader>
          <CardContent>
            <CardTitle>{t('cards.card2.title')}</CardTitle>
            <CardDescription>
              {t.rich('cards.card2.content', {
                link: (chunks) => (
                  <Link
                    className='font-bold'
                    href='tel:+306973433980'
                    target='_blank'
                  >
                    {chunks}
                  </Link>
                )
              })}
            </CardDescription>
          </CardContent>
        </Card>
      </article>
    </Section>
  )
}

ServicesCards.displayName = 'ServicesCards'

export {ServicesCards}
