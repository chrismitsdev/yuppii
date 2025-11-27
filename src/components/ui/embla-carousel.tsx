'use client'

import {Slot} from '@radix-ui/react-slot'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ImagesIcon,
  type LucideProps,
  XIcon
} from 'lucide-react'
import * as React from 'react'
import {Button} from '@/src/components/ui/button'
import {ScrollArea} from '@/src/components/ui/scrollarea'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/src/components/ui/sheet'
import {VisuallyHidden} from '@/src/components/ui/visually-hidden'
import {
  EmblaContext,
  useEmblaContext
} from '@/src/context/embla-carousel-context'
import {cn} from '@/src/lib/utils'

type EmblaApiType = ReturnType<typeof useEmblaCarousel>[1]

interface EmblaCarouselProps extends React.ComponentPropsWithRef<'div'> {
  options?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  asChild?: boolean
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  className,
  options = {
    loop: true,
    startIndex: 0
  },
  plugins,
  asChild = false,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = React.useState<number>(
    options.startIndex ?? 0
  )
  const Comp = asChild ? Slot : 'div'

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return

    if (emblaApi.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.stop()
    }

    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return

    if (emblaApi.plugins()?.autoplay) {
      emblaApi.plugins().autoplay.stop()
    }

    emblaApi.scrollNext()
  }, [emblaApi])

  const onThumbButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return

      if (emblaApi.plugins()?.autoplay) {
        emblaApi.plugins().autoplay.stop()
      }

      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = React.useCallback((emblaApi: EmblaApiType) => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <EmblaContext
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
        id='embla'
        className={cn('relative overflow-hidden', className)}
        {...props}
      />
    </EmblaContext>
  )
}

const EmblaViewport: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  const {emblaRef} = useEmblaContext()

  return (
    <div
      id='embla-viewport'
      className={cn('overflow-hidden h-full', className)}
      ref={emblaRef}
      {...props}
    />
  )
}

const EmblaContainer: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      id='embla-container'
      className={cn('h-full flex', className)}
      {...props}
    />
  )
}

const EmblaSlide: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      id='embla-slide'
      className={cn(
        'mr-4 grow-0 shrink-0 basis-full min-w-0 select-none',
        className
      )}
      {...props}
    />
  )
}

const EmblaThumbsContainer: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
      modal={false}
    >
      <SheetTrigger asChild>
        <Button
          className='absolute left-1/2 bottom-2 -translate-x-1/2 data-open:-translate-y-16 data-open:duration-750 data-closed:duration-375 transition ease-yuppii sm:data-open:-translate-y-28'
          size='icon'
        >
          {open ? <XIcon /> : <ImagesIcon />}
        </Button>
      </SheetTrigger>
      <SheetContent
        className='absolute bg-transparent !shadow-none'
        side='bottom'
      >
        <VisuallyHidden>
          <SheetTitle>Carousel thumbnails drawer</SheetTitle>
        </VisuallyHidden>
        <div className='py-2 px-2 m-1.5 bg-secondary rounded sm:py-3'>
          <ScrollArea>
            <div
              id='embla-thumbs-container'
              className={cn('flex justify-center gap-2 sm:gap-3', className)}
              {...props}
            />
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const EmblaThumb: React.FC<
  React.ComponentPropsWithRef<'button'> & {thumbIndex: number}
> = ({className, thumbIndex, ...props}) => {
  const {selectedIndex, onThumbButtonClick} = useEmblaContext()

  return (
    <button
      id='embla-thumb'
      className={cn(
        'size-10 rounded-xs overflow-hidden grayscale-100 contrast-75 transition sm:size-20',
        thumbIndex === selectedIndex && 'grayscale-0 contrast-100',
        className
      )}
      onClick={() => onThumbButtonClick(thumbIndex)}
      {...props}
    />
  )
}

const EmblaButtonPrev: React.FC<
  React.ComponentPropsWithRef<typeof Button> & {
    icon?: React.ComponentType<LucideProps>
  }
> = ({className, icon, ...props}) => {
  const {onPrevButtonClick} = useEmblaContext()

  return (
    <Button
      id='embla-button-prev'
      className={cn('absolute top-1/2 -translate-y-1/2 left-0', className)}
      size='icon'
      onClick={onPrevButtonClick}
      {...props}
    >
      {!icon ? <ChevronLeftIcon /> : React.createElement(icon)}
    </Button>
  )
}

const EmblaButtonNext: React.FC<
  React.ComponentPropsWithRef<typeof Button> & {
    icon?: React.ComponentType<LucideProps>
  }
> = ({className, icon, ...props}) => {
  const {onNextButtonClick} = useEmblaContext()

  return (
    <Button
      id='embla-button-next'
      className={cn('absolute top-1/2 -translate-y-1/2 right-0', className)}
      size='icon'
      onClick={onNextButtonClick}
      {...props}
    >
      {!icon ? <ChevronRightIcon /> : React.createElement(icon)}
    </Button>
  )
}

EmblaCarousel.displayName = 'EmblaCarousel'
EmblaViewport.displayName = 'EmblaViewport'
EmblaContainer.displayName = 'EmblaContainer'
EmblaSlide.displayName = 'EmblaSlide'
EmblaThumbsContainer.displayName = 'EmblaThumbsContainer'
EmblaThumb.displayName = 'EmblaThumb'
EmblaButtonPrev.displayName = 'EmblaButtonPrev'
EmblaButtonNext.displayName = 'EmblaButtonNext'

export {
  EmblaCarousel,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaThumbsContainer,
  EmblaThumb,
  EmblaButtonPrev,
  EmblaButtonNext
}
