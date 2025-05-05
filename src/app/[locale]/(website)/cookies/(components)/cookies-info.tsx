import {useTranslations} from 'next-intl'
import {Section} from '@/src/components/section'

const CookiesInfo: React.FC = () => {
  const t = useTranslations('Pages.Cookies.CookiesInfo')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    />
  )
}

CookiesInfo.displayName = 'CookiesInfo'

export {CookiesInfo}
