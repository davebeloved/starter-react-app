import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

// const pageReloadHandler = () => {
//   if (!currentAccount) {
    
//     window.location.reload();
//   }
 
// }


const AccountBtns = () => {

  const {connectWallet, currentAccount} = useContext(TransactionContext);


  return (
    <div className='flex items-center font-medium'>

      {/* link btn */}
      {/* <a className='hover:text-blue transition' href='#'>
        Login
      </a> */}
      {/* separator */}
      {/* <span className='mx-6 text-white/20 font-thin'>|</span> */}
      {/* register btn */}
      {currentAccount ? (<div className='border-2 border-white py-2 px-4 rounded-xl'>
        {shortenAddress(currentAccount)}</div>) : 
       
        ( <button onClick={connectWallet} className='btn h-[52px] text-base px-8'>Connect Wallet
        
        </button>)}
    </div>
  );
};

export default AccountBtns;
