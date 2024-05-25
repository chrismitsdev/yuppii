import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'
import Messages from '@/messages/en.json'

// Conditionally add Tailwind CSS classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Conditionally check if an href link is currently active
function isActive(index: number, strX: string, strY: string) {
  return index !== 0 ? strX.includes(strY) : strX === strY
}

function formatCurrency(price: number | string) {
  const amount = 
    typeof price === 'string' 
      ? Number.parseFloat(price)
      : price

  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

// 'Beverage', 'Refreshment', 'Alcoholic', 'Food'
const uniqueCategories = [
  ...new Set(
    Object.values(Messages.Services.Section1.Menu).map(item => item.category)
  )
]

export {cn, isActive, formatCurrency, uniqueCategories}