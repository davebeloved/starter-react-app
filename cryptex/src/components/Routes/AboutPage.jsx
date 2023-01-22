import React from 'react'
import About from '../About'
import AboutFeature from '../AboutFeature'
import Reasons from '../Reasons'
import Vision from '../Vision'
import ConnectWithUs from '../ConnectWithUs'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <motion.div className=''
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <About />
      <AboutFeature />
      <Vision />
      <Reasons />
      <ConnectWithUs />
    </motion.div>
  )
}

export default AboutPage
