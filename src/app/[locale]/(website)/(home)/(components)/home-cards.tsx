import {useTranslations} from 'next-intl'
import {
  ChevronRightIcon,
  CastleIcon,
  PartyPopperIcon,
  FootprintsIcon,
  XIcon
} from 'lucide-react'
import {ClientLink} from '@/src/components/client-link'
import {Section} from '@/src/components/section'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/src/components/ui/card'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/src/components/ui/dialog'
import {Button} from '@/src/components/ui/button'

const HomeCards: React.FC = () => {
  const t = useTranslations('Pages.Home.HomeCards')

  return (
    <Section
      className='first:pt-20'
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid gap-10 sm:grid-cols-2'>
        <Card className='bg-gradient-to-b from-secondary/75 to-secondary/25'>
          <CardHeader className='pb-0 h-56 items-center justify-center'>
            <CastleIcon size={96} />
          </CardHeader>
          <CardContent>
            <CardTitle>{t('card1.title')}</CardTitle>
            <CardDescription>{t('card1.description')}</CardDescription>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='accent'>
                  <span>{t('card1.trigger')}</span>
                  <ChevronRightIcon />
                </Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t('card1.title')}</DialogTitle>
                    <DialogDescription>{t('card1.content')}</DialogDescription>
                  </DialogHeader>
                  <DialogFooter className='flex justify-end'>
                    <Button asChild>
                      <ClientLink href='/services'>
                        {t('card1.trigger')}
                      </ClientLink>
                    </Button>
                  </DialogFooter>
                  <DialogClose
                    className='absolute top-2 right-2'
                    asChild
                  >
                    <Button
                      variant='ghost'
                      size='icon'
                    >
                      <XIcon />
                    </Button>
                  </DialogClose>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </CardFooter>
        </Card>

        <Card className='bg-gradient-to-b from-secondary/75 to-secondary/25'>
          <CardHeader className='pb-0 h-56 items-center justify-center'>
            <PartyPopperIcon size={96} />
          </CardHeader>
          <CardContent>
            <CardTitle>{t('card2.title')}</CardTitle>
            <CardDescription>{t('card2.description')}</CardDescription>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='accent'>
                  <span>{t('card2.trigger')}</span>
                  <ChevronRightIcon />
                </Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t('card2.title')}</DialogTitle>
                    <DialogDescription>{t('card2.content')}</DialogDescription>
                  </DialogHeader>
                  <DialogFooter className='flex justify-end'>
                    <Button asChild>
                      <ClientLink href='/services'>
                        {t('card2.trigger')}
                      </ClientLink>
                    </Button>
                  </DialogFooter>
                  <DialogClose
                    className='absolute top-2 right-2'
                    asChild
                  >
                    <Button
                      variant='ghost'
                      size='icon'
                    >
                      <XIcon />
                    </Button>
                  </DialogClose>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </CardFooter>
        </Card>

        <Card className='bg-gradient-to-b from-secondary/75 to-secondary/25 sm:col-span-2'>
          <CardHeader className='pb-0 h-56 items-center justify-center'>
            <FootprintsIcon size={96} />
          </CardHeader>
          <CardContent>
            <CardTitle>{t('card3.title')}</CardTitle>
            <CardDescription>{t('card3.description')}</CardDescription>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='accent'>
                  <span>{t('card3.trigger')}</span>
                  <ChevronRightIcon />
                </Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t('card3.title')}</DialogTitle>
                    <DialogDescription>{t('card3.content')}</DialogDescription>
                  </DialogHeader>
                  <DialogFooter className='flex justify-end'>
                    <Button asChild>
                      <ClientLink href='/contact'>
                        {t('card3.trigger')}
                      </ClientLink>
                    </Button>
                  </DialogFooter>
                  <DialogClose
                    className='absolute top-2 right-2'
                    asChild
                  >
                    <Button
                      variant='ghost'
                      size='icon'
                    >
                      <XIcon />
                    </Button>
                  </DialogClose>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </CardFooter>
        </Card>
      </article>
    </Section>
  )
}

HomeCards.displayName = 'HomeCards'

export {HomeCards}
