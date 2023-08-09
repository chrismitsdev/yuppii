import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

// Conditionally add Tailwind CSS classes
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// Conditionally check if an href link is currently active
const isActive = (index: number, strX: string, strY: string) => {
  return index !== 0 ? strX.includes(strY) : strX === strY
}

export {cn, isActive}