'use client'

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi'

/**
 * Componente `Info`
 *
 * Componente funcional que muestra información personal relevante,
 * incluyendo fecha de cumpleaños, dirección de correo electrónico, número de teléfono y ubicación.
 * Utiliza iconos ilustrativos para cada dato y organiza la
 * información en un diseño responsivo utilizando utilidades de Tailwind CSS.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la sección de información personal.
 *
 * @example
 * <Info />
 *
 * @accesibilidad
 * Los iconos son decorativos y no incluyen descripciones
 * alternativas. Se recomienda añadir atributos `aria-hidden` o
 * `aria-label` si es necesario para mejorar la accesibilidad.
 */
const Info: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Fecha de Cumpleaños</p>
            <p>21 June 1996</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[280px] flex items-start gap-4">
            <HiOutlineMail className="text-2xl mt-1 text-accent" />
            <div>
              <p className="text-lg">Dirección de Email</p>
              <p>jake@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Teléfono</p>
            <p>+11 22 33 44 55</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[280px] flex items-start gap-4">
            <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
            <div>
              <p className="text-lg">Ubicación</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
