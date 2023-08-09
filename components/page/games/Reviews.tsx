'use client'

import * as React from 'react'
import {StaticImageData} from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {TypographyLead} from '@/components/typography/TypographyLead'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/Avatar'
import {Button} from '@/components/ui/Button'
import {ChevronLeft, ChevronRight} from 'lucide-react'

interface ReviewsProps {
  reviews: Array<{
    author: string;
    comment: string;
    avatar: StaticImageData
  }>
}

const Reviews = ({reviews}: ReviewsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      slidesToScroll: 'auto', 
      align: 'center',
      breakpoints: {
        '(min-width: 768px)': {slidesToScroll: 2},
        '(min-width: 1280px)': {slidesToScroll: 3},
      }
    }, 
    [Autoplay({stopOnInteraction: false})],
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
      <div className='overflow-hidden max-w-[calc(100vw-32px)] md:max-w-[calc(100vw-47px)]' ref={emblaRef}>
        <div className='grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] xl:auto-cols-[33%]'>
          {reviews.map(review => (
            <div 
              key={review.author} 
              className='p-4 mr-6 space-y-2 bg-secondary/50 rounded border border-secondary cursor-grab'
            >
              <div className='flex items-center gap-x-2'>
                <Avatar>
                  <AvatarImage src={review.avatar.src} />
                  <AvatarFallback>
                    <span className='mt-[3px]'>
                      {review.author[0]?.toUpperCase()}
                    </span>
                  </AvatarFallback>
                </Avatar>
                <TypographyLarge>{review.author}</TypographyLarge>
              </div>
              <TypographyLead className='text-base mx-2 lg:text-xl italic'>
                {review.comment}
              </TypographyLead>
            </div>
          ))}
        </div>
      </div>
      <Button 
        id='prev'
        className='absolute top-1/2 -translate-y-1/2 -left-2' 
        size='icon'
        onClick={scrollTo}
      >
        <ChevronLeft strokeWidth={2.5} />
      </Button>
      <Button 
        id='next'
        className='absolute top-1/2 -translate-y-1/2 -right-2' 
        size='icon'
        onClick={scrollTo}
      >
        <ChevronRight strokeWidth={2.5} />
      </Button>
    </article>
  )
}

Reviews.displayName = 'Reviews'

export {Reviews}