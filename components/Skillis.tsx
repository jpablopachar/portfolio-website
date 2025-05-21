'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { skills } from './SkillsData'

/**
 * Componente `Skills`
 *
 * Muestra una cuadrícula de habilidades técnicas del desarrollador,
 * cada una representada por un icono con tooltip que muestra el nombre
 * de la tecnología al pasar el cursor por encima.
 *
 * @returns {JSX.Element} Sección de habilidades técnicas con iconos interactivos
 *
 * @example
 * <Skills />
 */
const Skills: React.FC = () => {
  return (
    <div className="h2">
      <h2 className="mb-8">
        Mis 
        {' '}
        <span className="text-accent">habilidades</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
