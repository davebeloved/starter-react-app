import React, { useState, useEffect } from 'react'
import {FaCoins} from 'react-icons/fa'
import CoinItems from './CoinItems';
import axios from 'axios'


const Coins = () => {



  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'

  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  const [formValue, setFormValue] = useState('');

  const handleChange = (e) => {
    setFormValue(e.target.value)
  }
  
  const filteredCoins = coins.filter( coin => {
        return coin.name.toLowerCase().includes(formValue)
  }
    
  )


  return (
    <div
      className='w-[90%] lg:w-full bg-darkblue max-w-[942px] shadow-gray-700 mx-auto mb-32 rounded-2xl text-white p-12 shadow-primary'
      // data-aos='fade-up'
      // data-aos-delay='400'
    >

      {/* coinsearch  */}
    
      <div className='w-[90%] mx-auto text-center mb-10'>
          <p className='flex items-center justify-center gap-x-2 mb-3 font-primary'>
            <FaCoins className='text-white'/>
            Search for your favorite token
          </p>
          <div className='w-full lg:w-1/2 mx-auto h-10 rounded-2xl overflow-hidden'>
            <input type="text" placeholder='search for an asset' onChange={handleChange} className='w-full h-full px-3 bg-white text-black outline-none' />
          </div>
      </div>

      <div className='grid grid-cols-3 gap-x-7 lg:grid-cols-7 lg:gap-x-5 w-full  text-center lg:text-left'>
        <div className='w-12 font-bold text-xl hidden lg:block'><p>#</p></div>
        <div className='md:-ml-40 lg:-ml-16 font-bold text-xl'><p>Coin</p></div>
        <div className='font-bold text-xl hidden lg:block'><p>Symbol</p></div>
        <div className='font-bold text-xl ml-7 md:ml-0'><p>Price</p></div>
        <div className='font-bold text-xl '><p>24h</p></div>
        <div className='-ml-7 font-bold text-xl hidden lg:block'><p>Volume</p></div>
        <div className='font-bold text-xl hidden lg:block'><p>Mkt Cap</p></div>
      </div>

    {filteredCoins.map(coin => {
      return (
        
        <CoinItems 
        key={coin.id}
        rank={coin.market_cap_rank}
        image={coin.image}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        market={coin.market_cap}

        />
    )
    })}
  


    </div>
  );
};

export default Coins;
