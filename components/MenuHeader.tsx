import Image from 'next/image'
import {getAllCategoriesPromise} from '@/lib/promises/getAllCategoriesPromise'
import {Link} from '@/navigation'
import {MenuNavigation} from '@/components/MenuNavigation'
import {Container} from '@/components/Container'
import {LocaleSwitcher} from '@/components/LocaleSwitcher'
import logo from '@/public/logo.svg'

async function MenuHeader({locale}: {locale: string}) {
  const {categories} = await getAllCategoriesPromise(locale)

  // Mutate categories to add link which leads to "/menu" route
  const homeCategory: Category = {
    name: '',
    categoryName: locale === 'gr' ? 'Όλες οι κατηγορίες' : 'All categories',
    categoryNotes: null,
    categoryProducts: [],
  }
  categories.unshift(homeCategory)
  
  return (
    <>
      <header className='py-4'>
        <Container className='flex justify-between'>
          <Link href='/menu'>
            <Image src={logo} height={40} alt='Yuppii Luna Park' priority />
          </Link>
          <LocaleSwitcher locale={locale} type='mobile' />
        </Container>
      </header>
      
      <MenuNavigation categories={categories} />
    </>
  )
}

MenuHeader.displayName = 'MenuHeader'

export {MenuHeader}