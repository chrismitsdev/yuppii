'use client'

import * as React from 'react'
import Image, {type StaticImageData} from 'next/image'
import {useTranslations} from 'next-intl'
import {XIcon, ExpandIcon} from 'lucide-react'
import {Section} from '@/src/components/section'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose
} from '@/src/components/ui/dialog'
import {
  EmblaCarousel,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaButtonPrev,
  EmblaButtonNext
} from '@/src/components/ui/embla-carousel'
import {Button} from '@/src/components/ui/button'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'
import * as galleryImages from '@/public/home/gallery'

const HomeGallery: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const t = useTranslations('Pages.Home.HomeGallery')

  const renderedThumbTriggers = Array.from(Object.values(galleryImages)).map(
    function (image, i) {
      return (
        <HomeGalleryTrigger
          key={image.src}
          src={image}
          alt={`Gallery thumbnail image ${i + 1}`}
          onClick={() => setIndex(i)}
        />
      )
    }
  )

  const renderedEmblaSlides = Array.from(Object.values(galleryImages)).map(
    function (image, i) {
      return (
        <EmblaSlide key={image.src}>
          <Image
            className='rounded'
            src={image}
            alt={`Gallery slide image ${i + 1}`}
            placeholder='blur'
            sizes='(min-width: 1000px) 1000px,
              100vw'
          />
        </EmblaSlide>
      )
    }
  )

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <Dialog>
          <div className='grid grid-cols-3 gap-2 sm:gap-8'>
            {renderedThumbTriggers}
          </div>
          <DialogPortal>
            <DialogOverlay>
              <DialogContent
                className='p-0 bg-transparent max-w-full sm:p-0 sm:max-w-[1000]'
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <VisuallyHidden>
                  <DialogTitle>Home page gallery images</DialogTitle>
                </VisuallyHidden>

                <EmblaCarousel
                  className='overflow-visible'
                  options={{startIndex: index, loop: true}}
                >
                  <EmblaViewport className='rounded'>
                    <EmblaContainer>{renderedEmblaSlides}</EmblaContainer>
                  </EmblaViewport>
                  <EmblaButtonPrev className='sm:-left-12' />
                  <EmblaButtonNext className='sm:-right-12' />
                </EmblaCarousel>
              </DialogContent>
              <DialogClose
                className='absolute top-2 right-2 z-50'
                asChild
              >
                <Button
                  variant='secondary'
                  size='icon'
                >
                  <XIcon />
                </Button>
              </DialogClose>
            </DialogOverlay>
          </DialogPortal>
        </Dialog>
      </article>
    </Section>
  )
}

const HomeGalleryTrigger: React.FC<{
  src: StaticImageData
  alt: string
  onClick: () => void
}> = ({src, alt, onClick}) => {
  return (
    <DialogTrigger
      className='relative overflow-hidden rounded shadow before:absolute before:inset-0 before:duration-700 before:ease-yuppii hover:before:bg-black/80 focus-visible:outline-0 group'
      onClick={onClick}
    >
      <Image
        className='h-full w-full object-cover'
        src={src}
        alt={alt}
        placeholder='blur'
        sizes='(min-width: 1000px) 312px,
          (min-width: 640px) calc((100vw - 64px) / 3),
          100vw'
      />
      <div className='hidden absolute inset-0 items-center justify-center group-hover:flex'>
        <ExpandIcon
          className='text-primary'
          size={32}
        />
      </div>
    </DialogTrigger>
  )
}

HomeGallery.displayName = 'HomeGallery'
HomeGalleryTrigger.displayName = 'HomeGalleryTrigger'

export {HomeGallery}
