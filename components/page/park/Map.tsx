'use client'

import * as React from 'react'
import Image from 'next/image'
import * as maps from '@/public/park/map'

interface MapProps {
  locale: string
}

const Map = ({locale}: MapProps) => {
  return (
    <article>
      <figure className='relative w-full rounded-md overflow-hidden shadow-md'>
        <Image 
          src={locale === 'en' ? maps.mapEn : maps.mapGr} 
          alt='Yuppii Luna Park map'
          sizes='(min-width: 1540px) 1504px, (min-width: 1280px) 1248px, (min-width: 1040px) 992px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)'
          placeholder='blur'
        />
      </figure>
    </article>
  )
}

Map.displayName = 'Map'

export {Map}