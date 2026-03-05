'use client'

import {useTranslations} from 'next-intl'
import type * as React from 'react'
import * as avatars from '@/public/games/avatars'
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
import {Typography} from '@/src/components/ui/typography'

function ServicesReviews() {
  const t = useTranslations('Pages.Services.ServicesReviews')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <Carousel className='overflow-visible'>
        <CarouselViewport className='rounded-lg'>
          <SlidesContainer>
            <ServicesReviewSlide
              authorAvatar={avatars.elena}
              authorName={t('reviews.elena.name')}
              authorReview={t('reviews.elena.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.olga}
              authorName={t('reviews.olga.name')}
              authorReview={t('reviews.olga.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.petros}
              authorName={t('reviews.petros.name')}
              authorReview={t('reviews.petros.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.zoe}
              authorName={t('reviews.zoe.name')}
              authorReview={t('reviews.zoe.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.iosif}
              authorName={t('reviews.iosif.name')}
              authorReview={t('reviews.iosif.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.stella}
              authorName={t('reviews.stella.name')}
              authorReview={t('reviews.stella.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.papagewrgiou}
              authorName={t('reviews.papagewrgiou.name')}
              authorReview={t('reviews.papagewrgiou.review')}
            />
            <ServicesReviewSlide
              authorAvatar={avatars.sideris}
              authorName={t('reviews.sideris.name')}
              authorReview={t('reviews.sideris.review')}
            />
          </SlidesContainer>
        </CarouselViewport>
        <ButtonPrev className='-inset-s-2' />
        <ButtonNext className='-inset-e-2' />
      </Carousel>
    </Section>
  )
}

function ServicesReviewSlide({
  authorAvatar,
  authorName,
  authorReview
}: {
  authorAvatar: React.ComponentProps<typeof CustomImage>['src']
  authorName: string
  authorReview: string
}) {
  return (
    <Slide>
      <div className='p-8 space-y-3 h-full bg-secondary/40 border border-secondary rounded-lg'>
        <div className='flex items-center gap-3'>
          <CustomImage
            className='size-10'
            src={authorAvatar}
            alt={`Reviewer image avatar ${
              authorAvatar.src
                .split('/')
                [authorAvatar.src.split('/').length - 1].split('.')[0]
            }`}
          />
          <Typography variant='lead'>{authorName}</Typography>
        </div>
        <Typography className='sm:pl-12 select-none'>{authorReview}</Typography>
      </div>
    </Slide>
  )
}

ServicesReviews.displayName = 'ServicesReviews'
ServicesReviewSlide.displayName = 'ServicesReviewSlide'

export {ServicesReviews}
