'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

import Rectangle from './Rectangle'

/**
 * Componente `RectangleTransition`
 *
 * Proporciona una transición animada entre páginas que se ejecuta cuando
 * el usuario navega entre diferentes rutas. Utiliza el componente Rectangle para
 * crear un efecto de transición visual con rectángulos animados.
 *
 * Este componente actúa como contenedor para las animaciones de transición y
 * previene interacciones no deseadas con los elementos subyacentes durante
 * la transición mediante pointer-events-none.
 *
 * @returns {JSX.Element} Componente de transición entre páginas
 *
 * @example
 * <RectangleTransition />
 */
const RectangleTransition: React.FC = () => {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Rectangle />
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default RectangleTransition
