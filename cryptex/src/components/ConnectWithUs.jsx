import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

const ConnectWithUs = () => {
  return (
    <div className='px-20 py-10 mt-20'>
      <div className='bg-gradient-to-r from-[#551A8B] to-blue-500 flex flex-col items-center py-8 rounded-lg space-y-6'
       data-aos='fade-down'
       data-aos-offset='400'
      >
        <h2 className='font-bold font-newFont text-2xl'>Connect With Us</h2>
        <p>You can reach out to us on social media by clicking any of the following links below</p>
        <div className='flex items-center gap-x-8'>
            <FaFacebookF size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            <FaGoogle size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            <FaTwitter size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            <FaLinkedinIn size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            <AiFillYoutube size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            <AiOutlineInstagram size={25} className='bg-white cursor-pointer text-[#551A8B] hover:text-blue-hover rounded-full p-1'/>
            

        </div>
      </div>
    </div>
  )
}

export default ConnectWithUs
