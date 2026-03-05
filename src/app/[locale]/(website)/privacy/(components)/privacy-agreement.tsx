import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'

function PrivacyAgreement() {
  const t = useTranslations('Pages.Privacy.PrivacyAgreement')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    />
  )
}

PrivacyAgreement.displayName = 'PrivacyAgreement'

export {PrivacyAgreement}
