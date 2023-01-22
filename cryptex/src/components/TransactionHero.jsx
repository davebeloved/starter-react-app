import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

// import images
import Image from '../assets/img/hero-img.png';
import circle from '../assets/img/circle2.svg';


// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import TransactionForm from './TransactionForm';

const Hero = () => {

  const {connectWallet, currentAccount} = useContext(TransactionContext);

  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* hero text */}
          <div className='flex-1'>
           
            {/* title */}
            <h1
              className='text-[32px] lg:text-[68px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Send crypto to Anywhere in the World with high Speed and Security
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
                An easy way to transfer your crypto from one address to another anywhere in the world with no fee.
            </p>
   
          </div>
          {/* hero image */}
                <TransactionForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
