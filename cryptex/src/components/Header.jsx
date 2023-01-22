import React, {useContext} from 'react';
import { Link } from 'react-router-dom'

// import components
import Logo from '../assets/img/cryptex.png';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

import { TransactionContext } from '../context/TransactionContext';

// import icons
import { CgMenuRight } from 'react-icons/cg';

const Header = ({ setNavMobile }) => {

  const {value} = useContext(TransactionContext);
  

  return (
    <header
      className=''
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='2000'
    >
      <div className='container mx-auto flex items-center justify-between'>

        {/* logo */}
        <Link to='/'>
            <img src={Logo} alt='' className='w-40 h-32 ml-[-10px]'/>
        </Link>
        

        {/* nav & btns */}
        <div className='hidden lg:flex gap-x-[30px]'>
          <Nav />
          <AccountBtns />
        </div>

        {/* open nav btn */}
        <div
          onClick={() => setNavMobile(true)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-2xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
