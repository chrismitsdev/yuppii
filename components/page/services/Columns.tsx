'use client'

import {ColumnDef} from '@tanstack/react-table'
import {Badge} from '@/components/ui/Badge'
import {ArrowUpDown, ArrowUp, ArrowDown} from 'lucide-react'

const columnsGR: ColumnDef<MenuItem>[] = [
  {
    accessorKey: 'name',
    header: ({column}) => (
      <div 
        className='h-full px-4 flex items-center justify-between active:bg-secondary transition cursor-pointer sm:hover:bg-secondary' 
        onClick={() => column.toggleSorting()}
      >
        <span className='uppercase'>Ονομα</span>
        {!column.getIsSorted() && <ArrowUpDown className='w-4 h-4 mb-[3px]' />}
        {column.getIsSorted() === 'asc' && <ArrowUp className='w-4 h-4 mb-[3px]' />}
        {column.getIsSorted() === 'desc' && <ArrowDown className='w-4 h-4 mb-[3px]' />}
      </div>
    )
  },
  {
    accessorKey: 'category',
    filterFn: (row, id, value) => (
      value.includes(row.getValue(id))
    ),
  },
  {
    accessorKey: 'description',
    header: () => <span className='uppercase'>Πληροφοριες</span>,
    cell: ({row}) => {
      const descriptionCellValue: string[] | null = row.getValue('description')
      
      if (descriptionCellValue?.length) {
        return (
          <div className='flex flex-wrap gap-1'>
            {descriptionCellValue.map(info => (
              <Badge key={info} variant='accent'>
                {info}
              </Badge>
            ))}
          </div>
        )
      }
    }
  },
  {
    accessorKey: 'price',
    header: () => <span className='uppercase'>Τιμη</span>,
    cell: ({row}) => {
      const amount = parseFloat(row.getValue('price'))
      
      return new Intl.NumberFormat('el-GR', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount)
    }
  }
]

const columnsEN: ColumnDef<MenuItem>[] = [
  {
    accessorKey: 'name',
    header: ({column}) => (
      <div 
        className='h-full px-4 flex items-center justify-between active:bg-secondary transition cursor-pointer sm:hover:bg-secondary' 
        onClick={() => column.toggleSorting()}
      >
        <span className='uppercase'>Name</span>
        {!column.getIsSorted() && <ArrowUpDown className='w-4 h-4 mb-[3px]' />}
        {column.getIsSorted() === 'asc' && <ArrowUp className='w-4 h-4 mb-[3px]' />}
        {column.getIsSorted() === 'desc' && <ArrowDown className='w-4 h-4 mb-[3px]' />}
      </div>
    )
  },
  {
    accessorKey: 'category',
    filterFn: (row, id, value) => (
      value.includes(row.getValue(id))
    ),
  },
  {
    accessorKey: 'description',
    header: () => <span className='uppercase'>Information</span>,
    cell: ({row}) => {
      const descriptionCellValue: string[] | null = row.getValue('description')
      
      if (descriptionCellValue?.length) {
        return (
          <div className='flex flex-wrap gap-1'>
            {descriptionCellValue.map(info => (
              <Badge key={info} variant='accent'>
                {info}
              </Badge>
            ))}
          </div>
        )
      }
    }
  },
  {
    accessorKey: 'price',
    header: () => <span className='uppercase'>Price</span>,
    cell: ({row}) => {
      const amount = parseFloat(row.getValue('price'))
      
      return new Intl.NumberFormat('el-GR', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount)
    }
  }
]

export {columnsGR, columnsEN}