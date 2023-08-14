'use client'

import ReactDOMServer from 'react-dom/server'
import Image, {StaticImageData} from 'next/image'
import {Item} from 'react-photoswipe-gallery'
import {type PhotoSwipeOptions} from 'photoswipe'
import {Button} from '@/components/ui/Button'
import {ChevronLeft, ChevronRight, X, ZoomIn} from 'lucide-react'

const options: PhotoSwipeOptions = {
  arrowPrevSVG: ReactDOMServer.renderToString(
    <Button size='icon'>
      <ChevronLeft strokeWidth={2.5} />
    </Button>
  ),
  arrowNextSVG: ReactDOMServer.renderToString(
    <Button size='icon'>
      <ChevronRight strokeWidth={2.5} />
    </Button>
  ),
  closeSVG: ReactDOMServer.renderToString(
    <Button size='icon'>
      <X strokeWidth={2.5} />
    </Button>
  ),
  zoomSVG: ReactDOMServer.renderToString(
    <Button size='icon'>
      <ZoomIn strokeWidth={2.5} />
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

    if (!rawImageName.includes('_thumb') && foundThumb) {
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
              src={foundThumb}
              alt={foundThumb.src}
              onClick={open}
              placeholder='blur'
              ref={ref as React.MutableRefObject<HTMLImageElement>}
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