'use client'

import {ExpandIcon} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {type Ref, useCallback, useMemo, useRef, useState} from 'react'
import {
  airHockeyGallery,
  basketGallery,
  bumperCarsGallery,
  bungeeTrampolineGallery,
  carnivalGamesGallery,
  cinemaGallery,
  cranesGallery,
  dryslopeGallery,
  electricCarsGallery,
  formulaCarsGallery,
  hawaiianSurfingGallery,
  inflatablesGallery,
  juniorGallery,
  kiddyRidesGallery,
  luckyGamesGallery,
  paragliderGallery,
  playgroundGallery,
  powerGamesGallery,
  survivorGallery,
  tableSoccerGallery,
  trampolineGallery,
  ufoGallery,
  wipeoutGallery
} from '@/public/games/galleries'
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

type ImageGallery = {
  key: keyof Messages['Pages']['Games']['GamesGallery']['galleries']
  images: React.ComponentProps<typeof CustomImage>['src'][]
}

const galleries: ImageGallery[] = [
  {key: 'air-hockey', images: airHockeyGallery},
  {key: 'basket', images: basketGallery},
  {key: 'bumper-cars', images: bumperCarsGallery},
  {key: 'bungee-trampoline', images: bungeeTrampolineGallery},
  {key: 'carnival-games', images: carnivalGamesGallery},
  {key: 'cinema', images: cinemaGallery},
  {key: 'cranes', images: cranesGallery},
  {key: 'dryslope', images: dryslopeGallery},
  {key: 'electric-cars', images: electricCarsGallery},
  {key: 'formula-cars', images: formulaCarsGallery},
  {key: 'hawaiian-surfing', images: hawaiianSurfingGallery},
  {key: 'inflatables', images: inflatablesGallery},
  {key: 'junior', images: juniorGallery},
  {key: 'kiddy-rides', images: kiddyRidesGallery},
  {key: 'lucky-games', images: luckyGamesGallery},
  {key: 'paraglider', images: paragliderGallery},
  {key: 'playground', images: playgroundGallery},
  {key: 'power-games', images: powerGamesGallery},
  {key: 'survivor', images: survivorGallery},
  {key: 'table-soccer', images: tableSoccerGallery},
  {key: 'trampoline', images: trampolineGallery},
  {key: 'ufo', images: ufoGallery},
  {key: 'wipeout', images: wipeoutGallery}
]

function GamesDialogCarousel() {
  const [index, setIndex] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(true)
  const [selectedGame, setSelectedGame] = useState<ImageGallery | null>(null)
  const imageRefs = useRef<(HTMLButtonElement | null)[]>([])
  const articleRef = useRef<HTMLElement | null>(null)
  const t = useTranslations('Pages.Games.GamesGallery')

  const handleAnimationEnd = () => {
    if (!sheetOpen || !selectedGame) return
    const activeGameButton = document.getElementById(selectedGame?.key)
    if (!activeGameButton) return
    activeGameButton.scrollIntoView({behavior: 'smooth'})
  }

  const handleSelectGame = useCallback((gallery: ImageGallery) => {
    setSelectedGame(gallery)
    setSheetOpen(false)
    setIndex(0)
    articleRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  const handleFocusTrigger = (e: Event) => {
    e.preventDefault()
    imageRefs.current[index]?.focus()
  }

  const renderedButtonTriggers = useMemo(() => {
    return galleries.map((gallery) => {
      return (
        <Button
          key={gallery.key}
          id={gallery.key}
          className='w-full sm:justify-start'
          variant={gallery.key === selectedGame?.key ? 'primary' : 'ghost'}
          size='lg'
          onClick={() => handleSelectGame(gallery)}
        >
          {t(`galleries.${gallery.key}.label`)}
        </Button>
      )
    })
  }, [selectedGame?.key, handleSelectGame, t])

  const renderedImageTriggers = useMemo(() => {
    return selectedGame?.images.map((image, i) => {
      return (
        <ImageTrigger
          key={image.src}
          src={image}
          alt={`Gallery thumbnail image ${i + 1}`}
          ref={(el) => {
            imageRefs.current[i] = el
          }}
          onClick={() => setIndex(i)}
        />
      )
    })
  }, [selectedGame?.images])

  const renderedSlides = useMemo(() => {
    return selectedGame?.images.map((image, i) => {
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
  }, [selectedGame?.images])

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <article
        className='scroll-mt-10'
        ref={articleRef}
      >
        <Dialog>
          <Sheet
            open={sheetOpen}
            onOpenChange={setSheetOpen}
          >
            <SheetTrigger className='p-4 mb-10 w-full space-y-2 bg-secondary rounded-lg text-left shadow-md cursor-pointer hover:bg-secondary/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'>
              <Typography variant='h4'>
                {selectedGame
                  ? t(`galleries.${selectedGame.key}.label`)
                  : t('sheet-content-header')}
              </Typography>
              <Typography variant='small'>
                {t('sheet-content-trigger')}
              </Typography>
            </SheetTrigger>
            <SheetPortal>
              <SheetOverlay />
              <SheetContent
                side='left'
                onAnimationEnd={handleAnimationEnd}
              >
                <SheetClose />
                <SheetHeader>
                  <SheetTitle>{t('sheet-content-header')}</SheetTitle>
                </SheetHeader>

                <Scrollarea
                  className='h-[calc(100%-77px)] sm:h-[calc(100%-93px)]'
                  type='always'
                >
                  <ScrollareaViewport>
                    <SheetBody className='pb-28 space-y-4'>
                      {renderedButtonTriggers}
                    </SheetBody>
                  </ScrollareaViewport>
                  <ScrollareaBar />
                </Scrollarea>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          {renderedImageTriggers && (
            <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-8'>
              {renderedImageTriggers}
            </div>
          )}

          <DialogPortal>
            <DialogOverlay />
            <DialogContent
              className='bg-transparent'
              aria-describedby={undefined}
              onCloseAutoFocus={handleFocusTrigger}
            >
              <DialogClose />
              <DialogTitle className='sr-only'>
                Games page gallery images
              </DialogTitle>
              <Carousel options={{startIndex: index, loop: true}}>
                <CarouselViewport className='rounded'>
                  {renderedSlides && (
                    <SlidesContainer>{renderedSlides}</SlidesContainer>
                  )}
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

function ImageTrigger({
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
      className='relative overflow-hidden rounded shadow before:absolute before:inset-0 before:duration-700 before:ease-yuppii hover:before:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent animate-fade-in group'
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
        <ExpandIcon className='text-secondary' />
      </div>
    </DialogTrigger>
  )
}

GamesDialogCarousel.displayName = 'GamesDialogCarousel'
ImageTrigger.displayName = 'ImageTrigger'

export {GamesDialogCarousel}
