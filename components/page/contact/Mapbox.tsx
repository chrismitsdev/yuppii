'use client'

import * as React from 'react'
import Image from 'next/image'
import Map, {Marker, Popup} from 'react-map-gl'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {MapPin, Phone, Mail, LocateFixed} from 'lucide-react'
import logo from '@/public/logo.svg'
import 'mapbox-gl/dist/mapbox-gl.css'

type MapboxProps = {
  translations: {
    location: string
    email: string
    phone: string
  }
  token: string
}

type Coords = {
  lat: number,
  lon: number
}

const location: Coords = {
  lat: 40.84336093510751,
  lon: 25.875331041502044
}

function Mapbox({translations, token}: MapboxProps) {
  const [showPopup, setShowPopup] = React.useState<boolean>(false)

  return (
    <article>
      <div className='overflow-hidden rounded-md shadow-md flex'>
        <Map
          mapboxAccessToken={token}
          initialViewState={{
            latitude: location.lat,
            longitude: location.lon,
            zoom: 15,
          }}
          style={{width: '100%', minHeight: 424}}
          mapStyle='mapbox://styles/mapbox/streets-v10'
          attributionControl={false}
          doubleClickZoom={false}
          reuseMaps
        >
          <Marker 
            latitude={location.lat} 
            longitude={location.lon} 
            anchor='bottom' 
            style={{cursor: 'pointer'}}
            onClick={() => setShowPopup(prevState => !prevState)}
          >
            <MapPin strokeWidth={1.5} className='w-8 h-8 text-accent' fill='#F59CBA' />
          </Marker>
          {showPopup && (
            <Popup 
              latitude={location.lat} 
              longitude={location.lon} 
              anchor='bottom' 
              offset={35}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
            >
              <div className='bg-primary p-4'>
                <div className='mb-4 mr-6'>
                  <Image className='w-full' src={logo} alt='Yuppii Luna Park' />
                </div>
                <div className='flex flex-col gap-2'>
                  <TypographySmall className='flex items-center gap-1 text-xs font-normal'>
                    <LocateFixed className='mb-0.5' size={14} />
                    <a className='outline-none' href='https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park' target='_blank'>
                      {translations.location}
                    </a>
                  </TypographySmall>
                  <TypographySmall className='flex items-center gap-1 text-xs font-normal'>
                    <Mail className='mb-0.5' size={14} />
                    <a className='outline-none' href='mailto:yuppiilunapark@gmail.com' target='_blank'>
                      {translations.email}
                    </a>
                  </TypographySmall>
                  <TypographySmall className='flex items-center gap-1 text-xs font-normal'>
                    <Phone className='mb-0.5' size={14} />
                    <a className='outline-none' href='tel:+306973433980'>
                      {translations.phone}
                    </a>
                  </TypographySmall>
                </div>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </article>
  )
}

Mapbox.displayName = 'Mapbox'

export {Mapbox}