import {StaticImageData} from 'next/image'
import {getTranslator} from 'next-intl/server'
import * as avatars from '@/public/games/avatars'

const getReviewsPromise = async (locale: string) => {
  const tSection = await getTranslator(locale, 'Games.Section2')
  const tReviews = await getTranslator(locale, 'Games.Section2.Reviews')

  const reviewsSection = {
    title: tSection('title'),
    subtitle: tSection('subtitle')
  }

  const translatedReviews: Array<{author:string, comment: string, avatar: StaticImageData}> = [
    {
      author: 'Elena M', 
      comment: tReviews('review1'), 
      avatar: avatars.elena_m
    },
    {
      author: 'Olga Politi', 
      comment: tReviews('review2'), 
      avatar: avatars.olga_politi
    },
    {
      author: 'Petros Kilamenakis', 
      comment: tReviews('review3'), 
      avatar: avatars.petros_kilamenakis
    },
    {
      author: 'Zoe Bah', 
      comment: tReviews('review4'), 
      avatar: avatars.zoe_bah
    },
    {
      author: 'Iosif Darousis', 
      comment: tReviews('review5'), 
      avatar: avatars.iosif_darousis
    },
    {
      author: 'Stella Daviti', 
      comment: tReviews('review6'), 
      avatar: avatars.stella_daviti
    },
    {
      author: 'M Papagewrgiou', 
      comment: tReviews('review7'), 
      avatar: avatars.m_papagewrgiou
    },
    {
      author: 'Dimsideris', 
      comment: tReviews('review8'), 
      avatar: avatars.dimsideris
    }
  ]

  return {
    reviewsSection,
    translatedReviews
  }
}

export {getReviewsPromise}