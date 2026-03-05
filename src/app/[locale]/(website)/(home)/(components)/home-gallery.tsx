'use client'

import {ExpandIcon} from 'lucide-react'
import {useTranslations} from 'next-intl'
import {useState} from 'react'
import {galleryImageList} from '@/public/home/gallery'
import {Section} from '@/src/components/section'
import {
  ButtonNext,
  ButtonPrev,
  Carousel,
  CarouselViewport,
  Slide,
  SlidesContainer
} from '@/src/components/ui/carousel'
import {CustomImage} from '@/src/components/ui/custom-image'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from '@/src/components/ui/dialog'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'

function HomeGallery() {
  const [index, setIndex] = useState(0)
  const t = useTranslations('Pages.Home.HomeGallery')

  const renderedTriggers = galleryImageList.map((image, i) => (
    <HomeGalleryTrigger
      key={image.src}
      src={image}
      alt={`Gallery thumbnail image ${i + 1}`}
      onClick={() => setIndex(i)}
    />
  ))

  const renderedSlides = galleryImageList.map((image, i) => (
    <Slide key={image.src}>
      <CustomImage
        className='rounded'
        src={image}
        alt={`Gallery slide image ${i + 1}`}
        sizes='(min-width: 1000px) 1000px, 100vw'
      />
    </Slide>
  ))

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <Dialog>
          <div className='grid grid-cols-3 gap-2 sm:gap-8'>
            {renderedTriggers}
          </div>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent
              className='bg-transparent'
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <VisuallyHidden>
                <DialogTitle>Home page gallery images</DialogTitle>
              </VisuallyHidden>
              <Carousel options={{startIndex: index, loop: true}}>
                <CarouselViewport className='rounded'>
                  <SlidesContainer>{renderedSlides}</SlidesContainer>
                </CarouselViewport>
                <ButtonPrev />
                <ButtonNext />
              </Carousel>
              <DialogClose />
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </article>
    </Section>
  )
}

function HomeGalleryTrigger({
  src,
  alt,
  onClick
}: {
  src: React.ComponentProps<typeof CustomImage>['src']
  alt: string
  onClick: () => void
}) {
  return (
    <DialogTrigger
      className='relative overflow-hidden rounded shadow-md before:absolute before:inset-0 before:duration-700 before:ease-yuppii hover:before:bg-black/80 focus-visible:outline-0 group'
      onClick={onClick}
    >
      <CustomImage
        className='h-full w-full object-cover'
        src={src}
        alt={alt}
        sizes='
          (min-width: 1000px) 312px,
          (min-width: 640px) calc((100vw - 64px) / 3),
          100vw
        '
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
