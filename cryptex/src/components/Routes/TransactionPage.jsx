import React from 'react'

import TransactionHero from '../TransactionHero'
import Transactions from '../Transactions'
import { motion } from 'framer-motion'

const TransactionPage = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <TransactionHero />
        <Transactions />
      
    </motion.div>
  )
}

export default TransactionPage
