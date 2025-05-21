'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from './NavLinksData'

/**
 * Propiedades para el componente NavLinks.
 * @property {string} containerStyles - Estilos CSS para el contenedor de los enlaces.
 */
interface NavLinksProps {
  containerStyles: string
}

/**
 * Componente `NavLinks`
 *
 * Renderiza una lista de enlaces de navegación con indicador visual
 * para la ruta activa. El ancho del indicador se ajusta según la longitud
 * del texto del enlace.
 *
 * @param {NavLinksProps} props - Propiedades del componente
 * @param {string} props.containerStyles - Estilos CSS para el contenedor de los enlaces
 * @returns {JSX.Element} Lista de enlaces de navegación con indicador de ruta activa
 *
 * @example
 * <NavLinks containerStyles="flex gap-5 items-center" />
 */
const NavLinks: React.FC<NavLinksProps> = ({ containerStyles }) => {
  const pathname = usePathname()

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path
        const charLength = link.name.length
        const lineWidth = charLength > 5 ? 'after:w-[120%]' : 'after:w-[90%]'

        return (
          <Link
            key={index}
            href={link.path}
            className={`
              relative text-lg uppercase text-white
              ${
                isActive &&
                `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
              }
            `}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavLinks
