import React, { useContext } from 'react'
import card from '../assets/img/card.png'
import card2 from '../assets/img/card2.png'
import transaction from '../assets/img/transaction.png'
import { AiOutlineTransaction } from 'react-icons/ai'
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import { FaEthereum } from 'react-icons/fa'



const Card = () => {

    const {connectWallet, currentAccount} = useContext(TransactionContext);
    
    return (
    <div className='bg-darkblue text-white shadow-2xl  p-4 rounded-2xl space-y-28'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='flex items-center gap-x-5'>
          <div className='relative'>
              <img src={card} alt="" className='relative'/>
              <h3 className='text-white absolute top-24 left-10'>{shortenAddress(currentAccount)}</h3>
              {/* <h3 className='absolute top-44 left-10'>Ethereum Card</h3> */}
              <FaEthereum size={30} className='absolute top-44 right-2'/>
          </div>
            <img src={card2} alt="" />
        </div>
        <div>
            <img src={transaction} alt="" />
        </div>
      </div>
      <div className=' '>
        <h2></h2>
        <div className='w-[450px] space-y-5 -mt-20 lg:-mt-40 mx-auto lg:mx-0 pr-10'>
            <h4 className='flex justify-between items-center '><span className='text-gray-500'>Adress: </span><span className='text-white'>{shortenAddress(currentAccount)}</span> </h4>
            <h4 className='flex justify-between items-center '><span className='text-gray-500'>Token: </span><span className='text-white'>ETH</span> </h4>
            <h4 className='flex justify-between items-center '><span className='text-gray-500'>Status: </span><span className='text-green-500'>Active</span> </h4>
            <h4 className='flex justify-between items-center '><span className='text-gray-500'>Balance: </span><span className='text-white'>0.001</span> </h4>
        </div>
      </div>
       
        </div>
  
    
  )
}

export default Card



