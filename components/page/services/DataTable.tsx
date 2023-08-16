'use client'

import * as React from 'react'
import {
  useReactTable,
  ColumnDef, 
  SortingState,
  ColumnFiltersState,
  getCoreRowModel, 
  getPaginationRowModel, 
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  flexRender
} from '@tanstack/react-table'
import {
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from '@/components/ui/DropdownMenu'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/Table'
import {Button, buttonVariants} from '@/components/ui/Button'
import {Input} from '@/components/ui/Input'
import {Badge} from '@/components/ui/Badge'
import {Separator} from '@/components/ui/Separator'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {ScrollArea, ScrollBar} from '@/components/ui/ScrollArea'
import {ChevronLeft, ChevronRight,ChevronsLeft, ChevronsRight,PlusCircle} from 'lucide-react'

type MessageKeys = 'inputPlaceholder' | 'categoryButton' | 'categoryBadge' | 'dropdownTitle' | 'noResults' | 'pageFrom' | 'pageAll'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  messages: {
    [key in MessageKeys]: string
  }
}

const DataTable = <TData, TValue>({columns, data, messages}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting, 
      columnFilters
    },
    initialState: {
      columnVisibility: {
        'category': false
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  })

  const categories = table.getColumn('category')?.getFacetedUniqueValues()
  const selectedCategories = new Set(table.getColumn('category')?.getFilterValue() as string[])

  return (
    <React.Fragment>
      <div className='pb-2 flex flex-col items-start gap-2 sm:flex-row sm:pb-4'>
        <Input
          className='sm:max-w-xs'
          value={table.getColumn('name')?.getFilterValue() as string ?? ''}
          onChange={e => table.getColumn('name')?.setFilterValue(e.target.value)}
          placeholder={messages.inputPlaceholder}
        />
        <DropdownMenu>
          <DropdownMenuTrigger 
            className={buttonVariants({variant: 'outline'})}
            disabled={!categories?.size}
          >
            <PlusCircle />
            <span>{messages.categoryButton}</span>
            {selectedCategories.size > 0 && (
              <>
                <Separator orientation='vertical' />
                {selectedCategories.size < 3 
                  ? (
                    <div className='flex space-x-1'>
                      {Array.from(selectedCategories).map(checkedCategory => (
                        <Badge key={checkedCategory} variant='accent'>
                          {checkedCategory}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <Badge variant='accent'>
                      {selectedCategories.size} {messages.categoryBadge}
                    </Badge>
                  )
                }
              </>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start'>
            <DropdownMenuLabel>{messages.dropdownTitle}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories?.size && Array.from(categories.keys()).map(category => {
              const isSelected = selectedCategories.has(category)

              return (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={isSelected}
                  onCheckedChange={() => {
                    isSelected 
                      ? selectedCategories.delete(category) 
                      : selectedCategories.add(category)

                    table.getColumn('category')?.setFilterValue(
                      Array.from(selectedCategories).length 
                        ? Array.from(selectedCategories) 
                        : undefined
                    )
                  }}
                >
                  <span className='uppercase font-medium'>{category}</span>
                </DropdownMenuCheckboxItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea 
        className='bg-secondary/50 rounded border border-secondary' 
        hasCorner={false} 
        type='always'
      >
        <ScrollBar orientation='horizontal' />
        <Table className='table-fixed'>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead 
                    key={header.id} 
                    className={
                      header.index === 0 
                        ? 'p-0 h-10 w-[238px] sm:w-[268px]'
                        : header.index === 1
                          ? 'w-[1024px]'
                          : 'w-[68px] sm:w-20 text-right'
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                    }
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell 
                      key={cell.id} 
                      className={(typeof cell.getValue() === 'number' && 'text-right') as string}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-full sm:text-center'>
                  {messages.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className='pt-2 flex justify-end items-center gap-8 sm:pt-4'>
        <TypographySmall>
          {messages.pageFrom}
          {' '}<span className='font-semibold'>{table.getState().pagination.pageIndex + 1}</span>{' '}
          {messages.pageAll}
          {' '}<span className='font-semibold'>{table.getPageCount()}</span>
        </TypographySmall>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='icon'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft strokeWidth={2.5} />
          </Button>
          <Button
            variant='outline'
            size='icon'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft strokeWidth={2.5} />
          </Button>
          <Button
            variant='outline'
            size='icon'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight strokeWidth={2.5} />
          </Button>
          <Button
            variant='outline'
            size='icon'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

DataTable.displayName = 'DataTable'

export {DataTable}