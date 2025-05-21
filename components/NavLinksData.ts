/**
 * Interfaz para definir la estructura de un enlace de navegación.
 * @property {string} name - Nombre del enlace que se muestra en la interfaz.
 * @property {string} path - Ruta de destino del enlace.
 */
export interface NavLink {
  name: string
  path: string
}

/**
 * Lista de enlaces de navegación principal.
 */
export const links: NavLink[] = [
  {
    name: 'inicio',
    path: '/',
  },
  {
    name: 'acerca',
    path: '/about',
  },
  {
    name: 'servicios',
    path: '/services',
  },
  {
    name: 'trabajos',
    path: '/work',
  },
  {
    name: 'contacto',
    path: '/contact',
  },
]
