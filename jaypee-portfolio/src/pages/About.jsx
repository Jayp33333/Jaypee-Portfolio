import React from 'react'
import { ABOUT_ME } from '../utils/data.js'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className='containerLayout flex flex-col ml-15 justify-center items-center h-screen overflow-hidden pl-24'>
      <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl font-bold text-yellow-500 pr-10"
            >
              ABOUT ME
            </motion.h1>
      <div className='container mr-10 px-36'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm leading-6 whitespace-pre-line mt-4 text-[white] lg:text-2xl font-roboto"
        >
          {ABOUT_ME.content}
        </motion.h1>
      </div>
    </section>
  )
}

export default About