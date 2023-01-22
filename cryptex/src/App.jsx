import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import axios to fetch data from API 
import axios from 'axios'

// import components
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Footer from './components/Footer';
import AnimationRoutes from './components/AnimationRoutes';



const App = () => {

 


  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className='overflow-hidden'>
      <Header setNavMobile={setNavMobile} />
      
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    
        <AnimationRoutes />
      
      <Footer />
    </div>
  );
};

export default App;
