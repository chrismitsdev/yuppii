'use client'

import {LoaderCircleIcon} from 'lucide-react'
import {useLocale, useTranslations} from 'next-intl'
import {useTransition} from 'react'
import {EnglishFlag} from '@/src/components/flags/english-flag'
import {GreekFlag} from '@/src/components/flags/greek-flag'
import {IconButton} from '@/src/components/ui/icon-button'
import {usePathname, useRouter} from '@/src/i18n/navigation'
import {routing} from '@/src/i18n/routing'

const flags: Record<
  (typeof routing.locales)[number],
  React.ComponentType<CustomIconProps>
> = {
  el: GreekFlag,
  en: EnglishFlag
}

function LocaleCycle({
  variant = 'secondary',
  onClick,
  ...props
}: Omit<React.ComponentProps<typeof IconButton>, 'aria-label'>) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('Components.LocaleCycle')
  const locales = routing.locales
  const Flag = flags[locale]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length]
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale, scroll: false})
    })

    onClick?.(e)
  }

  return (
    <IconButton
      aria-label={t('label')}
      variant={variant}
      onClick={handleClick}
      disabled={isPending}
      {...props}
    >
      {isPending ? <LoaderCircleIcon className='animate-spin' /> : <Flag />}
    </IconButton>
  )
}

LocaleCycle.displayName = 'LocaleCycle'

export {LocaleCycle}
