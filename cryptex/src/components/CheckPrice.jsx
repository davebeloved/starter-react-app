import React from 'react';
import CoinSearch from './CoinSearch';



const CheckPrice = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-10'
         data-aos='fade-up'
         data-aos-delay='400'
        >
          <h2
            className='section-title'
           
          >
            Check out the current price of Cryptocurrency
          </h2>
          <p
            className='section-subtitle text-lg mb-5 max-w-[622px] mx-auto'
           
          >
            Let's check the price of crytocurrency to keep you up-to-date.
          </p>
        </div>
        
       
      </div>
    </section>
  );
};

export default CheckPrice;
