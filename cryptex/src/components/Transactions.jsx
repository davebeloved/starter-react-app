import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TransactionContext } from '../context/TransactionContext';
import  data  from '../utils/randomData';
import { shortenAddress } from '../utils/shortenAddress';
import card from '../assets/img/card.png'
import card2 from '../assets/img/card2.png'
import transaction from '../assets/img/transaction.png'

// import useFetch from '../hooks/useFetch';
import Card from './Card';
import LatestNews from './LatestNews';


 const TransactionStore = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {

  //  const gifUrl = useFetch({ keyword })

    return (

    

      <div className='  space-y-6 py-7 '>
        <div className='grid  lg:grid-cols-3 gap-3  rounded-xl'>
            <div  className='w-[380px] space-y-5  bg-darkblue shadow-2xl p-5 rounded-xl '>
              <h4 className='flex justify-between items-center '>
                  <span className='text-gray-500 text-base'>From: </span>
                     <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target= '_blank'      rel='noopener noreferrer' >
                           <span className=' text-white'>{shortenAddress(addressFrom)}</span> 
                      </a>
                </h4>
                <h4 className='flex justify-between items-center '>
                      <span className='text-gray-500 text-base'>To: </span>
                     <a href={`https://goerli.etherscan.io/address/${addressTo}`} target= '_blank'      rel='noopener noreferrer' >
                          <span className=' text-white'>{shortenAddress(addressFrom)}</span> 
                      </a>
                </h4>
              
                <h4 className='flex justify-between items-center '><span className='text-gray-500'>Amount: </span><span className=' text-white'>{amount} ETH</span> </h4>
                
                <h4 className='flex justify-between items-center '><span className='text-gray-500'>Message: </span><span className=' text-white'>{message}</span> </h4>
                <h4 className='flex justify-between items-center '><span className='text-gray-500'>Keyword: </span><span className=' text-white'>{keyword}</span> </h4>
                <div className='bg-black rounded-3xl w-max -mt-5 p-3 px-4 shadow-2xl'>
                     <p className='text-[#37c7da] font-bold'>{timestamp}</p>
                </div>
            </div>
            </div>
            </div>

    )
}

const Transactions = () => {

    const { currentAccount,   transactions } = useContext(TransactionContext);

  return (
    
    <div className='container mx-auto py-20'>
      <div className='mx-auto text-center'>
        {currentAccount ? (
          <>
            <h2 className='text-white mb-5 text-center'>See All Transactions</h2>
                
                <Card />
          </>
        ) : (
          <>  
              <div className='flex lg:justify-end '>

                    <div className=' bg-[#ff0000] lg:w-[400px] p-4 text-left -mt-16 lg:-mt-16 rounded-2xl'>

                      <h2 className=''>Connect Your MetaMask to be able to transfer funds to anywhere in the world and also see All Latest Transactions. Dont have MetaMask installed? <a href="https://metamask.io/download/" target='_blank' rel='noopener noreferrer' className='text-darkblue'> click here to install metamask</a></h2>
                    </div>
              </div>
              <LatestNews />
          </>
        )}
        {currentAccount && (

          <h2 className='text-white  text-xl mt-16 -mb-9'>Latest Transactions</h2>
        )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8  bg-darkblue shadow-2xl mt-10 p-4 rounded-xl'>
        {transactions.reverse().map((transaction, index) => {
           return (
            <TransactionStore key={index} {...transaction} />
           ) 
        })}
      </div>
      </div>
    </div>
  )
}

export default Transactions
