import {useLocale, useTranslations} from 'next-intl'
import * as maps from '@/public/park/map'
import {Section} from '@/src/components/section'
import {CustomImage} from '@/src/components/ui/custom-image'

const imageMap = {
  el: maps.mapEl,
  en: maps.mapEn
}

function ParkMap() {
  const t = useTranslations('Pages.Park.ParkMap')
  const locale = useLocale()

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <figure>
          <CustomImage
            className='rounded shadow-md'
            src={imageMap[locale]}
            alt='Yuppii Luna Park map'
            sizes='(min-width: 1000px) 1000px, calc(100vw - 24px)'
          />
        </figure>
      </article>
    </Section>
  )
}

ParkMap.displayName = 'ParkMap'

export {ParkMap}
