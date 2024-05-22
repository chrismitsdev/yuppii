import {getTranslations} from 'next-intl/server'
import {DataTable} from '@/components/page/services/DataTable'
import {columnsGR, columnsEN} from '@/components/page/services/Columns'

interface CafeProps {
  locale: string
  menu: Array<MenuItem>
}

async function Cafe({locale, menu}: CafeProps) {
  const translations = await getTranslations({locale, namespace: 'Services.Section1.TableControls'})

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