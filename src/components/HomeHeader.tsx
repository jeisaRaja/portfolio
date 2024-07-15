import React from 'react'

function HomeHeader() {
  return (
    <div>
        <div className='min-h-[13rem] w-full'>
          <h1 className='text-[1.8rem] font-semibold text-white mb-5 w-full'>Hey there!</h1>
          <p className='leading-8 w-full'>Welcome to my web development portfolio! I'm an enthusiastic aspiring web developer with a strong desire to learn and grow in this field. My journey in coding has ignited a passion for creating engaging and user-friendly websites, and I'm excited to showcase my projects and progress here.</p>
        </div>
        <div className='hidden md:flex w-fit gap-3'>
          <button className='py-1 px-3 bg-zinc-700 text-white rounded-md'>Featured projects</button>
          <button className='py-1 px-3 bg-zinc-700 text-white rounded-md'>Experiences</button>
          <button className='py-1 px-3 bg-zinc-700 text-white rounded-md'>Skills</button>
          <button className='py-1 px-3 bg-zinc-700 text-white rounded-md'>Work in progress</button>
        </div>
    </div>
  )
}

export default HomeHeader