/**
 * Interfaz para definir la estructura de un elemento de trayectoria profesional o educativa.
 * @property {string} years - Periodo de tiempo de la experiencia o educación.
 * @property {string} role - Rol o título obtenido.
 * @property {string} institution - Nombre de la empresa o institución educativa.
 */
export interface JourneyItem {
  years: string
  role: string
  institution: string
}

/**
 * Lista de elementos que representan la trayectoria profesional y educativa.
 */
export const journeyItems: JourneyItem[] = [
  {
    years: '2022 - presente',
    role: 'Desarrollador y Diseñador Web',
    institution: 'Tech Inc',
  },
  {
    years: '2020 - 2022',
    role: 'Desarrollador Frontend',
    institution: 'Web Solutions',
  },
  {
    years: '2016 - 2020',
    role: 'Estudiante',
    institution: 'Universidad de Diseño',
  },
]
