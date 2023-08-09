import Image, {type StaticImageData} from 'next/image'
import {TypographyH1} from '@/components/typography/TypographyH1'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {cn} from '@/lib/utils'

interface SlideProps {
  src: StaticImageData
  alt: string
  sizes: string
  title?: string
  subtitle?: string
  className?: string
}

const Slide = ({src, alt, sizes, title, subtitle, className}: SlideProps) => {
  const isPortrait = src.src.includes('mobile')

  return (
    <div 
      className={cn(
        'flex-[0_0_100%] min-w-0 max-w-full relative',
        isPortrait 
          ? 'h-[calc(100vh_-_72px)]'
          : 'max-h-[calc(100vh_-_72px)]',
        className
      )}
    >
      <Image 
        className={isPortrait ? 'h-full object-cover' : 'basis-full h-auto'}
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder='blur'
      />
      {!isPortrait && (title || subtitle) && (
        <div className='p-4 lg:p-8 absolute top-20 left-24 z-10 flex flex-col bg-accent/50 rounded-lg backdrop-blur-sm'>
          {title && (
            <TypographyH1 className='text-primary text-2xl lg:text-4xl'>
              {title}
            </TypographyH1>
          )}
          {subtitle && (
            <TypographyLarge className='text-primary text-base lg:text-lg'>
              {subtitle}
            </TypographyLarge>
          )}
        </div>
      )}
    </div>
  )
}

Slide.displayName = 'Slide'

export {Slide}