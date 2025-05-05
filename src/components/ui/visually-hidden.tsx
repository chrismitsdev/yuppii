'use client'

import {Root} from '@radix-ui/react-visually-hidden'

const VisuallyHidden: React.FC<React.ComponentPropsWithRef<typeof Root>> = (
  props
) => {
  return <Root {...props} />
}

VisuallyHidden.displayName = 'VisuallyHidden'

export {VisuallyHidden}
