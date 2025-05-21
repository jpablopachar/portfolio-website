'use client'

/**
 * Componente `Gradient`
 * 
 * Renderiza un elemento visual decorativo que crea un efecto de gradiente circular
 * difuminado. Este componente está pensado para ser utilizado como fondo o elemento
 * de diseño en la interfaz. Solo es visible en pantallas de tamaño medio o superior.
 *
 * @returns {JSX.Element} Elemento div con efecto de gradiente difuminado
 *
 * @example
 * <Gradient />
 */
const Gradient: React.FC = () => {
  return (
    <div className="hidden md:block w-[480px] h-[480px] rounded-full bg-accent/70 absolute -top-[30%] -right-[4%] z-30 blur-[300px]" />
  )
}

export default Gradient
