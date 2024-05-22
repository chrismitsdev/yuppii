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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {loop: true, duration: 15}, 
    [Autoplay({stopOnInteraction: false})]
  )

  const scrollTo = React.useCallback(
    ({currentTarget: {id}}: React.MouseEvent) => {
      if (emblaApi) {
        id === 'prev'
          ? emblaApi.scrollPrev()
          : emblaApi.scrollNext()
      }
    },
    [emblaApi]
  )

  return (
    <article className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {reviews.map(review => (
            <div 
              key={review.author} 
              className='p-4 mr-6 min-w-0 flex-[0_0_100%] space-y-2 bg-secondary/50 rounded border border-secondary cursor-grab'
            >
              <div className='flex items-end gap-x-2'>
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
              <TypographyLead className='mx-4 sm:mx-0 text-base italic lg:text-xl'>
                {review.comment}
              </TypographyLead>
            </div>
          ))}
        </div>
      </div>
      <Button 
        id='prev'
        className='absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-12' 
        size='icon'
        onClick={scrollTo}
      >
        <ChevronLeft strokeWidth={2.5} />
      </Button>
      <Button 
        id='next'
        className='absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-12' 
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