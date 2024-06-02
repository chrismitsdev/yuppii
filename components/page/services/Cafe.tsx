import {useTranslations} from 'next-intl'
import {DataTable} from '@/components/page/services/DataTable'
import {columnsGR, columnsEN} from '@/components/page/services/Columns'

interface CafeProps {
  locale: string
  menu: MenuItem[]
}

function Cafe({locale, menu}: CafeProps) {
  const t = useTranslations('Services.Section1.TableControls')

  return (
    <article>
      <DataTable 
        data={menu} 
        columns={locale === 'gr' ? columnsGR : columnsEN} 
        messages={{
          inputPlaceholder: t('inputPlaceholder'),
          categoryButton: t('categoryButton'),
          categoryBadge: t('categoryBadge'),
          dropdownTitle: t('dropdownTitle'),
          noResults: t('noResults'),
          pageFrom: t('pageFrom'),
          pageAll: t('pageAll')
        }}
      />
    </article>
  )
}

Cafe.displayName = 'Cafe'

export {Cafe}