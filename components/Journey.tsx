'use client'

import { journeyItems } from './JourneyData'

/**
 * Propiedades para el componente TimelineItem.
 * @property {string} years - Periodo de tiempo de la experiencia o educación.
 * @property {string} role - Rol o título obtenido.
 * @property {string} institution - Nombre de la empresa o institución educativa.
 */
interface TimelineItemProps {
  years: string
  role: string
  institution: string
}

/**
 * Componente `TimelineItem`
 *
 * Muestra un elemento individual en la línea de tiempo que representa
 * una experiencia educativa o profesional.
 *
 * @param {TimelineItemProps} props - Propiedades del componente
 * @param {string} props.years - Periodo de tiempo de la experiencia o educación
 * @param {string} props.role - Rol o título obtenido
 * @param {string} props.institution - Nombre de la empresa o institución educativa
 * @returns {JSX.Element} Elemento individual de la línea de tiempo
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
  years,
  role,
  institution,
}) => {
  return (
    <div className="flex items-center gap-12 w-full">
      <div className="flex flex-col w-max justify-center items-center">
        <div className="w-3 h-3 bg-accent rounded-full"></div>
        <div className="w-[1px] h-[180px] bg-white/10"></div>
      </div>

      <div className="max-w-[500px]">
        <p className="mb-6 text-lg text-white/50">{years}</p>
        <h4 className="h4 mb-2">{role}</h4>
        <p className="text-lg text-white/50">{institution}</p>
      </div>
    </div>
  )
}

/**
 * Componente `Journey`
 *
 * Muestra una línea de tiempo vertical con los hitos educativos y profesionales
 * del usuario. Cada elemento incluye el período, rol e institución correspondiente.
 *
 * @returns {JSX.Element} Sección de trayectoria profesional y educativa
 *
 * @example
 * <Journey />
 */
const Journey: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Educación & 
        {' '}
        <span className="text-accent">Experiencia</span>
      </h2>
      {journeyItems.map((item, index) => (
        <TimelineItem
          key={index}
          years={item.years}
          role={item.role}
          institution={item.institution}
        />
      ))}
    </div>
  )
}

export default Journey
