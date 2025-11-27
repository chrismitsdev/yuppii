import {type ClassValue, clsx} from 'clsx'
import {
  Beer,
  Coffee,
  CupSoda,
  GlassWater,
  HamburgerIcon,
  type LucideIcon,
  Martini,
  Milk,
  Pizza,
  Popcorn,
  SaladIcon,
  Utensils,
  Zap
} from 'lucide-react'
import type {Messages} from 'next-intl'
import {twMerge} from 'tailwind-merge'

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

export const sourceQueryString = '?src=website'

export const bannedKeywordPatterns = [
  // Traffic‑boosting offers
  /\btraffic\b/i,
  /\bvisitors\b/i,
  /\breach\b/i,
  /\bexposure\b/i,
  /\bmaximize reach\b/i,
  /\bturn visitors into opportunities\b/i,
  /\btargeted visitors\b/i,

  // Boost / AI / Growth
  /\bboost\b/i,
  /\bboost your traffic\b/i,
  /\bai\b/i,
  /\bartificial intelligence\b/i,
  /\bgrowth\b/i,
  /\bgenerate leads\b/i,
  /\bamplify\b/i,
  /\bengagement\b/i,

  // Trial / Subscription / Packages
  /\bfree trial\b/i,
  /\btrial\b/i,
  /\bone-week\b/i,
  /\bno-cost trial\b/i,
  /\bmonth-by-month\b/i,
  /\bsubscription\b/i,
  /\bscale up\b/i,
  /\b(350,000|400,000|4,000|thousands)\b/i,

  // Lead‑generation pitches
  /\bleads\b/i,
  /\blow website leads\b/i,
  /\blead generation\b/i,
  /\blead gen\b/i,
  /\bget increased leads\b/i,

  // Social / Video platforms
  /\binstagram\b/i,
  /\byoutube\b/i,
  /\bshorts\b/i,
  /\bsocial channels\b/i,
  /\bautomating\b/i,
  /\bhashtags\b/i,

  // SEO / Content writing
  /\bseo\b/i,
  /\bsearch ranking\b/i,
  /\bblog posts\b/i,
  /\bcontent\b/i,
  /\bauthor blog posts\b/i,
  /\bfeature them\b/i,

  // Hiring / Services
  /\bhire me\b/i,
  /\bauthor\b/i,
  /\bwriter\b/i,
  /\baffordable\b/i,
  /\bservice\b/i,
  /\bpackages\b/i,
  /\boffer\b/i,

  // URLs / Shorteners
  /http[s]?:\/\//i,
  /\bow\.ly\b/i,
  /\bcutt\.ly\b/i,
  /\bt\.ly\b/i,
  /\bbit\.ly\b/i,
  /\btinyurl\b/i,

  // CTAs & spammy verbs
  /\bclick here\b/i,
  /\bwatch this\b/i,
  /\bsee the results\b/i,
  /\bget more info\b/i,
  /\blet’s boost\b/i,
  /\bact now\b/i,
  /\blimited time\b/i,
  /\bguarantee\b/i,
  /\brisk-free\b/i,

  // Misc
  /\bweight loss\b/i,
  /\bdiet\b/i,
  /\bsupplements\b/i
]
