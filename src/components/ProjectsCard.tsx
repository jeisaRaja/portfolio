import React from 'react'
import ProjectItemCard from './ProjectItemCard'
import PROJECT_DATA from '../static-data/project-data'
import {motion} from 'framer-motion'
import { animationDuration, customEase } from '../static-data/animation-data'

function ProjectsCard() {
  return (
    <motion.main
    initial={{ y: 40, opacity: 0.2 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: animationDuration, ease: customEase }}
    >
      <div className='w-[100%] ml-[0rem] md:ml-[15rem] md:w-[75%] flex flex-wrap gap-5'>
        {PROJECT_DATA.map(project => {
          return (
            <ProjectItemCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            />
          )
        })}
      </div>
    </motion.main>
  )
}

export default ProjectsCard