import React from 'react'

const CoinItems = ({rank, image, name, symbol, price, priceChange, volume, market  }) => {
  return (
    <div className=''>


      <div className='grid grid-cols-3 lg:grid-cols-7 gap-x-10 space-y-10 items-center text-center lg:text-left'>
        <div className=' w-10 mt-10 hidden lg:block'>
          <p>{rank}</p>
          
          </div>
        <div className=''>
          <p className='flex items-center gap-x-3  lg:w-40 lg:-ml-20 -ml-'>
            <img src={image} alt="" className='w-12  px-1'/>
                  {name.toUpperCase()}

          </p>
        </div>
        <div className='hidden lg:block'>
          <p >
            {symbol.toUpperCase()}

          </p>
          </div>
        <div className='ml-7 md:ml-0'>
          <p>${price}</p>
          
          </div>
        {priceChange < 0 ? (
            <div className='text-red-600'>
              <p>{priceChange.toFixed(1)}%</p>
              
              </div>
   ) : 
    <div className='text-green-600'>
      <p>{priceChange.toFixed(1)}%</p>
    </div>
   }
        <div className=' lg:-ml-8 hidden lg:block'>
          <p>{volume.toLocaleString()}</p>
        </div>
        <div className='hidden lg:block'>
          <p>{market.toLocaleString()}</p>
        </div>
      </div>

      
    </div>
  )
}

export default CoinItems
