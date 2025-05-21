'use client'

import { motion } from 'framer-motion'

import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineArrowLongRight, HiOutlineMapPin } from 'react-icons/hi2'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Textarea } from '@/components/ui/textarea'

/**
 * Página `Contact`
 *
 * Página de contacto que permite a los usuarios enviar mensajes a través de un formulario.
 * Incluye información de contacto como teléfono, correo electrónico y dirección física.
 * El formulario incluye campos para nombre, apellido, correo electrónico, servicio
 * de interés y mensaje.
 *
 * @returns {JSX.Element} Página de contacto con formulario e información
 *
 * @example
 * <Contact />
 */
const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Ponte en 
                  {' '}
                  <span className="text-accent">Contacto</span>
                </h2>
                <p className="max-w-[460px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, voluptas.
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+11 22 33 44 55</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>jake@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>255 Street, New York, USA</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form className="flex flex-col gap-6 items-start">
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Nombre 
                      {' '}
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Apellido 
                      {' '}
                      <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Apellido"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="email">
                    Email 
                    {' '}
                    <span className="text-accent">*</span>
                  </Label>
                  <Input id="email" name="email" placeholder="Email" required />
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    Me interesa 
                    {' '}
                    <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bgg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Elige una opción" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Desarrollo Web</SelectItem>
                      <SelectItem value="uiux">Diseño UI/UX</SelectItem>
                      <SelectItem value="logo">Diseño de Logo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="message">
                    Mensaje 
                    {' '}
                    <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                <button className="btn btn-lg btn-accent">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Enviar Mensaje</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
