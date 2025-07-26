'use client'

import * as React from 'react'

import Autoplay from 'embla-carousel-autoplay'
import {Section} from '@/src/components/section'
import {Container} from '@/src/components/container'
import {
  EmblaCarousel,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaButtonPrev,
  EmblaButtonNext
} from '@/src/components/ui/embla-carousel'
import {CustomImage} from '@/src/components/ui/custom-image'
import {carouselImageList} from '@/public/home/carousel'

const HomeCarousel: React.FC = () => {
  const slides = carouselImageList.map(function (image, i) {
    return (
      <EmblaSlide key={image.src}>
        <CustomImage
          src={image}
          alt={`Home page carousel image slide ${i + 1}`}
          priority={i === 0}
          sizes='(min-width: 1000px) 1000px, 100vw'
        />
      </EmblaSlide>
    )
  })

  return (
    <Container
      className='px-0 sm:px-3'
      asChild
    >
      <Section>
        <EmblaCarousel
          className='overflow-visible'
          plugins={[Autoplay()]}
        >
          <EmblaViewport className='sm:rounded'>
            <EmblaContainer>{slides}</EmblaContainer>
          </EmblaViewport>
          <EmblaButtonPrev className='-left-0 sm:-left-12' />
          <EmblaButtonNext className='-right-0 sm:-right-12' />
        </EmblaCarousel>
      </Section>
    </Container>
  )
}

HomeCarousel.displayName = 'HomeCarousel'

export {HomeCarousel}
