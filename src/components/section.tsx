import type * as React from 'react'
import {Typography} from '@/src/components/ui/typography'
import {cn} from '@/src/lib/utils'

interface SectionProps extends React.ComponentPropsWithRef<'section'> {
  title?: string
  subtitle?: string
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn('py-20 space-y-20 first:pt-40 last:pb-40', className)}
      {...props}
    >
      {(title || subtitle) && (
        <article className='flex flex-col space-y-4'>
          {title && (
            <Typography
              variant='h2'
              className='text-center text-secondary'
              asChild
            >
              <h2>{title}</h2>
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant='lead'
              className='text-center'
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
