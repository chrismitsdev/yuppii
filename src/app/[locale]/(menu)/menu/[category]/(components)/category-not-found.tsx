import {useTranslations} from 'next-intl'
import {OctagonAlert} from 'lucide-react'
import {Section} from '@/src/components/section'

const CategoryNotFound: React.FC = () => {
  const t = useTranslations('Components.CategoryNotFound')

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <OctagonAlert className='size-40 text-secondary mx-auto' />
    </Section>
  )
}

CategoryNotFound.displayName = 'CategoryNotFound'

export {CategoryNotFound}
