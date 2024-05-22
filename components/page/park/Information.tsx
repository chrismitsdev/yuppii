import {getTranslations} from 'next-intl/server'
import Image from 'next/image'
import {TypographyH4} from '@/components/typography/TypographyH4'
import {TypographyP} from '@/components/typography/TypographyP'
import * as aeroImages from '@/public/park/information'

async function Information({locale}: Locale) {
  const t = await getTranslations({locale, namespace: 'Park.Section1'})

  return (
    <article className='flex justify-between gap-y-12 gap-x-20 flex-wrap md:flex-nowrap'>
      <div className='w-full space-y-4'>
        <Image 
          className='w-full h-auto rounded-lg'
          src={aeroImages.aero1}
          alt='Yuppii Luna Park aero photo 1'
          sizes='(min-width: 1100px) 456px, (min-width: 780px) calc(40.67vw + 17px), calc(100vw - 32px)'
          placeholder='blur'
        />
        <div className='space-y-2'>
          <TypographyH4>
            {t('Information.Info1.Title')}
          </TypographyH4>
          <TypographyP className='text-justify text-sm md:text-base'>
            {t('Information.Info1.Content')}
          </TypographyP>
        </div>
      </div>
      <div className='w-full space-y-4'>
        <Image 
          className='w-full h-auto rounded-lg'
          src={aeroImages.aero2}
          alt='Yuppii Luna Park aero photo 2'
          sizes='(min-width: 1100px) 456px, (min-width: 780px) calc(40.67vw + 17px), calc(100vw - 32px)'
          placeholder='blur'
        />
        <div className='space-y-2'>
          <TypographyH4>
            {t('Information.Info2.Title')}
          </TypographyH4>
          <TypographyP className='text-justify text-sm md:text-base'>
            {t('Information.Info2.Content')}
          </TypographyP>
        </div>
      </div>
    </article>
  )
}

Information.displayName = 'Information'

export {Information}