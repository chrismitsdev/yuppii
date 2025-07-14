'use client'

import * as React from 'react'
import Image, {type StaticImageData} from 'next/image'
import {type Messages, useTranslations, useLocale} from 'next-intl'
import {XIcon, ExpandIcon, PlusIcon} from 'lucide-react'
import {isoLocaleMap} from '@/src/lib/utils'
import {Section} from '@/src/components/section'
import {
  EmblaCarousel,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaButtonPrev,
  EmblaButtonNext
} from '@/src/components/ui/embla-carousel'
import {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/src/components/ui/sheet'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose
} from '@/src/components/ui/dialog'
import {ScrollArea} from '@/src/components/ui/scrollarea'
import {Button} from '@/src/components/ui/button'
import {Typography} from '@/src/components/ui/typography'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'
import * as gamesGalleryImages from '@/public/games/galleries'

interface ImageGallery {
  key: keyof Messages['Pages']['Services']['ServicesGallery']['galleries']
  images: StaticImageData[]
}

const galleries: ImageGallery[] = (
  [
    {key: 'inflatables', images: gamesGalleryImages.inflatables},
    {key: 'playground', images: gamesGalleryImages.playground},
    {key: 'trampoline', images: gamesGalleryImages.trampoline},
    {key: 'cinema', images: gamesGalleryImages.cinema},
    {key: 'dryslope', images: gamesGalleryImages.dryslope},
    {key: 'bumper-cars', images: gamesGalleryImages.bumperCars},
    {key: 'junior', images: gamesGalleryImages.junior},
    {key: 'formula-cars', images: gamesGalleryImages.formulaCars},
    {key: 'survivor', images: gamesGalleryImages.survivor},
    {key: 'carnival-games', images: gamesGalleryImages.carnivalGames},
    {key: 'table-soccer', images: gamesGalleryImages.tableSoccer},
    {key: 'basket', images: gamesGalleryImages.basket},
    {key: 'kiddy-rides', images: gamesGalleryImages.kiddyRides},
    {key: 'hawaiian-surfing', images: gamesGalleryImages.hawaiianSurfing},
    {key: 'electric-cars', images: gamesGalleryImages.electricCars},
    {key: 'air-hockey', images: gamesGalleryImages.airHockey},
    {key: 'power-games', images: gamesGalleryImages.powerGames},
    {key: 'cranes', images: gamesGalleryImages.cranes},
    {key: 'lucky-games', images: gamesGalleryImages.luckyGames}
  ] as const
).map(function (game) {
  return {
    ...game,
    images: Array.from(Object.values(game.images))
  }
})

const ServicesGallery: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const [sheetOpen, setSheetOpen] = React.useState<boolean>(false)
  const [selectedGallery, setSelectedGallery] = React.useState<ImageGallery>(
    galleries[0]
  )
  const t = useTranslations('Pages.Services.ServicesGallery')
  const locale = useLocale()

  function handleClick(gallery: ImageGallery) {
    setSelectedGallery(gallery)
    setSheetOpen(false)
  }

  const renderedGames = galleries.map(function (gallery) {
    return (
      <li key={gallery.key}>
        <Button
          className='w-full sm:justify-start'
          variant={
            selectedGallery.key === gallery.key ? 'accent' : 'ghost-secondary'
          }
          size='lg'
          onClick={() => handleClick(gallery)}
          locale={locale}
        >
          {t(`galleries.${gallery.key}.label`)}
        </Button>
      </li>
    )
  })

  const triggers = selectedGallery.images.map(function (image, i) {
    return (
      <ServicesGalleryTrigger
        key={image.src}
        src={image}
        alt={`Gallery thumbnail image ${i + 1}`}
        onClick={() => setIndex(i)}
      />
    )
  })

  const slides = selectedGallery.images.map(function (image, i) {
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
  })

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
            <SheetTrigger
              className='w-full'
              asChild
            >
              <button
                className='p-4 mb-10 space-y-1 bg-secondary/40 border border-secondary rounded-lg text-left shadow-md'
                lang={isoLocaleMap[locale]}
              >
                <div className='flex items-center justify-between'>
                  <Typography variant='lead'>
                    {t(`galleries.${selectedGallery.key}.label`)}
                  </Typography>
                  <Button
                    size='icon'
                    asChild
                  >
                    <div>
                      <PlusIcon />
                    </div>
                  </Button>
                </div>
                <Typography>{t('sheet-content-trigger')}</Typography>
              </button>
            </SheetTrigger>
            <SheetPortal>
              <SheetOverlay />
              <SheetContent side='left'>
                <SheetHeader className='p-6'>
                  <SheetTitle>{t('sheet-content-header')}</SheetTitle>
                </SheetHeader>
                <ScrollArea
                  className='h-[calc(100%-72px)]'
                  type='always'
                >
                  <ul className='px-6 space-y-4'>{renderedGames}</ul>
                </ScrollArea>
                <SheetClose
                  className='absolute top-4 right-3'
                  asChild
                >
                  <Button
                    size='icon'
                    variant='ghost'
                  >
                    <XIcon />
                  </Button>
                </SheetClose>
              </SheetContent>
            </SheetPortal>
          </Sheet>

          <div className='grid grid-cols-3 gap-2 sm:gap-8'>{triggers}</div>
          <DialogPortal>
            <DialogOverlay>
              <DialogContent
                className='p-0 bg-transparent max-w-full sm:p-0 sm:max-w-[1000]'
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <VisuallyHidden>
                  <DialogTitle>Games page gallery images</DialogTitle>
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

const ServicesGalleryTrigger: React.FC<{
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

ServicesGallery.displayName = 'ServicesGallery'
ServicesGalleryTrigger.displayName = 'ServicesGalleryTrigger'

export {ServicesGallery}
