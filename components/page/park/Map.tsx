'use client'

import * as React from 'react'
import Image from 'next/image'
import * as maps from '@/public/park/map'

function Map({locale}: {locale: string}) {
  return (
    <article>
      <figure className='relative w-full rounded-md overflow-hidden shadow-md'>
        <Image 
          src={locale === 'en' ? maps.mapEn : maps.mapGr} 
          alt='Yuppii Luna Park map'
          sizes='(min-width: 1080px) 992px, calc(95.26vw - 18px)'
          placeholder='blur'
        />
      </figure>
    </article>
  )
}

Map.displayName = 'Map'

export {Map}