import Image from 'next/image'
import {useTranslations} from 'next-intl'
import espaBanner from '@/public/espa/espa-banner.webp'
import espaPoster from '@/public/espa/espa-poster.webp'

function EspaBanner() {
  const t = useTranslations('Components.EspaBanner')

  return (
    <a
      className='mb-4 block w-fit sm:ml-auto focus-visible:outline-2 focus-visible:outline-offset-2'
      href={espaPoster.src}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        className='sm:max-w-70'
        src={espaBanner}
        alt={t('label')}
      />
    </a>
  )
}

EspaBanner.displayName = 'EspaBanner'

export {EspaBanner}
