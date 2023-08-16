'use client'

import {Gallery} from 'react-photoswipe-gallery'
import {options, GalleryImages} from '@/components/GalleryImages'
import * as images from '@/public/home/gallery'
import 'photoswipe/dist/photoswipe.css'

const HomeGallery = () => {
  return (
    <article>
      <Gallery options={options}>
        <div className='grid gap-4 justify-between grid-cols-[repeat(2,_minmax(0,_150px))] sm:grid-cols-[repeat(4,_minmax(0,_150px))]'>
          <GalleryImages 
            images={Array.from(Object.values(images))}
            sizes='(min-width: 780px) 150px, (min-width: 640px) 140px, (min-width: 380px) 150px, calc(40vw + 6px)'
          />
        </div>
      </Gallery>
    </article>
  )
}

HomeGallery.displayName = 'HomeGallery'

export {HomeGallery}