import Link from 'next-intl/link'
import {useTranslations} from 'next-intl'
import {Button, buttonVariants} from '@/components/ui/Button'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/Card'
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from '@/components/ui/Dialog'
import {ChevronRight, Castle, PartyPopper, Store, Pin} from 'lucide-react'

const ModalCards = () => {
  const translate = useTranslations('Home.Section1.ModalCards')

  return (
    <article className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Castle strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {translate('Card1.Title')}
          </CardTitle>
          <CardDescription>
            {translate('Card1.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 lg:p-6 lg:pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent'>
                <span>{translate('Card1.DialogTrigger')}</span>
                <ChevronRight />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{translate('Card1.Title')}</DialogTitle>
                <DialogDescription>
                  {translate('Card1.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Link href='/games' className={buttonVariants({variant: 'accent'})}>
                  {translate('Card1.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <PartyPopper strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {translate('Card2.Title')}
          </CardTitle>
          <CardDescription>
            {translate('Card2.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 lg:p-6 lg:pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent'>
                <span>{translate('Card2.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{translate('Card2.Title')}</DialogTitle>
                <DialogDescription>
                  {translate('Card2.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Link href='/services' className={buttonVariants({variant: 'accent'})}>
                  {translate('Card2.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Store strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {translate('Card3.Title')}
          </CardTitle>
          <CardDescription>
            {translate('Card3.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 lg:p-6 lg:pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent'>
                <span>{translate('Card3.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{translate('Card3.Title')}</DialogTitle>
                <DialogDescription>
                  {translate('Card3.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Link href='/services' className={buttonVariants({variant: 'accent'})}>
                  {translate('Card3.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden'>
        <CardHeader className='p-0 bg-accent text-secondary h-48 flex justify-center items-center'>
          <Pin strokeWidth={0.5} size={124} />
        </CardHeader>
        <CardContent className='p-4 lg:p-6'>
          <CardTitle>
            {translate('Card4.Title')}
          </CardTitle>
          <CardDescription>
            {translate('Card4.Description')}
          </CardDescription>
        </CardContent>
        <CardFooter className='p-4 pt-0 lg:p-6 lg:pt-0 justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='accent'>
                <span>{translate('Card4.DialogTrigger')}</span>
                <ChevronRight className='ml-1 mb-[3px] h-4 w-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{translate('Card4.Title')}</DialogTitle>
                <DialogDescription>
                  {translate('Card4.DialogContent')}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Link href='/contact' className={buttonVariants({variant: 'accent'})}>
                  {translate('Card4.DialogTrigger')}
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </article>
  )
}

ModalCards.displayName = 'Modal Cards'

export {ModalCards}