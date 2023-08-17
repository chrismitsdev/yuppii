'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {Button} from '@/components/ui/Button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {options} from '@/lib/emblaOptions'
import * as carouselImages from '@/public/home/carousel'

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options, 
    [Autoplay({stopOnInteraction: false})]
  )

  const scrollTo = React.useCallback(
    ({currentTarget: {id}}: React.MouseEvent) => {
      if (emblaApi) {
         const {scrollPrev, scrollNext} = emblaApi

        if (id === 'prev') {
          scrollPrev()
          emblaApi.plugins().autoplay?.reset()
        } else {
          scrollNext()
          emblaApi.plugins().autoplay?.reset()
        }
      }
    },
    [emblaApi]
  )

  return (
    <article className='relative'>
      <div className='p-2 overflow-hidden bg-secondary/50 border border-secondary rounded-md sm:p-4' ref={emblaRef}>
        <div className='-ml-2 sm:-ml-4 flex'>
          {Array.from(Object.values(carouselImages).map((image, i) => (
            <div key={image.src} className='pl-2 min-w-0 flex-[0_0_100%] sm:pl-4'>
              <Image 
                src={image}
                className='rounded w-full' 
                sizes='(min-width: 1040px) 941px, (min-width: 780px) 702px, (min-width: 660px) 574px, calc(95.29vw - 36px)'
                placeholder='blur'
                alt={`Yuppii carousel image ${++i}`}
              />
            </div>
          )))}
        </div>
      </div>
      <Button 
        className='absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-12' 
        id='prev'
        variant='outline'
        size='icon'
        onClick={scrollTo}
      >
        <ChevronLeft />
      </Button>
      <Button 
        className='absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-12' 
        id='next'
        variant='outline'
        size='icon'
        onClick={scrollTo}
      >
        <ChevronRight />
      </Button>
    </article>
  )
}

Carousel.displayName = 'Carousel'

export {Carousel}