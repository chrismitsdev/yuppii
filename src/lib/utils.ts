import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {Messages} from 'next-intl'
import {
  type LucideIcon,
  Coffee,
  Milk,
  CupSoda,
  GlassWater,
  Beer,
  Zap,
  Utensils,
  Pizza,
  SaladIcon,
  Martini,
  Popcorn,
  HamburgerIcon
} from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(price: number | string) {
  const amount = typeof price === 'string' ? Number.parseFloat(price) : price

  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}

export async function sleep(sleepTime: number = 1000) {
  await new Promise((resolve) => setTimeout(resolve, sleepTime))
}

export const isoLocaleMap = {
  en: 'en-US',
  gr: 'el-GR'
}

export const categoryIcons: Record<keyof Messages['Menu'], LucideIcon> = {
  Coffee: Coffee,
  Beverage: CupSoda,
  Refreshment: Milk,
  Energy: Zap,
  Spirits: GlassWater,
  Beer: Beer,
  Cocktail: Martini,
  Pizza: Pizza,
  Salad: SaladIcon,
  Snack: Popcorn,
  Food: Utensils,
  Burger: HamburgerIcon
}
