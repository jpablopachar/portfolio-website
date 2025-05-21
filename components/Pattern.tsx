'use client'

/**
 * Componente `Pattern`
 *
 * Renderiza un elemento decorativo con un patrón de fondo que solo es visible
 * en pantallas de tamaño mediano o superior. El patrón se ajusta según el tamaño
 * de pantalla, ocupando el contenedor completo en dispositivos medianos y con un
 * ajuste específico para pantallas XL.
 *
 * @returns {JSX.Element} Elemento div con el patrón de fondo aplicado
 *
 * @example
 * <Pattern />
 */
const Pattern: React.FC = () => {
  return (
    <div className="hidden md:flex absolute left-24 top-0 w-full h-full bg-[url(/assets/pattern.svg)] bg-no-repeat bg-cover bg-center xl:bg-contain xl:-top-[110px] -z-10" />
  )
}

export default Pattern
