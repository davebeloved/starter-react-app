import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BiMessageAltEdit } from 'react-icons/bi'

const ContactForm = () => {
  return (
    <div className='px-20 py-10 mt-10'>
      <div className='grid grid-cols-1 gap-y-20 md:grid-cols-2 gap-x-4'>
        <div className='space-y-5'
         data-aos='fade-right'
         data-aos-offset='400'
        >
            <h2 className='font-newFont font-bold text-2xl'>Keep In Touch</h2>
            <p className='text-gray-400'>You can reach out to us by sending us message </p>
            <div className='space-y-4'>
                <p className='flex  items-center gap-x-5'><AiOutlineMail size={30} className='text-[#551A8B]'/> davebelovedcity@gmail.com</p>
                <p className='flex  items-center gap-x-5'><BsFillTelephoneFill size={30} className='text-[#551A8B]'/> +2348136349217</p>
            </div>
        </div>

        <div 
         data-aos='fade-left'
         data-aos-offset='400'
        >
            <form action='https://formspree.io/f/mdovkpla' method='post' className='space-y-8'>
                <div className='w-full flex items-center bg-[#551A8B] px-3'>
                    <FaUserAlt />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        required
                        className='border-none bg-transparent outline-none p-3 w-full'
                    />
                </div>
                <div className='w-full flex items-center bg-[#551A8B] px-3'>
                    <AiOutlineMail />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Email Address"
                        required
                        className='border-none bg-transparent outline-none p-3 w-full'
                    />
                </div>
                <div className='bg-[#551A8B] w-full p-3 flex gap-x-4'>
                    <BiMessageAltEdit className='mt-1'/>
                    <textarea name="" id="" cols="30" rows="6" placeholder='Enter your message' className=' outline-none bg-transparent border-none w-full'></textarea>
                </div>
                <button type='submit' className='bg-[#551A8B] py-4 px-32 hover:bg-blue-hover'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
