import React from 'react';
import { Link } from 'react-router-dom';

// import images
import Logo from '../assets/img/cryptex.png';
import VisaImg from '../assets/img/visa.png';
import MastercardImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';
import { motion } from 'framer-motion';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

// import icons
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0'>
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-6 lg:flex-row'>
          {/* logo */}
          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
            <a href='#'>
              <img src={Logo} alt='' className='w-40 lg:mt-[-70px]' />
            </a>
          </div>
          {/* link group */}
          <div className='flex flex-1 flex-col gap-y-9  lg:flex-row'>
            {/* link group */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Quick Links</div>
              <ul className='space-y-4 text-gray'>
                <li>
                  <Link className='hover:text-blue transition' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-blue transition' to='/transaction'>
                    Transaction
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-blue transition' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-blue transition' to='/contact'>
                    Contact
                  </Link>
                </li>

              </ul>
            </div>
            {/* link group */}
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Resources Links</div>
              <ul className='space-y-4 text-gray'>
                <li>
                  <a className='hover:text-blue transition' href='https://bitcoinwhitepaper.co/' target='_blank'>
                    Download Whitepapper
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='https://alphawallet.com/for-user/smart-tokens/' target='_blank'>
                    Smart Token
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='https://live.blockcypher.com/btc/' target='_blank'>
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='https://coinmarketcap.com/api/' target='_blank'>
                    Crypto API
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className='mx-auto text-center lg:text-left lg:mx-0'>
              <div className='text-xl font-medium mb-2'>Contact Us</div>
              <div className='space-y-2 mb-5 '>
                <div className='flex gap-x-2 items-center justify-center lg:justify-start'>
                  <BsFillTelephoneFill />
                  <p>+2348136349217</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                  <AiOutlineMail />
                  <p>davebelovedcity@gmail.com</p>

                </div>
              </div>
              <div className='flex justify-center lg:justify-start text-2xl gap-x-8'>
                  <a className='hover:text-blue transition' href='#'>
                    <IoLogoYoutube />
                  </a>
                  <a className='hover:text-blue transition' href='#'>
                    <IoLogoInstagram />
                  </a>
                  <a className='hover:text-blue transition' href='#'>
                    <IoLogoTwitter />
                  </a>
                  <a className='hover:text-blue transition' href='#'>
                    <IoLogoLinkedin />
                  </a>
              </div>
          </div>

        </div>
      </div>
      {/* copy & social */}
      <div className='py-12'>
        <div className='container mx-auto flex justify-center items-center'>
          {/* copy text */}
          <div>&copy; 2023 CRYPTEX All rights reserved.</div>
          {/* social icons */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
