import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {Typography} from '@/src/components/ui/typography'
import * as aeroImages from '@/public/park/information'

const ParkInfo: React.FC = () => {
  const t = useTranslations('Pages.Park.ParkInfo')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid gap-10 sm:grid-cols-2'>
        <div className='space-y-6'>
          <Image
            className='rounded'
            src={aeroImages.aero1}
            alt='Yuppii Luna Park aero photo 1'
            sizes='(min-width: 1100px) 456px, (min-width: 780px) calc(40.67vw + 17px), calc(100vw - 32px)'
            placeholder='blur'
          />
          <div className='space-y-4 text-center sm:text-left'>
            <Typography variant='h4'>
              {t('information.info1.title', {
                years: new Date().getFullYear() - 2011
              })}
            </Typography>
            <Typography variant='large'>
              {t('information.info1.content')}
            </Typography>
          </div>
        </div>
        <div className='space-y-6'>
          <Image
            className='rounded'
            src={aeroImages.aero2}
            alt='Yuppii Luna Park aero photo 2'
            sizes='(min-width: 1100px) 456px, (min-width: 780px) calc(40.67vw + 17px), calc(100vw - 32px)'
            placeholder='blur'
          />
          <div className='space-y-4 text-center sm:text-left'>
            <Typography variant='h4'>{t('information.info2.title')}</Typography>
            <Typography variant='large'>
              {t('information.info2.content')}
            </Typography>
          </div>
        </div>
      </article>
    </Section>
  )
}

ParkInfo.displayName = 'ParkInfo'

export {ParkInfo}
