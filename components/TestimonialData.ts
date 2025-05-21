/**
 * Interfaz para definir la estructura de un testimonio.
 * @property {string} message - Mensaje o comentario del cliente.
 * @property {string} name - Nombre de la persona que da el testimonio.
 */
export interface Testimonial {
  message: string
  name: string
}

/**
 * Lista de testimonios de clientes.
 */
export const testimonials: Testimonial[] = [
  {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    name: 'Juan Pérez',
  },
  {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    name: 'María García',
  },
  {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    name: 'Santiago López',
  },
]
