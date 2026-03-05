'use client'

import {ExpandIcon} from 'lucide-react'
import {type Messages, useTranslations} from 'next-intl'
import {useCallback, useMemo, useState} from 'react'
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
  key: keyof Messages['Pages']['Services']['ServicesGallery']['galleries']
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

function ServicesGallery() {
  const [index, setIndex] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [selectedGallery, setSelectedGallery] = useState(galleries[0])
  const t = useTranslations('Pages.Services.ServicesGallery')

  const handleSelectGallery = useCallback((gallery: ImageGallery) => {
    setSelectedGallery(gallery)
    setSheetOpen(false)
    setIndex(0)
  }, [])

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
        <ServicesGalleryTrigger
          key={image.src}
          src={image}
          alt={`Gallery thumbnail image ${i + 1}`}
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
            <SheetTrigger className='p-4 mb-10 w-full space-y-1 bg-secondary/40 border border-secondary rounded-lg text-left shadow-md'>
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
                  className='h-[calc(100%-72px)] sm:h-[calc(100%-88px)]'
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
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
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
              <DialogClose />
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </article>
    </Section>
  )
}

function ServicesGalleryTrigger({
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
      className='relative overflow-hidden rounded shadow before:absolute before:inset-0 before:duration-700 before:ease-yuppii hover:before:bg-black/80 focus-visible:outline-0 group'
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

ServicesGallery.displayName = 'ServicesGallery'
ServicesGalleryTrigger.displayName = 'ServicesGalleryTrigger'

export {ServicesGallery}
