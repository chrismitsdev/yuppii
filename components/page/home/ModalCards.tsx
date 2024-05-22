import {getTranslations} from 'next-intl/server'
import {Link} from '@/navigation'
import {Button, buttonVariants} from '@/components/ui/Button'
import {
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter
} from '@/components/ui/Card'
import {
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/Dialog'
import {
  ChevronRight, 
  Castle, 
  PartyPopper, 
  Store, 
  Pin
} from 'lucide-react'

async function ModalCards({locale}: Locale) {
  const t = await getTranslations({locale, namespace: 'Home.Section1.ModalCards'})

  return (
    <article className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Castle strokeWidth={1} size={82} />
        </CardHeader>
        <CardContent className='p-4'>
          <CardTitle>
            {t('Card1.Title')}
          </CardTitle>
          <CardDescription>
            {t('Card1.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent' size='sm'>
                <span>{t('Card1.DialogTrigger')}</span>
                <ChevronRight />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('Card1.Title')}</DialogTitle>
                <DialogDescription>
                  {t('Card1.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className='sm:flex sm:justify-end'>
                <Link href='/games' className={buttonVariants({variant: 'accent'})}>
                  {t('Card1.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <PartyPopper strokeWidth={1} size={82} />
        </CardHeader>
        <CardContent className='p-4'>
          <CardTitle>
            {t('Card2.Title')}
          </CardTitle>
          <CardDescription>
            {t('Card2.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent' size='sm'>
                <span>{t('Card2.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('Card2.Title')}</DialogTitle>
                <DialogDescription>
                  {t('Card2.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className='sm:flex sm:justify-end'>
                <Link href='/services' className={buttonVariants({variant: 'accent'})}>
                  {t('Card2.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Store strokeWidth={1} size={82} />
        </CardHeader>
        <CardContent className='p-4'>
          <CardTitle>
            {t('Card3.Title')}
          </CardTitle>
          <CardDescription>
            {t('Card3.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent' size='sm'>
                <span>{t('Card3.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('Card3.Title')}</DialogTitle>
                <DialogDescription>
                  {t('Card3.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className='sm:flex sm:justify-end'>
                <Link href='/services' className={buttonVariants({variant: 'accent'})}>
                  {t('Card3.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Pin strokeWidth={1} size={82} />
        </CardHeader>
        <CardContent className='p-4'>
          <CardTitle>
            {t('Card4.Title')}
          </CardTitle>
          <CardDescription>
            {t('Card4.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent' size='sm'>
                <span>{t('Card4.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('Card4.Title')}</DialogTitle>
                <DialogDescription>
                  {t('Card4.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className='sm:flex sm:justify-end'>
                <Link href='/contact' className={buttonVariants({variant: 'accent'})}>
                  {t('Card4.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </article>
  )
}

ModalCards.displayName = 'ModalCards'

export {ModalCards}