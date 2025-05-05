import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'

const PrivacyTerms: React.FC = () => {
  const t = useTranslations('Pages.Privacy.PrivacyTerms')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    />
  )
}

PrivacyTerms.displayName = 'PrivacyTerms'

export {PrivacyTerms}
