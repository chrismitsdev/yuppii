'use client'

import Autoplay from 'embla-carousel-autoplay'
import {carouselImageList} from '@/public/home/carousel'
import {Container} from '@/src/components/container'
import {Section} from '@/src/components/section'
import {
  ButtonNext,
  ButtonPrev,
  Carousel,
  CarouselViewport,
  Slide,
  SlidesContainer
} from '@/src/components/ui/carousel'
import {CustomImage} from '@/src/components/ui/custom-image'

function HomeCarousel() {
  const slides = carouselImageList.map((image, i) => (
    <Slide key={image.src}>
      <CustomImage
        src={image}
        alt={`Home page carousel image slide ${i + 1}`}
        priority={i === 0}
        sizes='(min-width: 1000px) 1000px, 100vw'
      />
    </Slide>
  ))

  return (
    <Container
      className='px-0 sm:px-3'
      asChild
    >
      <Section>
        <Carousel
          className='overflow-visible'
          plugins={[Autoplay()]}
        >
          <CarouselViewport className='sm:rounded'>
            <SlidesContainer>{slides}</SlidesContainer>
          </CarouselViewport>
          <ButtonPrev className='inset-s-2 sm:-inset-s-12' />
          <ButtonNext className='inset-e-2 sm:-inset-e-12' />
        </Carousel>
      </Section>
    </Container>
  )
}

HomeCarousel.displayName = 'HomeCarousel'

export {HomeCarousel}
