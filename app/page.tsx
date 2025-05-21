'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { MdArrowOutward } from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation'

import Blob from '@/components/Blob'
import Pattern from '@/components/Pattern'
import Socials from '@/components/Socials'

import { contactInfo, typingSequence } from './HomeData'

import avatarImg from '../public/assets/avatar.png'

/**
 * Componente `Home`
 *
 * Página principal de la aplicación que muestra información profesional
 * del desarrollador con elementos animados, imagen de perfil y formas de contacto.
 * Incluye una animación de tipado que muestra diferentes roles profesionales.
 *
 * @returns {JSX.Element} Página principal con presentación profesional
 */
const Home: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center"
    >
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            ¡Hola! Soy Jake, 
            {' '}
            <br />
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            Desarrollo sitios web y aplicaciones visualmente cautivadores y
            amigables, que transforman tus ideas en experiencias digitales
            fluidas y atractivas.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Hablemos</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>{contactInfo[0].text}</span>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>{contactInfo[1].text}</span>
            </div>
          </div>
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles="w-[560px] h-[560px]" />
          <Image
            src={avatarImg}
            alt="avatar"
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-[120px]"
          />
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/20"></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home
