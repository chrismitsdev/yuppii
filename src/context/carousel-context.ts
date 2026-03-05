import type useEmblaCarousel from 'embla-carousel-react'
import {createContext, useContext} from 'react'

interface CarouselContextProps {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  emblaApi: ReturnType<typeof useEmblaCarousel>[1]
  onPrevButtonClick(): void
  onNextButtonClick(): void
}

const CarouselContext = createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a EmblaProvider')
  }

  return context
}

export {CarouselContext, useCarousel}
