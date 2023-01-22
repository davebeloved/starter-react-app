import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-20 py-10 mt-10 bg-[#551A8B]'>
      <div>
        <h2 className='font-newFont text-center text-2xl'>Contact Us</h2>
        <div className='grid grid-cols-1 gap-y-5 md:grid-cols-3 gap-x-2 mt-28'
         data-aos='fade-down'
         data-aos-offset='400'
        >
            <div className='bg-darkblue  text-center py-7 space-y-10'>
                <div className=''>
                    <FaSearchLocation size={60} className='mx-auto bg-[#551A8B] text-darkblue rounded-full p-2'/>
                </div>
                <div className='space-y-5'>
                    <h2 className='font-bold text-xl'>Address</h2>
                    <p className='text-gray-400'>
                        32B1 Isoko Road <br />Ughelli, Delta State,Nigeria
                    </p>
                </div>
            </div>

            <div className='bg-darkblue  text-center py-7 space-y-10'>
                <div className=''>
                    <BsFillTelephoneFill size={60} className='mx-auto bg-[#551A8B] text-darkblue rounded-full p-2'/>
                </div>
                <div className='space-y-5'>
                    <h2 className='font-bold text-xl'>Phone</h2>
                    <p className='text-gray-400'>
                        +2348136349217 <br /> +2347085726922
                    </p>
                </div>
            </div>
            <div className='bg-darkblue  text-center py-7 space-y-10'>
                <div className=''>
                    <AiOutlineMail size={60} className='mx-auto bg-[#551A8B] text-darkblue rounded-full p-2'/>
                </div>
                <div className='space-y-5'>
                    <h2 className='font-bold text-xl'>Email</h2>
                    <p className='text-gray-400'>
                        davebelovedcity@gmail.com <br /> idadakpoyedavidson@gmail.com
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
