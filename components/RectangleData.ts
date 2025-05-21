import { Variants } from 'framer-motion'

/**
 * Variantes de animación para los rectángulos de transición.
 * Define los estados initial, animate y exit para las animaciones.
 */
export const rectangleVariants: Variants = {
  initial: {
    y: '-100%',
    height: '100%',
  },
  animate: {
    y: '0%',
    height: '0%',
  },
  exit: {
    y: ['0%', '-100%'],
    height: ['0%', '100%'],
  },
}

/**
 * Interfaz para definir la estructura de un rectángulo de transición.
 * @property {number} delay - Tiempo de espera antes de iniciar la animación en segundos.
 * @property {number} duration - Duración de la animación en segundos.
 * @property {string} bgColor - Color de fondo del rectángulo en formato hexadecimal.
 * @property {number} zIndex - Índice z para controlar la superposición de los rectángulos.
 */
export interface RectangleConfig {
  delay: number
  duration: number
  bgColor: string
  zIndex: number
}

/**
 * Configuración de los rectángulos de transición con sus propiedades.
 */
export const rectangles: RectangleConfig[] = [
  {
    delay: 0,
    duration: 0.6,
    bgColor: '#1b162b',
    zIndex: 30,
  },
  {
    delay: 0.25,
    duration: 0.8,
    bgColor: '#241e36',
    zIndex: 20,
  },
  {
    delay: 0.35,
    duration: 1,
    bgColor: '#241e36',
    zIndex: 10,
  },
  {
    delay: 0.45,
    duration: 1,
    bgColor: '#2e2743',
    zIndex: 10,
  },
]
