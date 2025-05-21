import { ReactNode } from 'react'
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri'

/**
 * Interfaz para definir la estructura de una habilidad técnica.
 * @property {string} name - Nombre de la tecnología o habilidad.
 * @property {ReactNode} icon - Icono que representa visualmente la habilidad.
 */
export interface Skill {
  name: string
  icon: ReactNode
}

/**
 * Lista de habilidades técnicas mostradas en el componente Skills.
 */
export const skills: Skill[] = [
  {
    name: 'React',
    icon: <RiReactjsFill />,
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'HTML5',
    icon: <RiHtml5Fill />,
  },
  {
    name: 'CSS3',
    icon: <RiCss3Fill />,
  },
  {
    name: 'Node.js',
    icon: <RiNodejsFill />,
  },
]
