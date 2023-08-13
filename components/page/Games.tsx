import {useLocale as getLocale} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {GameGalleries} from '@/components/page/games/GameGalleries'
import {Reviews} from '@/components/page/games/Reviews'
import {getGalleriesPromise} from '@/lib/promises/getGalleriesPromise'
import {getReviewsPromise} from '@/lib/promises/getReviewsPromise'

const Games = async () => {
  const locale = getLocale()
  const {gamesSection, translatedGames} = await getGalleriesPromise(locale)
  const {reviewsSection, translatedReviews} = await getReviewsPromise(locale)
  
  return (
    <Container>
      <Section
        title={gamesSection.title}
        subtitle={gamesSection.subtitle}
      >
        <GameGalleries locale={locale} games={translatedGames} />
      </Section>
      <Section
        title={reviewsSection.title}
        subtitle={reviewsSection.subtitle}
      >
        <Reviews reviews={translatedReviews} />
      </Section>
    </Container>
  )
}

Games.displayName = 'Games'

export {Games}