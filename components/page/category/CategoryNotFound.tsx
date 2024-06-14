import {OctagonAlert} from 'lucide-react'
import {TypographyLarge} from '@/components/typography/TypographyLarge'

function CategoryNotFound({locale}: {locale: string}) {
  const isGr = locale === 'gr'
  
  return (
    <div className='flex flex-col items-center gap-4'>
      <OctagonAlert width={48} height={48} />
      {isGr 
        ? <TypographyLarge>Δεν βρέθηκαν προϊόντα</TypographyLarge> 
        : <TypographyLarge>No products found</TypographyLarge>
      }
    </div>
  )
}

CategoryNotFound.displayName = 'CategoryNotFound'

export {CategoryNotFound}