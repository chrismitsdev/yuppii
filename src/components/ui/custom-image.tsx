import Image, {type StaticImageData} from 'next/image'

interface CustomImageProps
  extends Omit<React.ComponentPropsWithRef<typeof Image>, 'src'> {
  src: StaticImageData
}

function CustomImage({
  src,
  alt,
  draggable = false,
  ...props
}: CustomImageProps) {
  return (
    <Image
      placeholder={`data:image/svg+xml;base64,${toBase64(
        spinnerLoaderCircle(src.width, src.height)
      )}`}
      src={src}
      alt={alt}
      draggable={draggable}
      {...props}
    />
  )
}

CustomImage.displayName = 'CustomImage'

export {CustomImage}

export function spinnerLoaderCircle(w: number, h: number) {
  const size = Math.min(w, h)
  const stroke = 2
  const center = size / 2
  const radius = center - stroke

  return `
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='${w}'
      height='${h}'
      viewBox='0 0 ${size} ${size}'
      fill='none'
      stroke='%23b1a082'
      stroke-width='${stroke}'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M${center + radius * Math.cos(Math.PI / 4)} ${center - radius * Math.sin(Math.PI / 4)}
               A ${radius} ${radius} 0 1 1 ${center - 0.01} ${center - radius}' />
      <animateTransform
        attributeName='transform'
        type='rotate'
        from='0 ${center} ${center}'
        to='360 ${center} ${center}'
        dur='1s'
        repeatCount='indefinite'
      />
    </svg>
  `
}

function toBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
}
