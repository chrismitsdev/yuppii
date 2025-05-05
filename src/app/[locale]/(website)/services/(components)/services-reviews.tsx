'use client'

import * as React from 'react'
import Image, {type StaticImageData} from 'next/image'
import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'
import {
  EmblaCarousel,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaButtonPrev,
  EmblaButtonNext
} from '@/src/components/ui/embla-carousel'
import {Typography} from '@/src/components/ui/typography'
import * as avatars from '@/public/games/avatars'

const ServicesReviews = () => {
  const t = useTranslations('Pages.Services.ServicesReviews')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <EmblaCarousel className='overflow-visible'>
        <EmblaViewport className='rounded-lg'>
          <EmblaContainer>
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
          </EmblaContainer>
        </EmblaViewport>
        <EmblaButtonPrev className='-left-3 sm:-left-12' />
        <EmblaButtonNext className='-right-3 sm:-right-12' />
      </EmblaCarousel>
    </Section>
  )
}

const ServicesReviewSlide: React.FC<{
  authorAvatar: StaticImageData
  authorName: string
  authorReview: string
}> = ({authorAvatar, authorName, authorReview}) => {
  return (
    <EmblaSlide>
      <div className='p-8 space-y-3 h-full bg-secondary/40 border border-secondary rounded-lg'>
        <div className='flex items-center gap-3'>
          <Image
            width={36}
            src={authorAvatar}
            alt='Avatar'
          />
          <Typography
            variant='lead'
            className='mt-1 select-none'
          >
            {authorName}
          </Typography>
        </div>
        <Typography
          variant='large'
          className='sm:pl-12 select-none'
        >
          {authorReview}
        </Typography>
      </div>
    </EmblaSlide>
  )
}

ServicesReviews.displayName = 'ServicesReviews'
ServicesReviewSlide.displayName = 'ServicesReviewSlide'

export {ServicesReviews}
