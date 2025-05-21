'use client'

import { CiMenuFries } from 'react-icons/ci'
import { MdFileDownload } from 'react-icons/md'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Logo from './Logo'

import NavLinks from './NavLinks'
import Socials from './Socials'

/**
 * Componente `Header`
 *
 * Renderiza la cabecera de la aplicación con un logo y un menú de navegación
 * responsivo. En dispositivos móviles muestra un botón de hamburguesa que abre
 * un panel lateral con el menú de navegación, botón de descarga de CV y enlaces
 * a redes sociales.
 *
 * Este componente se oculta automáticamente en pantallas 2XL y superiores.
 *
 * @returns {JSX.Element} Cabecera con logo y navegación responsiva
 *
 * @example
 * <Header />
 */
const Header: React.FC = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex items-center justify-between py-6">
          <Logo />
          {/* nav mobile */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menú de navegación
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div>
                <button className="btn btn-lg btn-tertiary mb-16">
                  <div className="flex items-center gap-3">
                    <span>Descargar CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
