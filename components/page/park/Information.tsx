import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {TypographyH4} from '@/components/typography/TypographyH4'
import {TypographyP} from '@/components/typography/TypographyP'
import * as images from '@/public/park/info'

const Information = () => {
  const translate = useTranslations('Park.Section1')

  return (
    <article className='flex justify-between gap-y-12 gap-x-20 flex-wrap md:flex-nowrap'>
      <div className='w-full space-y-4'>
        <Image 
          className='w-full h-auto rounded-lg'
          src={images.aero1}
          alt='Yuppii Luna Park aero photo 1'
          sizes='(min-width: 1540px) 712px, (min-width: 1280px) 584px, (min-width: 1040px) 456px, (min-width: 780px) 328px, (min-width: 680px) 608px, calc(94.44vw - 15px)'
          placeholder='blur'
        />
        <div className='space-y-2'>
          <TypographyH4>
            {translate('Information.Info1.Title')}
          </TypographyH4>
          <TypographyP className='text-justify text-sm md:text-base'>
            {translate('Information.Info1.Content')}
          </TypographyP>
        </div>
      </div>
      <div className='w-full space-y-4'>
        <Image 
          className='w-full h-auto rounded-lg'
          src={images.aero2}
          alt='Yuppii Luna Park aero photo 2'
          sizes='(min-width: 1540px) 712px, (min-width: 1280px) 584px, (min-width: 1040px) 456px, (min-width: 780px) 328px, (min-width: 680px) 608px, calc(94.44vw - 15px)'
          placeholder='blur'
        />
        <div className='space-y-2'>
          <TypographyH4>
            {translate('Information.Info2.Title')}
          </TypographyH4>
          <TypographyP className='text-justify text-sm md:text-base'>
            {translate('Information.Info2.Content')}
          </TypographyP>
        </div>
      </div>
    </article>
  )
}

Information.displayName = 'Information'

export {Information}