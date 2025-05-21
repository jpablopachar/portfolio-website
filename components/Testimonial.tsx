'use client'

import { ImQuotesLeft } from 'react-icons/im'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { testimonials } from './TestimonialData'

/**
 * Componente `Testimonial`
 *
 * Muestra un carrusel de testimonios de clientes que se desplaza automáticamente.
 * Cada testimonio incluye un mensaje y el nombre del cliente, junto con un icono
 * de comillas decorativo que solo aparece en pantallas grandes (XL).
 *
 * @returns {JSX.Element} Carrusel de testimonios de clientes
 *
 * @example
 * <Testimonial />
 */
const Testimonial: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonials.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Testimonial
