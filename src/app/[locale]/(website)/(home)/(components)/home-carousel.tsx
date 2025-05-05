'use client'

import * as React from 'react'
import Image from 'next/image'
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
import * as carouselImages from '@/public/home/carousel'

const HomeCarousel: React.FC = () => {
  const renderedEmblaSlides = Array.from(Object.values(carouselImages)).map(
    function (image, i) {
      return (
        <EmblaSlide key={image.src}>
          <Image
            className='rounded'
            src={image}
            alt={`Home page carousel image slide ${i + 1}`}
            sizes='(min-width: 1040px) 941px, (min-width: 780px) 702px, (min-width: 660px) 574px, calc(95.29vw - 36px)'
            priority
          />
        </EmblaSlide>
      )
    }
  )

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
          <EmblaViewport className='rounded'>
            <EmblaContainer>{renderedEmblaSlides}</EmblaContainer>
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
