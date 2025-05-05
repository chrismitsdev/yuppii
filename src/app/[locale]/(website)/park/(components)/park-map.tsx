import Image from 'next/image'
import {useTranslations, useLocale} from 'next-intl'
import {Section} from '@/src/components/section'
import * as maps from '@/public/park/map'

const ParkMap: React.FC = () => {
  const t = useTranslations('Pages.Park.ParkMap')
  const locale = useLocale()

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <figure className='relative w-full rounded-md overflow-hidden shadow-md'>
          <Image
            src={locale === 'en' ? maps.mapEn : maps.mapGr}
            alt='Yuppii Luna Park map'
            sizes='(min-width: 1080px) 992px, calc(95.26vw - 18px)'
            placeholder='blur'
          />
        </figure>
      </article>
    </Section>
  )
}

ParkMap.displayName = 'ParkMap'

export {ParkMap}
