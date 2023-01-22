import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-4 w-full rounded-sm p-4 outline-none bg-darkblue text-white border-none text-sm white-glassmorphism"
    />
  );

const TransactionForm = () => {
    const {connectWallet, currentAccount, formData, sendTransaction, handleChange} = useContext(TransactionContext);


    
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }


  return (
    <div className='py-10 mt-5 bg-white rounded-xl w-full md:w-[380px]'
    data-aos='fade-left'
    data-aos-delay='600'
    >
          <div className="p-5  w-full flex flex-col justify-start items-center">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}  className='w-full'/>
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}  className='w-full'/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}  className='w-full'/>
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}  className='w-full'/>

            <div className="h-[1px] w-full bg-darkblue my-2" />

           
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-darkblue w-full mt-2  py-3 hover:bg-[#CBC3E3] bg-gray rounded-full cursor-pointer"
                >
                  Send now
                </button>
              
          </div>
        </div>
      
    
  )
}

export default TransactionForm
