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
            A big art commission I did back in 2022. I drew various characters from Touhou Project featuring Yuuma Toutetsu and Yuyuko Saigyouji and more background characters.
            I used digital art software to draw, especifically I used Sai2. [placeholder image]
            This one of my favorite art pieces I did.
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition0all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50 ">
          <h1 className='text-3xl font-semibold'>"My Life" and "Java Activity"</h1>
          <h3 className='text-xl text-gray-700'>Done in 2019 and 2020</h3>
          <p className='text-sm text-gray-600 '>
            Both projects are crude but functional imitation of text-based games like that of visual novels. My Life is a text-based game where the player makes choices that affect the outcome of the story.
            It was a collaborative project where me and Ceejay Santos made the story and code to determine the outcomes. Even adding a little easter egg. 
            The Java Activity is a simple text-based adventure game where the player navigates through different scenarios based on their choices. It only reaches 3 endings that are the end of the tutorial stage.
          </p>
        </div>

      
        
      </div>
      <br />
      <h1 className='text-3xl font-semibold text-teal-600'>What have I learned from these projects?</h1>
      <p className='text-xl text-gray-600 text-center'>That they do not have to be particularly especially superb, but that I've learned something from them
        and the sentimental values they have to me. With these I can do future projects better than these and love doing them.
      </p>

    </div>
  )
}

export default Projects