import {createNavigation} from 'next-intl/navigation'
import {routing} from '@/src/i18n/routing'
import {cn} from '../lib/utils'

const {
  Link: NextIntlLink,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing)

function Link({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NextIntlLink>) {
  return (
    <NextIntlLink
      className={cn(
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        className
      )}
      {...props}
    />
  )
}

export {getPathname, Link, redirect, usePathname, useRouter}
