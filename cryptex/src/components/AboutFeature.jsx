import React from 'react'
import { FcCandleSticks } from 'react-icons/fc'
import { CgFilters } from 'react-icons/cg'
import { GrCompare } from 'react-icons/gr'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { GiSpeedBoat, GiDiceTarget } from 'react-icons/gi'

const AboutFeature = () => {
  return (
    <div className='py-32  px-20'>
      <div className='text-center lg:w-[850px] mx-auto'
       data-aos='fade-down'
       data-aos-offset='400'
      >
        <h2 className='font-newFont font-bold text-2xl py-3'>CRYPTEX Key Features</h2>
        <p className='text-gray-400'>
            Cryptex offers lots of features that are available to your application and can be used with ease and convenience which makes users experience more secure.
        </p>
      </div>

      <div className='grid grid-cols-1  md:grid-cols-2 md:gap-x-5  lg:grid-cols-3 gap-y-6 mt-16'
       data-aos='fade-up'
       data-aos-offset='500'
      >
        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700 hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex items-centerr justify-center bg-darkblue p-2  '>
                <FcCandleSticks size={45}/>
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Real-Time Price
                </h2>
                <p className='text-gray-400'>
                        This platform provides a special features where users can view real-time price of any cryptocurrency of their choice. 
                </p>
            </div>
        </div>

        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700  hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex items-centerr justify-center bg-darkblue p-2  '>
                <CgFilters size={45} className='text-blue-hover' />
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Transparency
                </h2>
                <p className='text-gray-400'>
                        The technology powers transactions that are traceable and unchangeable, thereby enabling parties to trade in complete confidence without an intermediary
                </p>
            </div>
        </div>

        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700 hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex items-centerr justify-center bg-darkblue p-2  '>
                <GrCompare size={45} className='text-red-600' />
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Decentralized
                </h2>
                <p className='text-gray-400'>
                    This platform is full decentralized it does not require any central authority or any computer acting as backend servers.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700 hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex  justify-center bg-darkblue p-2  '>
                <AiOutlineSecurityScan size={25} className='text-red-600 mt-2' />
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Security
                </h2>
                <p className='text-gray-400'>
                    Security is a complete risk management system for blockchain networks, incorporating assurance services, cybersecurity frameworks, and best practices to mitigate the risks of fraud and cyber-attacks.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700 hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex  justify-center bg-darkblue p-2  '>
                <GiSpeedBoat size={25} className='text-red-600 ' />
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Speed
                </h2>
                <p className='text-gray-400'>
                    The problem of sending funds from one location to another which might take hours or even days to push through is solved with this platform where users can transfer ethers from one address to another in a few seconds.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center space-y-4 bg-[#551A8B] rounded-lg hover:bg-darkblue transition-all duration-700 hover:shadow-2xl  p-5 lg:w-[350px]'>
            <div className='w-[50px] h-[57px] rounded-full flex  justify-center bg-darkblue p-2  '>
                <GiDiceTarget size={25} className='text-blue-hover mt-2' />
            </div>
            <div className='space-y-3 text-center'>
                <h2 className='font-bold'>
                    Accuracy
                </h2>
                <p className='text-gray-400'>
                    With cryptex high reliability and integrity is assured. Users can send transactions accurately without any form of inaccuracy.
                </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AboutFeature
