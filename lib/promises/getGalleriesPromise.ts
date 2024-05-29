import {StaticImageData} from 'next/image'
import {getTranslations} from 'next-intl/server'
import * as carnivalGames from '@/public/games/galleries/carnival-games'
import * as inflatables from '@/public/games/galleries/inflatables'
import * as basket from '@/public/games/galleries/basket'
import * as bumperCars from '@/public/games/galleries/bumper-cars'
import * as cinema from '@/public/games/galleries/cinema'
import * as dryslope from '@/public/games/galleries/dryslope'
import * as formulaCars from '@/public/games/galleries/formula-cars'
import * as hawaiianSurfing from '@/public/games/galleries/hawaiian-surfing'
import * as junior from '@/public/games/galleries/junior'
import * as kiddyRides from '@/public/games/galleries/kiddy-rides'
import * as playground from '@/public/games/galleries/playground'
import * as tableSoccer from '@/public/games/galleries/table-soccer'
import * as train from '@/public/games/galleries/train'
import * as trampoline from '@/public/games/galleries/trampoline'
import * as electricCars from '@/public/games/galleries/electric-cars'
import * as airHockey from '@/public/games/galleries/air-hockey'
import * as cranes from '@/public/games/galleries/cranes'
import * as powerGames from '@/public/games/galleries/power-games'
import * as luckyGames from '@/public/games/galleries/lucky-games'

export async function getGalleriesPromise(locale: string) {
  const tSection = await getTranslations({locale, namespace: 'Games.Section1'})
  const tGalleries = await getTranslations({locale, namespace: 'Games.Section1.Galleries'})

  const gamesSection = {
    title: tSection('title'),
    subtitle: tSection('subtitle')
  }

  const translatedGames: Array<Game & {images: StaticImageData[]}> = [
    {
      value: tGalleries('Inflatables.label').toLowerCase(),
      label: tGalleries('Inflatables.label'),
      images: Array.from(Object.values(inflatables))
    },
    {
      value: tGalleries('Playground.label').toLowerCase(),
      label: tGalleries('Playground.label'),
      images: Array.from(Object.values(playground))
    },
    {
      value: tGalleries('Trampoline.label').toLowerCase(),
      label: tGalleries('Trampoline.label'),
      images: Array.from(Object.values(trampoline))
    },
    {
      value: tGalleries('Cinema.label').toLowerCase(),
      label: tGalleries('Cinema.label'),
      images: Array.from(Object.values(cinema))
    },
    {
      value: tGalleries('Dryslope.label').toLowerCase(),
      label: tGalleries('Dryslope.label'),
      images: Array.from(Object.values(dryslope))
    },
    {
      value: tGalleries('BumperCars.label').toLowerCase(),
      label: tGalleries('BumperCars.label'),
      images: Array.from(Object.values(bumperCars))
    },
    {
      value: tGalleries('Junior.label').toLowerCase(),
      label: tGalleries('Junior.label'),
      images: Array.from(Object.values(junior))
    },
    {
      value: tGalleries('FormulaCars.label').toLowerCase(),
      label: tGalleries('FormulaCars.label'),
      images: Array.from(Object.values(formulaCars))
    },
    {
      value: tGalleries('Train.label').toLowerCase(),
      label: tGalleries('Train.label'),
      images: Array.from(Object.values(train))
    },
    {
      value: tGalleries('CarnivalGames.label').toLowerCase(),
      label: tGalleries('CarnivalGames.label'),
      images: Array.from(Object.values(carnivalGames))
    },
    {
      value: tGalleries('TableSoccer.label').toLowerCase(),
      label: tGalleries('TableSoccer.label'),
      images: Array.from(Object.values(tableSoccer))
    },
    {
      value: tGalleries('Basket.label').toLowerCase(),
      label: tGalleries('Basket.label'),
      images: Array.from(Object.values(basket))
    },
    {
      value: tGalleries('KiddyRides.label').toLowerCase(),
      label: tGalleries('KiddyRides.label'),
      images: Array.from(Object.values(kiddyRides))
    },
    {
      value: tGalleries('HawaiianSurfing.label').toLowerCase(),
      label: tGalleries('HawaiianSurfing.label'),
      images: Array.from(Object.values(hawaiianSurfing))
    },
    {
      value: tGalleries('ElectricCars.label').toLowerCase(),
      label: tGalleries('ElectricCars.label'),
      images: Array.from(Object.values(electricCars))
    },
    {
      value: tGalleries('AirHockey.label').toLowerCase(),
      label: tGalleries('AirHockey.label'),
      images: Array.from(Object.values(airHockey))
    },
    {
      value: tGalleries('PowerGames.label').toLowerCase(),
      label: tGalleries('PowerGames.label'),
      images: Array.from(Object.values(powerGames))
    },
    {
      value: tGalleries('Cranes.label').toLowerCase(),
      label: tGalleries('Cranes.label'),
      images: Array.from(Object.values(cranes))
    },
    {
      value: tGalleries('GiftGames.label').toLowerCase(),
      label: tGalleries('GiftGames.label'),
      images: Array.from(Object.values(luckyGames))
    },
  ]

  return {
    gamesSection,
    translatedGames
  }
}