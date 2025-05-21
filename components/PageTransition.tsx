'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

/**
 * Propiedades para el componente PageTransition.
 * @property {ReactNode} children - Contenido de la página que será envuelto por la transición.
 */
interface PageTransitionProps {
  children: ReactNode
}

/**
 * Componente `PageTransition`
 *
 * Proporciona una transición animada entre páginas en una aplicación Next.js.
 * Utiliza Framer Motion para crear un efecto de fundido cuando el usuario
 * navega entre diferentes rutas.
 *
 * @param {PageTransitionProps} props - Propiedades del componente
 * @param {ReactNode} props.children - Contenido de la página que será envuelto por la transición
 * @returns {JSX.Element} Componente de transición con el contenido envuelto
 *
 * @example
 * <PageTransition>
 *   <HomePage />
 * </PageTransition>
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
          className="min-h-screen w-screen fixed top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
