'use client'

import {ExpandIcon} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {type Ref, useCallback, useMemo, useRef, useState} from 'react'
import * as gamesGalleryImages from '@/public/games/galleries'
import {Section} from '@/src/components/section'
import {Button} from '@/src/components/ui/button'
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
import {
  Scrollarea,
  ScrollareaBar,
  ScrollareaViewport
} from '@/src/components/ui/scrollarea'
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
} from '@/src/components/ui/sheet'
import {Typography} from '@/src/components/ui/typography'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'

type ImageGallery = {
  key: keyof Messages['Pages']['Games']['GamesGallery']['galleries']
  images: React.ComponentProps<typeof CustomImage>['src'][]
}

const galleries: ImageGallery[] = [
  {key: 'air-hockey', images: gamesGalleryImages.airHockeyGallery},
  {key: 'basket', images: gamesGalleryImages.basketGallery},
  {key: 'bumper-cars', images: gamesGalleryImages.bumperCarsGallery},
  {
    key: 'bungee-trampoline',
    images: gamesGalleryImages.bungeeTrampolineGallery
  },
  {key: 'carnival-games', images: gamesGalleryImages.carnivalGamesGallery},
  {key: 'cinema', images: gamesGalleryImages.cinemaGallery},
  {key: 'cranes', images: gamesGalleryImages.cranesGallery},
  {key: 'dryslope', images: gamesGalleryImages.dryslopeGallery},
  {key: 'electric-cars', images: gamesGalleryImages.electricCarsGallery},
  {key: 'formula-cars', images: gamesGalleryImages.formulaCarsGallery},
  {
    key: 'hawaiian-surfing',
    images: gamesGalleryImages.hawaiianSurfingGallery
  },
  {key: 'inflatables', images: gamesGalleryImages.inflatablesGallery},
  {key: 'junior', images: gamesGalleryImages.juniorGallery},
  {key: 'kiddy-rides', images: gamesGalleryImages.kiddyRidesGallery},
  {key: 'lucky-games', images: gamesGalleryImages.luckyGamesGallery},
  {key: 'playground', images: gamesGalleryImages.playgroundGallery},
  {key: 'power-games', images: gamesGalleryImages.powerGamesGallery},
  {key: 'survivor', images: gamesGalleryImages.survivorGallery},
  {key: 'table-soccer', images: gamesGalleryImages.tableSoccerGallery},
  {key: 'trampoline', images: gamesGalleryImages.trampolineGallery},
  {key: 'ufo', images: gamesGalleryImages.ufoGallery}
]

function GamesDialogCarousel() {
  const [index, setIndex] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [selectedGallery, setSelectedGallery] = useState(galleries[0])
  const t = useTranslations('Pages.Games.GamesGallery')
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleSelectGallery = useCallback((gallery: ImageGallery) => {
    setSelectedGallery(gallery)
    setSheetOpen(false)
    setIndex(0)
  }, [])

  const handleFocusTrigger = (e: Event) => {
    e.preventDefault()
    triggerRefs.current[index]?.focus()
  }

  const renderedGames = useMemo(() => {
    return galleries.map((gallery) => {
      return (
        <Button
          key={gallery.key}
          className='w-full sm:justify-start'
          size='lg'
          variant={gallery.key === selectedGallery.key ? 'secondary' : 'ghost'}
          onClick={() => handleSelectGallery(gallery)}
        >
          {t(`galleries.${gallery.key}.label`)}
        </Button>
      )
    })
  }, [selectedGallery.key, handleSelectGallery, t])

  const renderedTriggers = useMemo(() => {
    return selectedGallery.images.map((image, i) => {
      return (
        <GamesGalleryTrigger
          key={image.src}
          src={image}
          alt={`Gallery thumbnail image ${i + 1}`}
          ref={(el) => {
            triggerRefs.current[i] = el
          }}
          onClick={() => setIndex(i)}
        />
      )
    })
  }, [selectedGallery.images])

  const renderedSlides = useMemo(() => {
    return selectedGallery.images.map((image, i) => {
      return (
        <Slide key={image.src}>
          <CustomImage
            className='rounded'
            src={image}
            alt={`Gallery slide image ${i + 1}`}
            sizes='(min-width: 1000px) 1000px, 100vw'
          />
        </Slide>
      )
    })
  }, [selectedGallery.images])

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article>
        <Dialog>
          <Sheet
            open={sheetOpen}
            onOpenChange={setSheetOpen}
          >
            <SheetTrigger className='p-4 mb-10 w-full space-y-1 bg-secondary/40 border border-secondary rounded-lg text-left shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'>
              <Typography variant='h4'>
                {t(`galleries.${selectedGallery.key}.label`)}
              </Typography>
              <Typography variant='small'>
                {t('sheet-content-trigger')}
              </Typography>
            </SheetTrigger>
            <SheetPortal>
              <SheetOverlay />
              <SheetContent side='left'>
                <SheetClose />
                <SheetHeader>
                  <SheetTitle>{t('sheet-content-header')}</SheetTitle>
                </SheetHeader>

                <Scrollarea
                  className='h-[calc(100%-73px)] sm:h-[calc(100%-89px)]'
                  type='always'
                >
                  <ScrollareaViewport>
                    <SheetBody className='pb-28 space-y-4'>
                      {renderedGames}
                    </SheetBody>
                  </ScrollareaViewport>
                  <ScrollareaBar />
                </Scrollarea>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-8'>
            {renderedTriggers}
          </div>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent
              className='bg-transparent'
              onCloseAutoFocus={handleFocusTrigger}
            >
              <DialogClose />
              <VisuallyHidden>
                <DialogTitle>Games page gallery images</DialogTitle>
              </VisuallyHidden>
              <Carousel options={{startIndex: index, loop: true}}>
                <CarouselViewport className='rounded'>
                  <SlidesContainer>{renderedSlides}</SlidesContainer>
                </CarouselViewport>
                <ButtonPrev />
                <ButtonNext />
              </Carousel>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </article>
    </Section>
  )
}

function GamesGalleryTrigger({
  src,
  alt,
  ref,
  onClick
}: {
  src: React.ComponentProps<typeof CustomImage>['src']
  alt: string
  ref: Ref<HTMLButtonElement>
  onClick: () => void
}) {
  return (
    <DialogTrigger
      className='relative overflow-hidden rounded shadow before:absolute before:inset-0 before:duration-700 before:ease-yuppii hover:before:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group'
      ref={ref}
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
        <ExpandIcon className='text-primary' />
      </div>
    </DialogTrigger>
  )
}

GamesDialogCarousel.displayName = 'GamesDialogCarousel'
GamesGalleryTrigger.displayName = 'GamesGalleryTrigger'

export {GamesDialogCarousel}
