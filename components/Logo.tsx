'use client'

import Link from 'next/link'

/**
 * Componente `Logo`
 *
 * Renderiza el logotipo de la aplicación con un enlace a la página principal.
 * El logotipo consiste en el nombre "Jake" seguido de un punto estilizado en el color de acento.
 * Actúa como enlace de navegación a la página de inicio.
 *
 * @returns {JSX.Element} Componente de logotipo con enlace a la página de inicio
 *
 * @example
 * <Logo />
 */
const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-[28px] font-normal">
      Jake
      <span className="text-accent text-4xl">.</span>
    </Link>
  )
}

export default Logo
