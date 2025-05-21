'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MdArrowRightAlt, MdOutlineArrowOutward } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { services } from './ServicesData'

/**
 * Página `Services`
 *
 * Muestra los servicios ofrecidos en un carrusel interactivo.
 * Cada servicio se presenta con un icono, título y botón de navegación.
 * La página incluye una animación de entrada con retraso para mejorar la experiencia de usuario.
 *
 * @returns {JSX.Element} Página de servicios con carrusel de tarjetas
 */
const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Soluciones 
            {' '}
            <span className="text-accent">Web Personalizadas</span>
            {' '}
            para Impulsar tu Negocio
          </h2>

          <button className="btn btn-lg btn-accent flex gap-2">
            Todos los Servicios 
            {' '}
            <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {services.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt={item.title}
                      className=""
                    />
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>

                  <h2 className="text-[22px] font-medium max-w-[240px]">
                    {item.title}
                  </h2>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Services
