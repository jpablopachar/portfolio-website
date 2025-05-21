'use client'

import CountUp from 'react-countup'

/**
 * Componente `Stats`
 *
 * Componente que muestra estadísticas destacadas, como años de
 * experiencia y cantidad de clientes mundiales,
 * utilizando animaciones numéricas para resaltar los valores.
 * Presenta la información en un diseño flexible
 * y adaptable, optimizado para diferentes tamaños de pantalla.
 *
 * @component
 *
 * @returns {JSX.Element} Elemento JSX que representa el bloque de
 * estadísticas con animaciones numéricas.
 *
 * @example
 * <Stats />
 *
 * @accesibilidad
 * - Asegúrese de que los valores animados sean comprensibles para lectores de pantalla.
 * - Considere agregar atributos `aria` si es necesario para mejorar la accesibilidad.
 */
const Stats: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={12} duration={5} delay={2} className="block w-[60px]" />
          <div>+</div>
        </div>
        <span>
          Años 
          {' '}
          <br />
          {' '}
          Experiencia
        </span>
      </div>
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={43} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          Clientes 
          {' '}
          <br />
          {' '}
          Mundiales
        </span>
      </div>
    </div>
  )
}

export default Stats
