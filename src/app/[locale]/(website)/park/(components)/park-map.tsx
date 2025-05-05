import Image from 'next/image'
import {useTranslations, useLocale} from 'next-intl'
import {Section} from '@/src/components/section'
import * as maps from '@/public/park/map'

const imageMap = {
  gr: maps.mapGr,
  en: maps.mapEn
}

const ParkMap: React.FC = () => {
  const t = useTranslations('Pages.Park.ParkMap')
  const locale = useLocale()

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <figure>
          <Image
            className='rounded shadow-md'
            src={imageMap[locale]}
            alt='Yuppii Luna Park map'
            placeholder='blur'
            sizes='(min-width: 1000px) 1000px,
              calc(100vw - 24px)'
          />
        </figure>
      </article>
    </Section>
  )
}

ParkMap.displayName = 'ParkMap'

export {ParkMap}
