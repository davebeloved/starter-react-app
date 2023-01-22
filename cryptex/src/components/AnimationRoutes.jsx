import React from 'react'
import Home from './Routes/Home';
import TransactionPage from './Routes/TransactionPage';
import AboutPage from './Routes/AboutPage';
import ContactPage from './Routes/ContactPage';
import Invest from './Invest';
import Statistics from './Statistics';
import Tracker from './Tracker';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";





const AnimationRoutes = () => {

    const location = useLocation();
  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<Home />} />
                <Route path="/transaction" element={<TransactionPage />} />
                <Route path="/about" element={<AboutPage /> } />
                <Route path="/contact" element={<ContactPage />  } />
                <Route path="/investsmart" element={<Invest />  } />
                <Route path="/statistics" element={<Statistics />  } />
                <Route path="/trackinvestment" element={<Tracker /> } />
            </Routes>
        </AnimatePresence>
   
  )
}

export default AnimationRoutes