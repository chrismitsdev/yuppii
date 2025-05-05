'use client'

import dynamic from 'next/dynamic'
const ContactMap = dynamic(() => import('./contact-map'), {
  ssr: false
})

export {ContactMap}
