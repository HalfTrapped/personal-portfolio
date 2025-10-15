import React from 'react'

const Projects = () => {
  return (
    <div id='Projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-14 md:px-16 xl:px-32 '>
      <h1 className='text-center text-5xl font-light'>Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition0all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50 ">
          <h1 className='text-3xl font-semibold'>Notes App Project</h1>
          <h3 className='text-xl text-gray-700'>Done in 2024 </h3>
          <p className='text-sm text-gray-600 '>
            A collaborative note-taking web application that allows users to create, edit, and share notes in real-time. Built with Laravel, it features user authentication, note categorization, and a responsive design for seamless access across devices.
            Ceejay Santos did the backend while I did a little bit of the frontend along with Daniel. 
            This is the project repository:
            https://github.com/7078-cj/NotesApp_-Laravel_Project-
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition0all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50 ">
          <h1 className='text-3xl font-semibold'>Art Commission</h1>
          <h3 className='text-xl text-gray-700'>Done in 2022</h3>
          <p className='text-sm text-gray-600 '>
            An art commission I did back in 2022. I drew various characters from Touhou Project featuring Yuuma Toutetsu and Yuyuko Saigyouji and more background characters.
            I used digital art software to draw, especifically I used Sai2. [placeholder image]
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition0all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50 ">
          <h1 className='text-3xl font-semibold'>Projects</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-sm text-gray-600 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      
        
      </div>

    </div>
  )
}

export default Projects