'use client'

import { motion } from 'framer-motion'

import { rectangleVariants, rectangles } from './RectangleData'

/**
 * Componente `Rectangle`
 *
 * Renderiza un conjunto de rectángulos animados que crean un efecto de
 * transición tipo cortina entre páginas o secciones. Cada rectángulo tiene
 * un tiempo de retardo, duración y color diferentes para crear un efecto
 * escalonado.
 *
 * @returns {JSX.Element} Conjunto de rectángulos animados para transiciones
 *
 * @example
 * <Rectangle />
 */
const Rectangle: React.FC = () => {
  return (
    <>
      {rectangles.map((rect, index) => (
        <motion.div
          key={index}
          variants={rectangleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: rect.delay,
            duration: rect.duration,
            ease: [0.63, 0, 0.17, 1],
          }}
          className={`fixed top-full w-screen h-screen z-${rect.zIndex} bg-[${rect.bgColor}]`}
        />
      ))}
    </>
  )
}

export default Rectangle
