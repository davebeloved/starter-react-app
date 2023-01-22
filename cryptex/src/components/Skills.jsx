import React from 'react'

const Skills = () => {
  return (
    <div className='space-y-5'
    data-aos='fade-right'
    data-aos-offset='400'
    >
      <div className='rounded-2xl bg-gray-400 h-10 overflow-hidden'>
        <div  className='design bg-green-600 w-[0%] h-full flex items-center justify-center rounded-2xl'>
            <h3>Design 97%</h3>
        </div>
      </div>
      <div className='rounded-2xl bg-gray-400 h-10 overflow-hidden'>
        <div  className='ux bg-green-600 w-[0%] h-full flex items-center justify-center rounded-2xl'>
            <h3>UX 80%</h3>
        </div>
      </div>
      <div className='rounded-2xl bg-gray-400 h-10 overflow-hidden'>
        <div  className='coding bg-green-600 w-[0%] h-full flex items-center justify-center rounded-2xl'>
            <h3>Coding 95%</h3>
        </div>
      </div>
      <div className='rounded-2xl bg-gray-400 h-10 overflow-hidden'>
        <div  className='speed bg-green-600 w-[0%] h-full flex items-center justify-center rounded-2xl'>
            <h3>Speed 92%</h3>
        </div>
      </div>

    </div>
  )
}

export default Skills
