import React from 'react'
import ConnectWithUs from '../ConnectWithUs'
import Contact from '../Contact'
import ContactForm from '../ContactForm'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <Contact />
      <ContactForm />
      <ConnectWithUs />
    </motion.div>
  )
}

export default ContactPage
