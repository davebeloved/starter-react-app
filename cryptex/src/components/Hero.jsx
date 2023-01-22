import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

// import images
import Image from '../assets/img/hero-img.png';
import circle from '../assets/img/circle2.svg';


// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Hero = () => {

  const {connectWallet, currentAccount} = useContext(TransactionContext);

  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* hero text */}
          <div className='flex-1'>
            {/* badge text */}
            <div
              className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              <div className='flex items-center justify-between text-sm lg:text-base'>
                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
                  75% SAVE
                </div>
                <div>For the Black Friday weekend</div>
              </div>
            </div>
            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Fastest & secure platform to invest & Exchange crypto.
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            {!currentAccount && (
            <button
            onClick={connectWallet}
              className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              Connect Wallet
              {/* <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' /> */}
            </button>)}
          </div>
          {/* hero image */}
          <div className='flex-1 relative pt-14  lg:pt-0'>
            <img src={Image} alt='' data-aos='fade-up' data-aos-delay='600' />
            <div className='bg-darkblue h-10 w-40 absolute right-6 bottom-3 md:bottom-5 md:right-9 md:w-48 lg:right-6'>
              <img src={circle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
