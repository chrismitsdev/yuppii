'use client'

import * as React from 'react'
import Image from 'next/image'
import Map, {Marker, Popup} from 'react-map-gl'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {MapPin, Phone, Mail, LocateFixed} from 'lucide-react'
import logo from '@/public/logo.svg'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapboxProps {
  translations: {
    location: string
    email: string
    phone: string
  }
}

const YuppiiLocation = {
  lat: 40.84336093510751,
  lon: 25.875331041502044
} as Coords

const Mapbox = ({translations}: MapboxProps) => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false)

  return (
    <article className='max-w-5xl mx-auto'>
      <div className='overflow-hidden rounded-md shadow-md flex'>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            latitude: YuppiiLocation.lat,
            longitude: YuppiiLocation.lon,
            zoom: 15,
          }}
          style={{width: '100%', minHeight: 424}}
          mapStyle='mapbox://styles/mapbox/streets-v10'
          attributionControl={false}
          doubleClickZoom={false}
          reuseMaps
        >
          <Marker 
            latitude={YuppiiLocation.lat} 
            longitude={YuppiiLocation.lon} 
            anchor='bottom' 
            style={{cursor: 'pointer'}}
            onClick={() => setShowPopup(prevState => !prevState)}
          >
            <MapPin strokeWidth={1.5} className='w-8 h-8 text-accent' fill='#F59CBA' />
          </Marker>
          {showPopup && (
            <Popup 
              latitude={YuppiiLocation.lat} 
              longitude={YuppiiLocation.lon} 
              anchor='bottom' 
              offset={35}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
            >
              <div className='bg-[#CEE9E7] px-2 py-3'>
                <div className='mb-3'>
                  <Image width={60} src={logo} alt='Yuppii Luna Park' />
                </div>
                <div className='flex flex-col gap-1'>
                  <TypographySmall className='text-xs font-semibold flex items-center gap-1'>
                    <LocateFixed className='mb-0.5' size={14} />
                    <a className='outline-none' href='https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park' target='_blank'>
                      {translations.location}
                    </a>
                  </TypographySmall>
                  <TypographySmall className='text-xs font-semibold flex items-center gap-1'>
                    <Mail className='mb-0.5' size={14} />
                    <a className='outline-none' href='mailto:yuppiilunapark@gmail.com' target='_blank'>
                      {translations.email}
                    </a>
                  </TypographySmall>
                  <TypographySmall className='text-xs font-semibold flex items-center gap-1'>
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