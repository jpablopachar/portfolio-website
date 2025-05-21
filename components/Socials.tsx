'use client'

import { socials } from './SocialsData'

/**
 * Propiedades para el componente Socials.
 * @property {string} containerStyles - Clases CSS para el contenedor de los iconos sociales.
 * @property {string} iconStyles - Clases CSS para cada icono social individual.
 */
interface SocialsProps {
  containerStyles: string
  iconStyles: string
}

/**
 * Componente `Socials`
 *
 * Muestra un conjunto de iconos de redes sociales con enlaces a sus respectivas
 * plataformas. Permite personalizar tanto el contenedor como los iconos individuales
 * mediante clases CSS.
 *
 * @param {SocialsProps} props - Propiedades del componente
 * @param {string} props.containerStyles - Clases CSS para el contenedor de los iconos sociales
 * @param {string} props.iconStyles - Clases CSS para cada icono social individual
 * @returns {JSX.Element} Conjunto de iconos de redes sociales
 *
 * @example
 * <Socials
 *   containerStyles="flex gap-4 justify-center"
 *   iconStyles="text-2xl hover:text-accent"
 * />
 */
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        )
      })}
    </div>
  )
}

export default Socials
