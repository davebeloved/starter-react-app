import React from 'react'
import Image from '../assets/img/who1.png'

const About = () => {
  return (
    <div className='px-20 py-10 mt-10 bg-[#551A8B]'>
      <h2 className='text-center uppercase text-3xl font-bold font-newFont'>About</h2>
      <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-6 mt-48'>
        <div 
         data-aos='fade-right'
         data-aos-offset='400'
        >
          <img src={Image} alt="" />
        </div>
        <div className='space-y-7'
         data-aos='fade-left'
         data-aos-offset='400'
        >
          <h2 className='text-blue-hover'>CRYPTEX</h2>
          <h2 className='text-3xl font-newFont font-bold'>WHY CHOOSE CRYPTEX</h2>
          <p className='leading-loose text-gray-400'>
               Experience the next generation cryptocurrency platform. No
               financial borders, extra fees, and fake reviews with fast and accurate experience
               We provide the right tools that make it easy to send ethers base tokens with high security and efficiency anywhere in the world.
               
          </p>
          <ul className='space-y-3 ml-5 text-gray-400'>
            <li className='list-disc'>Robust Security Protocols</li>
            <li className='list-disc'>Insures User Funds</li>
            <li className='list-disc'>Speed and Accuracy</li>
            <li className='list-disc'>Advance Support diam</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
