import React from 'react'
import { techList } from '../static-data/tech'

function ProjectItemCard({title, description, tech}) {
  return (
    <div className='flex flex-col flex-grow md:w-[48%] h-[20rem] bg-zinc-800 p-4 rounded-lg mb-7'>
      <img src='www' alt=''/>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='flex mt-3 gap-3'>
        {tech.map(item => {
          return <div className='w-8 h-8 flex align-middle'>
            <a target='_blank' rel="noreferrer" href={techList[item].url}><img src={techList[item].img} alt={tech.url} className='w-8 h-8  object-contain object-center'/></a>
          </div>
        })}
      </div>
    </div>
  )
}

export default ProjectItemCard