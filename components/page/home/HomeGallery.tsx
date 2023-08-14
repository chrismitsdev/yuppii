'use client'

import {Gallery} from 'react-photoswipe-gallery'
import {GalleryImages, options} from '@/components/GalleryImages'
import * as images from '@/public/home/gallery'
import 'photoswipe/dist/photoswipe.css'

const galleryImages = Array.from (Object.values(images))

const HomeGallery = () => {
  return (
    <article>
      <Gallery options={options}>
        <div className='grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-4 lg:grid-cols-6'>
          <GalleryImages images={galleryImages} /> 
        </div>
      </Gallery>
    </article>
  )
}

HomeGallery.displayName = 'HomeGallery'

export {HomeGallery}