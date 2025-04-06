import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { EDUCATION_TIMELINE } from '../utils/data'
import TimelineCard from '../components/TimelineCard'

const Education = () => {
  const [progressHeight, setProgressHeight] = useState(0)
  const timelineRefs = useRef([])

  // Create refs dynamically for each timeline item
  if (timelineRefs.current.length !== EDUCATION_TIMELINE.length) {
    timelineRefs.current = Array(EDUCATION_TIMELINE.length)
      .fill()
      .map((_, i) => timelineRefs.current[i] || React.createRef())
  }

  const updateProgress = () => {
    let visibleCount = 0
    for (let i = 0; i < timelineRefs.current.length; i++) {
      const el = timelineRefs.current[i].current
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          visibleCount++
        }
      }
    }
    // Multiply by height between items
    setProgressHeight(visibleCount * 270)
  }

  useEffect(() => {
    updateProgress()
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <section className='container mx-auto min-h-screen ml-[8.5rem] '>
      {/* Yellow vertical line */}
      <div className='flex justify-center items-center py-40 px-0'>
        <h1 className='text-yellow-500 text-8xl pr-40 font-black'>EDUCATION</h1>
      </div>
      <div className='ml-24 px-24  relative'>
        <div className="absolute left-4 top-0 bottom-0 w-1.5 bg-primary">
          <div
            className="bg-yellow-500 w-full transition-all duration-500 ease-in-out"
            style={{ height: `${progressHeight}px` }}
          />
        </div>

        <div className='mt-16'>
          {EDUCATION_TIMELINE.map((timeline, index) => (
            <TimelineCard
              key={timeline.id}
              title={timeline.title}
              institution={timeline.institution}
              date={timeline.duration}
              description={timeline.description}
              isFirst={index === 0}
              innerRef={timelineRefs.current[index]}
            />
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Education
