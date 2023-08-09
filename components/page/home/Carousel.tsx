'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {Button} from '@/components/ui/Button'
import {Slide} from '@/components/page/home/Slide'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import * as carouselImages from '@/public/home/carousel'

type MessageKeys = 'slide1Title' | 'slide1Subtitle' | 'slide2Title' | 'slide2Subtitle' | 'slide3Title' | 'slide3Subtitle'

interface CarouselProps {
  messages: {
    [key in MessageKeys]: string
  }
}

const Carousel = ({messages}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, 
      container: '#mobile-slides',
      duration: 15,
      breakpoints: {
        '(min-width: 768px)': {
          container: '#desktop-slides',
          duration: 20
        },
      }
    }, 
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
      <div className='relative overflow-hidden' ref={emblaRef}>
        <div id='desktop-slides' className='hidden md:flex'>
          <Slide
            src={carouselImages.stairs}
            alt='Yuppii Luna Park from above'
            sizes='(min-width: 2160px) 2048px, calc(94.35vw + 29px)'
            title={messages.slide1Title}
            subtitle={messages.slide1Subtitle}
          />
          <Slide
            src={carouselImages.bumper}
            alt='Bumper cars in Yuppii Luna Park'
            sizes='(min-width: 2160px) 2048px, calc(94.35vw + 29px)'
          />
          <Slide
            src={carouselImages.soccer}
            alt='Table soccer in Yuppii Luna Park'
            sizes='(min-width: 2160px) 2048px, calc(94.35vw + 29px)'
            title={messages.slide2Title}
            subtitle={messages.slide2Subtitle}
          />
          <Slide
            src={carouselImages.junior}
            alt='Kids playground in Yuppii Luna Park'
            sizes='(min-width: 2160px) 2048px, calc(94.35vw + 29px)'
          />
          <Slide
            src={carouselImages.snack}
            alt='Snacks & drinks in Yuppii Luna Park'
            sizes='(min-width: 2160px) 2048px, calc(94.35vw + 29px)'
            title={messages.slide3Title}
            subtitle={messages.slide3Subtitle}
          />
        </div>
        <div id='mobile-slides' className='flex md:hidden'>
          <Slide
            src={carouselImages.stairsMobile}
            alt='Yuppii Luna Park from above'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <Slide
            src={carouselImages.bumperMobile}
            alt='Bumper cars in Yuppii Luna Park'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <Slide
            src={carouselImages.soccerMobile}
            alt='Table soccer in Yuppii Luna Park'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <Slide
            src={carouselImages.juniorMobile}
            alt='Kids playground in Yuppii Luna Park'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <Slide
            src={carouselImages.snackMobile}
            alt='Snacks & drinks in Yuppii Luna Park'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <Button 
        id='prev'
        className='absolute top-1/2 -translate-y-1/2 left-4 h-8 w-8 rounded-sm lg:h-10 lg:w-10 lg:rounded-md' 
        size='icon'
        onClick={scrollTo}
      >
        <ChevronLeft strokeWidth={2.5} />
      </Button>
      <Button 
        id='next'
        className='absolute top-1/2 -translate-y-1/2 right-4 h-8 w-8 rounded-sm lg:h-10 lg:w-10 lg:rounded-md' 
        size='icon'
        onClick={scrollTo}
      >
        <ChevronRight strokeWidth={2.5} />
      </Button>
    </article>
  )
}

Carousel.displayName = 'Carousel'

export {Carousel}