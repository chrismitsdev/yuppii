import {FacebookIcon, InstagramIcon, MapPinIcon} from 'lucide-react'
import {IconButton} from '@/src/components/ui/icon-button'

type IconButtonVariant = {
  variant?: React.ComponentProps<typeof IconButton>['variant']
}

function FacebookIconButton({variant = 'secondary'}: IconButtonVariant) {
  return (
    <IconButton
      aria-label='Visit our Facebook page (Opens in new tab)'
      variant={variant}
      asChild
    >
      <a
        href='https://www.facebook.com/yuppii.gr'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon />
      </a>
    </IconButton>
  )
}

function InstagramIconButton({variant = 'secondary'}: IconButtonVariant) {
  return (
    <IconButton
      aria-label='Visit our Instagram page (Opens in new tab)'
      variant={variant}
      asChild
    >
      <a
        href='https://www.instagram.com/yuppiilunapark/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </a>
    </IconButton>
  )
}

function GoogleMapsIconButton({variant = 'secondary'}: IconButtonVariant) {
  return (
    <IconButton
      aria-label='Get directions on Google Maps (opens in new tab)'
      variant={variant}
      asChild
    >
      <a
        href='https://goo.gl/maps/vWBvWk3Tvcw5XkF87'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MapPinIcon />
      </a>
    </IconButton>
  )
}

FacebookIconButton.diplayName = 'FacebookIconButton'
InstagramIconButton.diplayName = 'InstagramIconButton'
GoogleMapsIconButton.diplayName = 'GoogleMapsIconButton'

export {FacebookIconButton, GoogleMapsIconButton, InstagramIconButton}
