import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {CustomImage} from '@/src/components/ui/custom-image'
import {Typography} from '@/src/components/ui/typography'
import {parkImageList} from '@/public/park/information'

const ParkInfo: React.FC = () => {
  const t = useTranslations('Pages.Park.ParkInfo')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article className='grid gap-10 sm:grid-cols-2'>
        <div className='space-y-6'>
          <CustomImage
            className='rounded w-full'
            src={parkImageList[0]}
            alt='Yuppii Luna Park aero photo 1'
            sizes='(min-width: 1000px) 480px, calc(100vw - 24px)'
          />
          <div className='space-y-4 text-center sm:text-left'>
            <Typography variant='lead'>
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
          <CustomImage
            className='rounded w-full'
            src={parkImageList[1]}
            alt='Yuppii Luna Park aero photo 2'
            sizes='(min-width: 1000px) 480px, calc(100vw - 24px)'
          />
          <div className='space-y-4 text-center sm:text-left'>
            <Typography variant='lead'>
              {t('information.info2.title')}
            </Typography>
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
