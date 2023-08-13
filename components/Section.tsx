import * as React from 'react'
import {TypographyH2} from '@/components/typography/TypographyH2'
import {TypographyLead} from '@/components/typography/TypographyLead'
import {cn} from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
}

const Section = React.forwardRef<
  HTMLElement, 
  SectionProps
>(({title, subtitle, className, children, ...props}, ref) => (
  <section
    className={cn('py-12', className)}
    ref={ref} 
    {...props}
  >
    {(title || subtitle) && (
      <article className='mb-12 flex flex-col'>
        {title && <TypographyH2 className='text-center'>{title}</TypographyH2>}
        {subtitle && <TypographyLead className='text-center'>{subtitle}</TypographyLead>}
      </article>
    )}
    {children}
  </section>
))

Section.displayName = 'Section'

export {Section}