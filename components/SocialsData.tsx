import { ReactNode } from 'react'
import {
  BiLogoDribbble,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from 'react-icons/bi'

/**
 * Interfaz para definir la estructura de un elemento de red social.
 * @property {ReactNode} icon - Icono que representa la red social.
 * @property {string} path - URL de la página de la red social.
 */
export interface SocialItem {
  icon: ReactNode
  path: string
}

/**
 * Lista de elementos de redes sociales con sus respectivos iconos y URLs.
 */
export const socials: SocialItem[] = [
  {
    icon: <BiLogoFacebook />,
    path: 'https://www.facebook.com/',
  },
  {
    icon: <BiLogoInstagram />,
    path: 'https://www.instagram.com/',
  },
  {
    icon: <BiLogoLinkedin />,
    path: 'https://www.linkedin.com/',
  },
  {
    icon: <BiLogoDribbble />,
    path: 'https://dribbble.com/',
  },
]
