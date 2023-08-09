import * as React from 'react'
import {cn} from '@/lib/utils'

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref) => (
  <table
    className={cn(
      'w-full border-collapse caption-bottom',
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <thead 
    className={cn(
      '[&_tr]:border-b', 
      className
    )} 
    ref={ref} 
    {...props} 
  />
))

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <th
    className={cn(
      'px-4 py-2 text-left align-middle select-none whitespace-nowrap font-bold text-sm sm:text-base',
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tbody
    className={cn(
      '[&_tr:last-child]:border-0', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
  <tr
    className={cn(
      'border-b border-b-secondary transition-colors data-selected:bg-accent',
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <td
    className={cn(
      'px-4 py-2 pb-[7px] align-middle select-none whitespace-nowrap font-semibold text-sm sm:text-base sm:font-medium', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tfoot
    className={cn(
      'bg-primary font-medium text-accent', 
      className
    )}
    ref={ref}
    {...props}
  />
))

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
  <caption
    className={cn(
      'mt-4 text-sm text-accent', 
      className
    )}
    ref={ref}
    {...props}
  />
))

Table.displayName = 'Table'
TableHeader.displayName = 'TableHeader'
TableBody.displayName = 'TableBody'
TableFooter.displayName = 'TableFooter'
TableRow.displayName = 'TableRow'
TableHead.displayName = 'TableHead'
TableCell.displayName = 'TableCell'
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
