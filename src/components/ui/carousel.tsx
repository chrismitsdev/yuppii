'use client'

import {Slot} from '@radix-ui/react-slot'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react'
import {useCallback, useMemo} from 'react'
import {IconButton} from '@/src/components/ui/icon-button'
import {CarouselContext, useCarousel} from '@/src/context/carousel-context'
import {cn} from '@/src/lib/utils'

interface CarouselProps extends React.ComponentPropsWithRef<'div'> {
  options?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  asChild?: boolean
}

function Carousel({
  className,
  options,
  plugins,
  asChild = false,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const Comp = asChild ? Slot : 'div'

  const stopAutoplay = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.stop()
  }, [emblaApi])

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    stopAutoplay()
    emblaApi.scrollPrev()
  }, [emblaApi, stopAutoplay])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    stopAutoplay()
    emblaApi.scrollNext()
  }, [emblaApi, stopAutoplay])

  const contextValue = useMemo(() => {
    return {
      emblaRef,
      emblaApi,
      onPrevButtonClick,
      onNextButtonClick
    }
  }, [emblaRef, emblaApi, onPrevButtonClick, onNextButtonClick])

  return (
    <CarouselContext.Provider value={contextValue}>
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
