import * as React from 'react'
import {Home, FerrisWheel, Gamepad, ListChecks, ScrollText} from 'lucide-react'

const links: Array<HeaderLink> = [
  {
    label: 'Home', 
    href: '/', 
    icon: React.createElement(Home, {strokeWidth: 2.5})
  },
  {
    label: 'Park', 
    href: '/park', 
    icon: React.createElement(FerrisWheel, {strokeWidth: 2.5})
  },
  {
    label: 'Games', 
    href: '/games', 
    icon: React.createElement(Gamepad, {strokeWidth: 2.5})
  },
  {
    label: 'Services', 
    href: '/services', 
    icon: React.createElement(ListChecks, {strokeWidth: 2.5})
  },
  {
    label: 'Contact', 
    href: '/contact', 
    icon: React.createElement(ScrollText, {strokeWidth: 2.5})
  }
]

export {links}