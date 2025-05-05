import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface EmblaContextProps {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  emblaApi: ReturnType<typeof useEmblaCarousel>[1]
  selectedIndex: number
  onPrevButtonClick(): void
  onNextButtonClick(): void
  onThumbButtonClick(index: number): void
}

const EmblaContext = React.createContext<EmblaContextProps | null>(null)

function useEmblaContext() {
  const context = React.use(EmblaContext)

  if (!context) {
    throw new Error('useEmblaContext must be used within a EmblaProvider')
  }

  return context
}

export {EmblaContext, useEmblaContext}
