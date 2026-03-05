import type * as React from 'react'
import {Typography} from '@/src/components/ui/typography'
import {cn} from '@/src/lib/utils'

interface SectionProps extends React.ComponentPropsWithRef<'section'> {
  title?: string
  subtitle?: string
}

function Section({
  title,
  subtitle,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('py-20 space-y-20 first:pt-40 last:pb-40', className)}
      {...props}
    >
      {(title || subtitle) && (
        <article className='text-center space-y-4'>
          {title && (
            <Typography
              variant='h2'
              asChild
            >
              <h2>{title}</h2>
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant='lead'
              asChild
            >
              <p>{subtitle}</p>
            </Typography>
          )}
        </article>
      )}
      {children}
    </section>
  )
}

Section.displayName = 'Section'

export {Section}
