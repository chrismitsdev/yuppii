'use client'

import 'leaflet/dist/leaflet.css'
import {Marker} from '@adamscybot/react-leaflet-component-marker'
import type L from 'leaflet'
import type {LatLngTuple} from 'leaflet'
import {MapPinIcon, NavigationIcon, PhoneIcon} from 'lucide-react'
import Image from 'next/image'
import {useTranslations} from 'next-intl'
import * as React from 'react'
import {MapContainer, Popup, TileLayer} from 'react-leaflet'
import logo from '@/public/logo.svg'
import {Section} from '@/src/components/section'
import {Typography} from '@/src/components/ui/typography'

const coords = [40.84334844866346, 25.87527152454368] satisfies LatLngTuple

const ContactMap: React.FC = () => {
  const t = useTranslations('Pages.Contact.ContactMap')

  const handleMarkerRef = React.useCallback((marker: L.Marker | null) => {
    if (marker) {
      marker.openPopup()
    }
  }, [])

  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <div className='h-[500px] sm:h-[696px]'>
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
            icon={
              <MapPinIcon
                size={32}
                className='fill-secondary text-accent'
              />
            }
          >
            <Popup offset={[0, -6]}>
              <div className='space-y-2'>
                <Image
                  src={logo}
                  alt='Yuppii luna park logo'
                  width={117}
                />
                <div>
                  <div className='flex items-center gap-2'>
                    <NavigationIcon size={14} />
                    <Typography
                      className='underline text-accent! font-[Arima]! font-semibold'
                      variant='small'
                      asChild
                    >
                      <a
                        href='https://www.google.com/maps/dir/?api=1&destination=Yuppii+Luna+Park'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {t('popup.location')}
                      </a>
                    </Typography>
                  </div>
                  <div className='flex items-center gap-2'>
                    <PhoneIcon size={14} />
                    <Typography
                      className='underline text-accent! font-[Arima]! font-semibold'
                      variant='small'
                      asChild
                    >
                      <a href='tel:+306973433980'>{t('popup.phone')}</a>
                    </Typography>
                  </div>
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
