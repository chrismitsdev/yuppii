'use client'

import {Link, usePathname} from '@/navigation'
import {Tooltip, TooltipPortal, TooltipTrigger, TooltipContent} from '@/components/ui/Tooltip'
import {GreeceFlag} from '@/components/flags/GreeceFlag'
import {AmericaFlag} from '@/components/flags/AmericaFlag'
import {buttonVariants} from '@/components/ui/Button'
import {Globe} from 'lucide-react'

interface LanguagePickerProps {
  locale: string
  tooltipContent?: string
  type?: 'desktop' | 'mobile'
}

const LocaleSwitcher = ({locale, type = 'desktop', tooltipContent}: LanguagePickerProps) => {
  const currentPath = usePathname()
  const switchLocale = locale === 'gr' ? 'en' : 'gr'
  
  if (type === 'desktop') {
    return (
      <Tooltip>
        <TooltipTrigger
          className={buttonVariants({
            className: 'data-open:bg-secondary',
            variant: 'ghost-secondary', 
            size: 'icon'
          })}
          asChild
        >
          <Link href={currentPath} locale={switchLocale}>
            <Globe strokeWidth={2.5} />
          </Link>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {tooltipContent}
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    )
  } else {
    return (
      <div 
        className='relative [&>svg]:absolute [&>svg]:box-content [&>svg]:border-2 [&>svg]:border-primary [&>svg]:rounded-full [&>svg]:-top-1.5 [&>svg]:-right-1.5'>
        {locale === 'gr' ? <GreeceFlag /> : <AmericaFlag />}
        <Link 
          className={buttonVariants({variant: 'accent', size: 'icon'})} 
          href={currentPath}
          locale={switchLocale}
        >
          <Globe strokeWidth={2.5} />
        </Link>
      </div>
    )
  }
}

LocaleSwitcher.displayName = 'LocaleSwitcher'

export {LocaleSwitcher}