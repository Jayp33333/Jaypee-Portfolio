import React from 'react'

const ProjectCard = ({ imgUrl, isActive }) => {
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2'>
      <img
        src={imgUrl}
        alt='Project'
        className='w-full h-72 md:h-80 object-cover'
      />
    </div>
  )
}

export default ProjectCard
