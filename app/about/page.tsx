'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import Blob from '@/components/Blob'
import Info from '@/components/Info'
import Journey from '@/components/Journey'
import Skills from '@/components/Skillis'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import { ScrollArea } from '@/components/ui/scroll-area'

/**
 * Página `About`
 *
 * Muestra información detallada sobre el profesional, incluyendo estadísticas,
 * testimonios, información personal, trayectoria y habilidades. La página
 * incorpora un diseño responsivo que se adapta a diferentes tamaños de pantalla.
 *
 * Incluye una animación inicial de aparición gradual y un área de desplazamiento
 * para facilitar la navegación en dispositivos con pantallas pequeñas.
 *
 * @returns {JSX.Element} Página "Sobre mí" con información profesional detallada
 */
const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image
              src="/assets/avatar.png"
              alt="Jake Doe"
              width={320}
              height={496}
              className="z-20 relative"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary z-30"></div>
            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p>Sobre mí</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Jake</span>
                {' '}
                Doe
              </h2>
              <p className="max-w-[540px] mb-12">
                Me enfoco en crear experiencias web visualmente impactantes y
                amigables que no solo se ven excelentes sino que también
                funcionan sin problemas, asegurando que cada detalle esté
                cuidadosamente diseñado y ejecutado.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  )
}

export default About
