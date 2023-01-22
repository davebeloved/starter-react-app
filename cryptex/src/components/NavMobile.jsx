import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link } from 'react-router-dom'

// import data
import { navData } from '../data';
// import icons
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setNavMobile }) => {
  const {connectWallet, currentAccount} = useContext(TransactionContext);

  return (
    <nav className='lg:hidden bg-[#CBC3E3] h-full top-0 bottom-0 w-80 flex flex-col justify-between pb-6 px-3'>/
      {/* close btn */}
      <div
        onClick={() => setNavMobile(false)}
        className='absolute text-darkblue top-2 left-2 cursor-pointer'
      >
        <CgClose className='text-3xl' />
      </div>
      {/* menu list */}
      <ul className='text-xl flex flex-col mt-32   w-full navItem'>
        {navData.map((item, index) => {
          return (
            <li key={index} className=' w-full  h-16 '>
              <Link to={item.to} className='w-full text-darkblue h-full font-bold  grid place-items-center hover:bg-darkblue hover:text-white '>{item.name}</Link>
            </li>
          );
        })}
      </ul>
        {!currentAccount && (
            <button
            onClick={connectWallet}
              className='bg-darkblue py-4 rounded-2xl hover:bg-[#551A8B] hover:border-2 hover:border-darkblue text-lg transition-all duration-500  lg:text-base'
            >
              Connect Wallet
              {/* <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' /> */}
            </button>)}
    </nav>
  );
};

export default NavMobile;
