'use client'

import { MdFileDownload } from 'react-icons/md'

import Logo from './Logo'
import NavLinks from './NavLinks'

/**
 * Componente `MainNav`
 *
 * Renderiza la navegación principal de la aplicación que incluye el logotipo,
 * enlaces de navegación y un botón para descargar el CV. Los elementos se organizan
 * verticalmente con espacio adecuado entre ellos.
 *
 * @returns {JSX.Element} Navegación principal con logo, enlaces y botón de descarga
 *
 * @example
 * <MainNav />
 */
const MainNav: React.FC = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6 " />
        <button className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
            <span>Descargar CV</span>
            <MdFileDownload className="text-xl" />
          </div>
        </button>
      </div>
    </nav>
  )
}

export default MainNav
