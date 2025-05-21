/**
 * Interfaz para definir la estructura de un servicio.
 * @property {string} icon - Ruta al archivo de imagen del icono del servicio.
 * @property {string} href - URL de destino para el servicio.
 * @property {string} title - Título descriptivo del servicio.
 */
export interface Service {
  icon: string
  href: string
  title: string
}

/**
 * Lista de servicios ofrecidos.
 */
export const services: Service[] = [
  {
    icon: '/assets/services/design.svg',
    href: '',
    title: 'Diseño de Interfaz Web',
  },
  {
    icon: '/assets/services/frontend.svg',
    href: '',
    title: 'Desarrollo Frontend',
  },
  {
    icon: '/assets/services/backend.svg',
    href: '',
    title: 'Desarrollo Backend',
  },
  {
    icon: '/assets/services/seo.svg',
    href: '',
    title: 'Optimización para Motores de Búsqueda',
  },
  {
    icon: '/assets/services/video.svg',
    href: '',
    title: 'Producción de Video',
  },
]
