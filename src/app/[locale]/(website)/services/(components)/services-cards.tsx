import {CakeIcon, HandshakeIcon, type LucideIcon} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card'

const data = [
  {key: 'card1', icon: CakeIcon},
  {key: 'card2', icon: HandshakeIcon}
] satisfies {
  key: keyof Messages['Pages']['Services']['ServicesCards']
  icon: LucideIcon
}[]

function ServicesCards() {
  const t = useTranslations('Pages.Services.ServicesCards')

  const renderedCards = data.map(({key, icon: Icon}) => {
    return (
      <Card
        key={key}
        className='bg-linear-to-br from-secondary/75 to-primary'
      >
        <CardHeader className='h-56'>
          <Icon className='size-24 m-auto' />
        </CardHeader>
        <CardBody>
          <CardTitle>{t(`${key}.title`)}</CardTitle>
          <CardDescription>{t.rich(`${key}.content`)}</CardDescription>
        </CardBody>
      </Card>
    )
  })

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid gap-10 sm:grid-cols-2'>{renderedCards}</article>
    </Section>
  )
}

ServicesCards.displayName = 'ServicesCards'

export {ServicesCards}
