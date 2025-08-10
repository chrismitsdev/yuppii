import {Suspense} from 'react'
import {LocaleSwitcher} from '@/src/components/locale-switcher'

const SuspenseLocaleSwitcher: React.FC = () => {
  return (
    <Suspense>
      <LocaleSwitcher />
    </Suspense>
  )
}

SuspenseLocaleSwitcher.displayName = 'SuspenseLocaleSwitcher'

export {SuspenseLocaleSwitcher}
