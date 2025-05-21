'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { categories, categoryDisplayNames, projects } from './WorkData'

/**
 * Página `Work`
 *
 * Muestra una colección de proyectos organizados por categorías en un carrusel
 * interactivo. Permite filtrar los proyectos por tipo (frontend, fullstack, etc.)
 * y visualizar detalles como tecnologías utilizadas, descripciones y enlaces.
 *
 * Incluye una animación de entrada con retraso para mejorar la experiencia de usuario.
 *
 * @returns {JSX.Element} Página de portafolio con proyectos categorizados
 */
const Work: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          Mis 
          {' '}
          <span className="text-accent">Trabajos</span>
          {' '}
          Recientes
        </h2>
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {categoryDisplayNames[category]}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3">{project.title}</h3>
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Tecnologías Utilizadas</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Proyecto en Vivo</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Repositorio GitHub</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                  </Swiper>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Work
