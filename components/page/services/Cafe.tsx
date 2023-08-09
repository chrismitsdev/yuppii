import {useTranslations} from 'next-intl'
import {DataTable} from '@/components/page/services/DataTable'
import {columnsGR, columnsEN} from '@/components/page/services/Columns'

interface CafeProps {
  locale: string
  menu: Array<MenuItem>
}

const Cafe = ({locale, menu}: CafeProps) => {
  const translations = useTranslations('Services.Section1.TableControls')

  return (
    <article>
      <DataTable 
        columns={locale === 'gr' ? columnsGR : columnsEN} 
        data={menu} 
        messages={{
          inputPlaceholder: translations('inputPlaceholder'),
          categoryButton: translations('categoryButton'),
          categoryBadge: translations('categoryBadge'),
          dropdownTitle: translations('dropdownTitle'),
          noResults: translations('noResults'),
          pageFrom: translations('pageFrom'),
          pageAll: translations('pageAll')
        }}
      />
    </article>
  )
}

Cafe.displayName = 'Cafe'

export {Cafe}