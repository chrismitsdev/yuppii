import {cn} from '@/lib/utils'

const TypographyList = ({className, ...props}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul 
    className={cn(
      'my-6 ml-6 list-disc [&>li]:mt-2', 
      className
    )}
    {...props}
  />
)

const TypographyListItem = ({className, ...props}: React.HTMLAttributes<HTMLLIElement>) => (
  <li 
    className={className} 
    {...props} 
  />
)

TypographyList.displayName = 'TypographyList'
TypographyListItem.displayName = 'TypographyListItem'

export {TypographyList, TypographyListItem}