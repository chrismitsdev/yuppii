'use client'

import 'leaflet/dist/leaflet.css'
import {Marker} from '@adamscybot/react-leaflet-component-marker'
import type L from 'leaflet'
import type {LatLngTuple} from 'leaflet'
import {MapPinIcon, NavigationIcon, PhoneIcon} from 'lucide-react'
import {useTranslations} from 'next-intl'
import {useCallback} from 'react'
import {MapContainer, Popup, TileLayer} from 'react-leaflet'
import {Section} from '@/src/components/section'

const coords = [40.84334844866346, 25.87527152454368] satisfies LatLngTuple

function ContactMap() {
  const t = useTranslations('Pages.Contact.ContactMap')

  const handleMarkerRef = useCallback((marker: L.Marker | null) => {
    if (marker) {
      marker.openPopup()
    }
  }, [])

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <div className='h-125 sm:h-174'>
        <MapContainer
          className='h-full rounded-lg shadow-md'
          center={coords}
          zoom={17}
          scrollWheelZoom
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker
            position={coords}
            ref={handleMarkerRef}
            icon={<MapPinIcon className='fill-secondary text-accent' />}
          >
            <Popup offset={[0, -8]}>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <NavigationIcon className='size-4 shrink-0' />
                  <a
                    className='text-primary-foreground!'
                    href='https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('popup.location')}
                  </a>
                </div>
                <div className='flex items-center gap-2'>
                  <PhoneIcon className='size-4 shrink-0' />
                  <a
                    className='text-primary-foreground!'
                    href='tel:+306973433980'
                  >
                    {t('popup.phone')}
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Section>
  )
}

ContactMap.displayName = 'ContactMap'

export default ContactMap
