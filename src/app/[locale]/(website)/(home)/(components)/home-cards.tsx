import {
  CastleIcon,
  ChevronRightIcon,
  FootprintsIcon,
  type LucideIcon,
  PartyPopperIcon
} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {Button} from '@/src/components/ui/button'
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from '@/src/components/ui/dialog'
import {Link} from '@/src/i18n/navigation'
import {cn} from '@/src/lib/utils'

const data = [
  {key: 'card1', icon: CastleIcon, href: '/services'},
  {key: 'card2', icon: PartyPopperIcon, href: '/services'},
  {key: 'card3', icon: FootprintsIcon, href: '/contact'}
] satisfies {
  key: keyof Messages['Pages']['Home']['HomeCards']
  icon: LucideIcon
  href: string
}[]

function HomeCards() {
  const t = useTranslations('Pages.Home.HomeCards')

  const renderedCards = data.map(({key, icon: Icon, href}, i, a) => {
    const isLastCard = i === a.length - 1

    return (
      <Card
        key={key}
        className={cn(
          'bg-linear-to-br from-secondary/75 to-primary',
          isLastCard && 'sm:col-span-2'
        )}
      >
        <CardHeader className='h-56'>
          <Icon className='size-24 m-auto' />
        </CardHeader>
        <CardBody>
          <CardTitle>{t(`${key}.title`)}</CardTitle>
          <CardDescription>{t(`${key}.description`)}</CardDescription>
        </CardBody>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='secondary'>
                <span>{t('card1.trigger')}</span>
                <ChevronRightIcon />
              </Button>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay />
              <DialogContent>
                <DialogClose />
                <DialogHeader>
                  <DialogTitle>{t(`${key}.title`)}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <DialogDescription>{t(`${key}.content`)}</DialogDescription>
                </DialogBody>
                <DialogFooter>
                  <Button asChild>
                    <Link href={href}>{t('card1.trigger')}</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </DialogPortal>
          </Dialog>
        </CardFooter>
      </Card>
    )
  })

  return (
    <Section
      className='first:pt-20'
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid gap-10 sm:grid-cols-2'>{renderedCards}</article>
    </Section>
  )
}

HomeCards.displayName = 'HomeCards'

export {HomeCards}
