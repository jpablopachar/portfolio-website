/**
 * Interfaz para definir la estructura de un proyecto.
 * @property {number} id - Identificador único del proyecto.
 * @property {string} category - Categoría a la que pertenece el proyecto.
 * @property {string} title - Título del proyecto.
 * @property {string} description - Descripción breve del proyecto.
 * @property {string} image - Ruta de la imagen de previsualización del proyecto.
 * @property {string} link - Enlace al proyecto en vivo.
 * @property {string} github - Enlace al repositorio de GitHub del proyecto.
 * @property {string[]} tech - Lista de tecnologías utilizadas en el proyecto.
 */
export interface Project {
  id: number
  category: string
  title: string
  description: string
  image: string
  link: string
  github: string
  tech: string[]
}

/**
 * Lista de proyectos disponibles.
 */
export const projects: Project[] = [
  {
    id: 1,
    category: 'frontend',
    title: 'LaunchWave Landing Page',
    description: 'Landing page con React + Tailwind',
    image: '/assets/work/thumb1.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    category: 'frontend',
    title: 'Nextfolio Portfolio Site',
    description: 'Sitio portfolio con Next.js',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    id: 3,
    category: 'fullstack',
    title: 'AuthBoard Dashboard',
    description: 'Aplicación MERN con autenticación',
    image: '/assets/work/thumb3.png',
    link: '',
    github: '',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    category: 'fullstack',
    title: 'ChatSync Platform',
    description: 'Aplicación MERN en tiempo real con funcionalidad de chat',
    image: '/assets/work/thumb4.png',
    link: '',
    github: '',
    tech: ['MERN', 'Socket.IO', 'Redux'],
  },
  {
    id: 5,
    category: 'uiux',
    title: 'FlowMobile App Design',
    description: 'Diseño mobile-first en Figma',
    image: '/assets/work/thumb5.png',
    link: '',
    github: '',
    tech: ['Figma', 'Adobe XD'],
  },
  {
    id: 6,
    category: 'uiux',
    title: 'ShopEase Dashboard Redesign',
    description: 'Rediseño de dashboard para e-commerce',
    image: '/assets/work/thumb1.png',
    link: '',
    github: '',
    tech: ['Figma', 'Framer', 'Whimsical'],
  },
  {
    id: 7,
    category: 'branding',
    title: 'Brewhaus Brand Identity',
    description:
      'Una identidad visual audaz y natural para una marca moderna de café',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['Illustrator', 'Photoshop', 'Figma'],
  },
  {
    id: 8,
    category: 'branding',
    title: 'LunaSkin Luxury Branding',
    description:
      'Branding elegante para una línea premium de productos para el cuidado de la piel',
    image: '/assets/work/thumb3.png',
    link: '',
    github: '',
    tech: ['Photoshop', 'Figma', 'Canva'],
  },
  {
    id: 9,
    category: 'branding',
    title: 'NovaTech Brand Kit',
    description:
      'Kit completo de marca para una startup tecnológica incluyendo logo y manual de marca',
    image: '/assets/work/thumb4.png',
    link: '',
    github: '',
    tech: ['Illustrator', 'Figma', 'Notion'],
  },
]

/**
 * Categorías disponibles para filtrar los proyectos.
 */
export const categories: string[] = [
  'frontend',
  'fullstack',
  'uiux',
  'branding',
]

/**
 * Mapeo de nombres de categorías para mostrar en la interfaz.
 */
export const categoryDisplayNames: Record<string, string> = {
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  uiux: 'Diseño UI/UX',
  branding: 'Branding',
}
