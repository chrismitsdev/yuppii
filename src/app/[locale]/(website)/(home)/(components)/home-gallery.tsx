'use client'

import {ExpandIcon, XIcon} from 'lucide-react'
import {useTranslations} from 'next-intl'
import * as React from 'react'
import {galleryImageList} from '@/public/home/gallery'
import {Section} from '@/src/components/section'
import {Button} from '@/src/components/ui/button'
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
import {
  EmblaButtonNext,
  EmblaButtonPrev,
  EmblaCarousel,
  EmblaContainer,
  EmblaSlide,
  EmblaViewport
} from '@/src/components/ui/embla-carousel'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'

const HomeGallery: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const t = useTranslations('Pages.Home.HomeGallery')

  const triggers = galleryImageList.map((image, i) => (
    <HomeGalleryTrigger
      key={image.src}
      src={image}
      alt={`Gallery thumbnail image ${i + 1}`}
      onClick={() => setIndex(i)}
    />
  ))

  const slides = galleryImageList.map((image, i) => (
    <EmblaSlide key={image.src}>
      <CustomImage
        className='rounded'
        src={image}
        alt={`Gallery slide image ${i + 1}`}
        sizes='(min-width: 1000px) 1000px, 100vw'
      />
    </EmblaSlide>
  ))

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <Dialog>
          <div className='grid grid-cols-3 gap-2 sm:gap-8'>{triggers}</div>
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
                    <EmblaContainer>{slides}</EmblaContainer>
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
  src: React.ComponentProps<typeof CustomImage>['src']
  alt: string
  onClick: () => void
}> = ({src, alt, onClick}) => {
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
