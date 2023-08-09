'use client'

import ReactDOMServer from 'react-dom/server'
import Image, {StaticImageData} from 'next/image'
import {Item} from 'react-photoswipe-gallery'
import {type PhotoSwipeOptions} from 'photoswipe'
import {Button} from '@/components/ui/Button'
import {ChevronLeft, ChevronRight, X, ZoomIn} from 'lucide-react'

const options: PhotoSwipeOptions = {
  arrowPrevSVG: ReactDOMServer.renderToString(
    <Button size='icon' className='h-8 w-8 rounded-sm lg:w-10 lg:h-10 lg:rounded-md'>
      <ChevronLeft strokeWidth={2.5} className='w-6 h-6' />
    </Button>
  ),
  arrowNextSVG: ReactDOMServer.renderToString(
    <Button size='icon' className='h-8 w-8 rounded-sm lg:w-10 lg:h-10 lg:rounded-md'>
      <ChevronRight strokeWidth={2.5} className='w-6 h-6' />
    </Button>
  ),
  closeSVG: ReactDOMServer.renderToString(
    <Button size='icon' className='h-8 w-8 rounded-sm lg:w-10 lg:h-10 lg:rounded-md'>
      <X strokeWidth={2.5} className='w-6 h-6' />
    </Button>
  ),
  zoomSVG: ReactDOMServer.renderToString(
    <Button size='icon' className='h-8 w-8 rounded-sm lg:w-10 lg:h-10 lg:rounded-md'>
      <ZoomIn strokeWidth={2.5} className='w-6 h-6' />
    </Button>
  ),
  bgClickAction: 'close'
}

interface ImagesProps {
  images: StaticImageData[]
}

const GalleryImages = ({images}: ImagesProps) => {
  return images.map((image, _, arr) => {
    const rawImageName = image.src.split('/').pop()?.split('.')[0]!
    const foundThumb = arr.find(i => i.src.includes(`${rawImageName}_thumb`))

    if (!rawImageName.includes('_thumb')) {
      return (
        <Item
          key={image.src}
          original={image.src}
          thumbnail={foundThumb?.src}
          width={image.width}
          height={image.height}
        >
          {({ref, open}) => (
            <Image 
              className='cursor-pointer w-full rounded shadow-md hover:scale-105 transition'
              src={foundThumb!}
              alt={foundThumb?.src!}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
              placeholder='blur'
            />
          )}
        </Item>
      )
    }

    return null
  })
}

GalleryImages.displayName = 'GalleryImages'

export {GalleryImages, options}