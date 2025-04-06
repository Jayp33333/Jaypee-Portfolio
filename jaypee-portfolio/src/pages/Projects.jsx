import React, { useEffect, useState, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { IoIosArrowForward } from 'react-icons/io'
import { FaInfoCircle, FaLink } from 'react-icons/fa'  // Importing icons from React Icons
import { projectData } from '../utils/data.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from 'framer-motion'  // Import Framer Motion

const MyProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [currentProjectDescription, setCurrentProjectDescription] = useState('')
  const slideRefs = useRef([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedSnap(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const handleShowDescription = (description) => {
    setCurrentProjectDescription(description)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const currentProject = projectData[selectedSnap]

  return (
    <section className='container mx-auto px-4 sm:px-24 md:px-36 py-10'>
      <motion.h4
        className='text-3xl font-bold text-center mb-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Sample Projects
      </motion.h4>

      {/* Carousel */}
      <div className='relative mb-8'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex gap-6'>
            {projectData.map((project, index) => {
              const isActive = index === selectedSnap
              return (
                <div
                  key={project.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className={`min-w-[100%] md:min-w-96 lg:min-w-[26rem] transition-transform duration-500 ${
                    isActive ? 'scale-110 z-20' : 'scale-90 opacity-0'
                  }`}
                >
                  <div className='flex flex-col items-center bg-blue-950 bg-opacity-40 px-7 py-10 rounded-lg shadow-lg overflow-hidden'>
                    {/* Image Only */}
                    <ProjectCard imgUrl={project.image} isActive={isActive} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='absolute inset-0 flex items-center justify-between'>
        <button
          className={`arrow-btn left-5 top-1/2 -translate-y-1/2 absolute z-10 ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <IoIosArrowForward className='rotate-180 text-3xl text-black' />
        </button>

        <button
          className={`arrow-btn right-5 top-1/2 -translate-y-1/2 absolute z-10 ${!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!canScrollNext}
        >
          <IoIosArrowForward className='text-3xl text-black' />
        </button>
        </div>
        
      </div>

      {/* Info Section Below Carousel */}
      <div className='text-center py-6 px-4 rounded-lg shadow-md'>
        {/* Motion Title with Animation */}
        <motion.h2
          key={selectedSnap}
          className='text-2xl font-semibold text-white mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {currentProject.title}
        </motion.h2>

        {/* Buttons Section with Only Icons */}
        <motion.div
          className='flex justify-center gap-4 mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className='bg-gray-900 text-white p-4 rounded hover:bg-gray-800 transition-transform transform scale-95 hover:scale-100 duration-200'
            onClick={() => handleShowDescription(currentProject.description)}

          >
            <FaInfoCircle className='inline-block text-white text-2xl' />
            <span className='ml-2'>Show Description</span>
          </motion.button>

          <motion.button
            className='bg-gray-900 text-white p-4 rounded hover:bg-gray-800 transition-transform transform scale-95 hover:scale-100 duration-200'
            onClick={() => window.open(currentProject.link, '_blank')}

          >
            <FaLink className='inline-block text-white text-2xl' /> Show Project
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for Description */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-96 max-w-full transition-transform transform scale-95 hover:scale-100 duration-200'>
            <h3 className='text-xl font-bold mb-4'>Project Description</h3>
            <p className='text-gray-700 mb-6'>{currentProjectDescription}</p>
            <button
              className='bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600'
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default MyProjects
