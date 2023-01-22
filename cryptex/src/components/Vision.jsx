import React from 'react'
import Image1 from '../assets/img/ourvision.jpg'
import Image2 from '../assets/img/skills.png'
import Skills from './Skills'

const Vision = () => {
  return (
    <div className='px-20 py-10'>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-x-6 gap-y-24'>
        <div className='space-y-6'
         data-aos='fade-right'
         data-aos-offset='400'
        >
            <h2 className='font-bold text-xl text-blue-hover'>Our Skills</h2>
            <p>
              It all began by writing a simple line of code to execute some task. We think, design  and then put it all together into useful information and resources by writing code  with effective speed. Integrating different programming languages inorder to solve various problems is an inspiration to us. 
            </p>
          <Skills />
        </div>
        <div className=''
         data-aos='fade-left'
         data-aos-offset='400'
        >
            <img src={Image2} alt="" />

        </div>

        <div className='space-y-6 '
         data-aos='fade-right'
         data-aos-offset='400'
        >
            <img src={Image1} alt="" className='rounded-lg' />
        </div>

        <div className='space-y-6'
         data-aos='fade-left'
         data-aos-offset='400'
        >
            <h2 className='font-bold text-xl text-blue-hover'>Our Mission</h2>
            <p>
                This app is deployed on a Blockchain and it implies lesser fees as charges imposed by third parties are automatically removed. This will also eliminate failure in transaction probably as a result of technical issues or network issues from the third party.
                <br />
                Users do not need to transfer their assets to a third party. Therefore there is no risk of organization being hacked, and users are assured greater safety from hacking.
                Have  nodes could theoretically go down and the network would still be able to run.
                
            </p>
        </div>

      </div>
    </div>
  )
}

export default Vision
