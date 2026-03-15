import {
  BabyIcon,
  FlameIcon,
  HeartIcon,
  LogOutIcon,
  RocketIcon,
  UsersIcon
} from 'lucide-react'
import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/src/components/ui/accordion'
import {Typography} from '@/src/components/ui/typography'

function ParkReasons() {
  const t = useTranslations('Pages.Park.ParkReasons')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <Accordion
          className='space-y-6'
          type='multiple'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              <RocketIcon />
              <Typography variant='lead'>
                {t('accordion.accordion1.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion1.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              <LogOutIcon />
              <Typography variant='lead'>
                {t('accordion.accordion2.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion2.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              <UsersIcon />
              <Typography variant='lead'>
                {t('accordion.accordion3.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion3.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              <FlameIcon />
              <Typography variant='lead'>
                {t('accordion.accordion4.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion4.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              <HeartIcon />
              <Typography variant='lead'>
                {t('accordion.accordion5.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion5.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              <BabyIcon />
              <Typography variant='lead'>
                {t('accordion.accordion6.title')}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='sm:pl-16'>
              <Typography variant='large'>
                {t('accordion.accordion6.content')}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </Section>
  )
}

ParkReasons.displayName = 'ParkReasons'

export {ParkReasons}
