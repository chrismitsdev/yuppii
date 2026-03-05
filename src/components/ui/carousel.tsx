'use client'

import {Slot} from '@radix-ui/react-slot'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react'
import {useCallback, useEffect, useState} from 'react'
import {IconButton} from '@/src/components/ui/icon-button'
import {CarouselContext, useCarousel} from '@/src/context/carousel-context'
import {cn} from '@/src/lib/utils'

type EmblaApiType = ReturnType<typeof useEmblaCarousel>[1]

interface CarouselProps extends React.ComponentPropsWithRef<'div'> {
  options?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  asChild?: boolean
}

function Carousel({
  className,
  options = {
    loop: true,
    startIndex: 0
  },
  plugins,
  asChild = false,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = useState<number>(
    options.startIndex ?? 0
  )
  const Comp = asChild ? Slot : 'div'

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return

    if (emblaApi.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.stop()
    }

    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return

    if (emblaApi.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.stop()
    }

    emblaApi.scrollNext()
  }, [emblaApi])

  const onThumbButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return

      if (emblaApi.plugins()?.autoplay) {
        emblaApi.plugins().autoplay.stop()
      }

      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback((emblaApi: EmblaApiType) => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        emblaRef,
        emblaApi,
        selectedIndex,
        onPrevButtonClick,
        onNextButtonClick,
        onThumbButtonClick
      }}
    >
      <Comp
        className={cn('relative', className)}
        {...props}
      />
    </CarouselContext.Provider>
  )
}

function CarouselViewport({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const {emblaRef} = useCarousel()

  return (
    <div
      className={cn('h-full overflow-hidden', className)}
      ref={emblaRef}
      {...props}
    />
  )
}

function SlidesContainer({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('h-full flex', className)}
      {...props}
    />
  )
}

function Slide({className, ...props}: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'mr-4 grow-0 shrink-0 basis-full min-w-0 select-none',
        className
      )}
      {...props}
    />
  )
}

function ButtonPrev({className}: {className?: string}) {
  const {onPrevButtonClick} = useCarousel()

  return (
    <IconButton
      aria-label='Go to previous slide'
      className={cn('absolute top-1/2 -translate-y-1/2 inset-s-4', className)}
      size='sm'
      onClick={onPrevButtonClick}
    >
      <ChevronLeftIcon />
    </IconButton>
  )
}

function ButtonNext({className}: {className?: string}) {
  const {onNextButtonClick} = useCarousel()

  return (
    <IconButton
      aria-label='Go to next slide'
      className={cn('absolute top-1/2 -translate-y-1/2 inset-e-4', className)}
      size='sm'
      onClick={onNextButtonClick}
    >
      <ChevronRightIcon />
    </IconButton>
  )
}

Carousel.displayName = 'Carousel'
CarouselViewport.displayName = 'CarouselViewport'
SlidesContainer.displayName = 'SlidesContainer'
Slide.displayName = 'Slide'
ButtonPrev.displayName = 'ButtonPrev'
ButtonNext.displayName = 'ButtonNext'

export {
  Carousel,
  CarouselViewport,
  SlidesContainer,
  Slide,
  ButtonPrev,
  ButtonNext
}
