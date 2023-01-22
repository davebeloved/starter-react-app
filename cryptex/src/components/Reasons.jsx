import React from 'react'
import Image from '../assets/img/reason1.jpg'
import Image2 from '../assets/img/reason2.jpg'
import Image3 from '../assets/img/reason3.jpg'

const Reasons = () => {
  return (
    <div className='px-20 py-20'>
      <div className='text-center space-y-2'
       data-aos='fade-down'
       data-aos-offset='400'
      >
        <h2 className='font-bold font-newFont text-2xl'>Reasons to </h2>
        <h2 className='font-bold font-newFont text-2xl'>Choose Cryptex </h2>
      </div>

      <div className='grid grid-cols-1 gap-y-10 md:grid-cols-3 gap-x-4 mt-24'
       data-aos='fade-down'
       data-aos-offset='500'
      >
        <div className='bg-[#551A8B] shadow-lg space-y-10'>
            <div>
                <img src={Image} alt="" />
            </div>
            <div className='space-y-3 text-center p-4'>
                <h2 className='font-bold  font-newFont'>Quality Services</h2>
                <p className='text-gray-400'>
                    this Platform is highly reliable and offers the best quality service for users
                </p>
            </div>
        </div>

        <div className='bg-[#551A8B] shadow-lg space-y-10'>
            <div>
                <img src={Image2} alt="" />
            </div>
            <div className='space-y-3 text-center p-4'>
                <h2 className='font-bold  font-newFont'>Safe Transactions</h2>
                <p className='text-gray-400'>
                    Users has the most secure and safe transactions available in this platform
                </p>
            </div>
        </div>

        <div className='bg-[#551A8B] shadow-lg space-y-10'>
            <div>
                <img src={Image3} alt="" />
            </div>
            <div className='space-y-3 text-center p-4'>
                <h2 className='font-bold  font-newFont'>24/7 Support</h2>
                <p className='text-gray-400'>
                    We are always available for 24/7 support
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons
