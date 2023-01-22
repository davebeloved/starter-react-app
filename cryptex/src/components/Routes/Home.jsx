import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Hero from '../Hero';
import Stats from '../Stats';
import Why from '../Why';
import Trade from '../Trade';
import Features from '../Features';
import Newsletter from '../Newsletter';
import CalcForm from '../Coins';
import Coins from '../Coins';
import TransactionForm from '../TransactionForm';
import { motion } from 'framer-motion';
import CheckPrice from '../CheckPrice';


const Home = () => {



  return (
    <motion.div 
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <Hero />
        <Stats />
        <Why />
        <CheckPrice />
        <Coins />
        <Trade />
        <Features />
        <Newsletter />
    </motion.div>
  )
}

export default Home
