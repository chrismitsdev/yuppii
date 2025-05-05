'use client'

import * as React from 'react'
import {Globe} from 'lucide-react'
import {useLocale} from 'next-intl'
import {Link, usePathname} from '@/src/i18n/navigation'
import {Button} from '@/src/components/ui/button'
import {GreeceFlag} from '@/src/components/flags/greece-flag'
import {EnglishFlag} from '@/src/components/flags/english-flag'

const flagLookup = {
  gr: (
    <GreeceFlag
      className='absolute -top-2 -right-2 border-2 border-primary rounded-full'
      size={20}
    />
  ),
  en: (
    <EnglishFlag
      className='absolute -top-2 -right-2 border-2 border-primary rounded-full'
      size={20}
    />
  )
}

const LocaleSwitcher: React.FC = () => {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <Button
      className='relative'
      variant='accent'
      size='icon'
      asChild
    >
      <Link
        href={pathname}
        locale={locale === 'gr' ? 'en' : 'gr'}
      >
        {flagLookup[locale]}
        <Globe />
      </Link>
    </Button>
  )
}

LocaleSwitcher.displayName = 'LocaleSwitcher'

export {LocaleSwitcher}
