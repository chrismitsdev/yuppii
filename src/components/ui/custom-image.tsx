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
        spinner(src.width, src.height)
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

function spinner(w: number, h: number) {
  const radius = Math.min(w, h) / 4
  const cx = w / 2
  const cy = h / 2

  return `
    <svg
      width='${w}'
      height='${h}'
      viewBox='0 0 ${w} ${h}'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <circle
        cx='${cx}'
        cy='${cy}'
        r='${radius}'
        stroke='#b1a082'
        stroke-width='4'
        stroke-dasharray='60'
        stroke-linecap='round'
        stroke-dashoffset='0'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 ${cx} ${cy}'
          to='360 ${cx} ${cy}'
          dur='1s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  `
}

function toBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
}
