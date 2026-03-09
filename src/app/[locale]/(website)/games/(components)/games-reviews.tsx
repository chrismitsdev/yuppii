'use client'

import {useTranslations} from 'next-intl'
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

function GamesReviews() {
  const t = useTranslations('Pages.Games.GamesReviews')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <Carousel
        className='overflow-visible'
        options={{loop: false}}
      >
        <CarouselViewport className='rounded-lg'>
          <SlidesContainer>
            <GamesReviewSlide
              authorAvatar={avatars.elena}
              authorName={t('reviews.elena.name')}
              authorReview={t('reviews.elena.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.olga}
              authorName={t('reviews.olga.name')}
              authorReview={t('reviews.olga.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.petros}
              authorName={t('reviews.petros.name')}
              authorReview={t('reviews.petros.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.zoe}
              authorName={t('reviews.zoe.name')}
              authorReview={t('reviews.zoe.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.iosif}
              authorName={t('reviews.iosif.name')}
              authorReview={t('reviews.iosif.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.stella}
              authorName={t('reviews.stella.name')}
              authorReview={t('reviews.stella.review')}
            />
            <GamesReviewSlide
              authorAvatar={avatars.papagewrgiou}
              authorName={t('reviews.papagewrgiou.name')}
              authorReview={t('reviews.papagewrgiou.review')}
            />
            <GamesReviewSlide
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

function GamesReviewSlide({
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

GamesReviews.displayName = 'GamesReviews'
GamesReviewSlide.displayName = 'GamesReviewSlide'

export {GamesReviews}
