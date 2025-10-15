import React from 'react'

const Experience = () => {
  return (
    <div id='Experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36 '>
      <h1 className='text-center text-5xl font-light '>Skills</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">



        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl '>Programming Skills</h3>
            <p className='font-light text-lg text-gray-600'>ICT to 3rd Year BSIS</p>
            <p className='text-sm text-gray-600'>
              Studying programming languages such as HTML, CSS, JavaScript, PHP, and Python in my course has given me insight on some of the problems and solution tackled in programming.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl '>Communication Skills</h3>
            <p className='font-light text-lg text-gray-600'>People and socialization</p>
            <p className='text-sm text-gray-600'>
              I've learned how to interact properly with different kinds of people, and how to express my thoughts and ideas clearly, effective, respectfully, and professionally.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl '>Curiosity</h3>
            <p className='font-light text-lg text-gray-600'>Willingness to learn</p>
            <p className='text-sm text-gray-600'>
              I love learning about various things that interest me and I am willing to always put a leg up to further my knowledge and skills about those various things.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className="flex-1"></div>
        </div>
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl '>Commission Artist</h3>
            <p className='font-light text-lg text-gray-600'>Work Experience</p>
            <p className='text-sm text-gray-600'>
              I did art commissions for people who wanted me to draw their characters or ocs. I communicated with them properly and professionally to ensure that I deliver what they want.
              Some of them were satisfied with my work and some were not, but I learned from those experiences to improve my skills and services.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience