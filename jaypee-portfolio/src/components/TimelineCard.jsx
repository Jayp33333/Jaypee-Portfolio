import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TimelineCard = ({ title, institution, date, description, isFirst, innerRef }) => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <div ref={innerRef} className='relative pl-10 pb-48'>
      {/* Animated Circle */}
      <motion.div
        className='absolute -left-[98px] top-0 z-20'
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={textInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='rounded-full bg-yellow-500 w-[41px] h-[41px] flex items-center justify-center'>
          <div className='rounded-full bg-white w-[10px] h-[10px]'></div>
        </div>
      </motion.div>

      {/* Connector line */}
      <div className='absolute left-[0px] top-[12px] w-[2px] h-full bg-primary z-10'></div>

      {/* Animated Text Content */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 40 }}
        animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className='text-[16px] sm:text-[2rem] text-white font-bold uppercase'>{title}</h3>
        <p className='text-[12px] sm:text-[16px] text-gray-400 uppercase'>{institution}</p>
        <p className='text-[12px] sm:text-[16px] text-yellow-500 font-semibold uppercase'>{date}</p>
      </motion.div>
    </div>
  )
}

export default TimelineCard
