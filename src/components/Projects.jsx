import React from 'react'
import weather from '../img/weather.jpg'

const projects =[
  {
    id:1,
    name:"Weather App",
    technologies: "frontend",
    Image: weather,
    github: "https://krajawat007.github.io/weather/",
  },
  {
    id:2,
    name:"Weather App",
    technologies: "frontend",
    Image: weather,
    github: "https://krajawat007.github.io/weather/",
  },
  {
    id:3,
    name:"Weather App",
    technologies: "frontend",
    Image: weather,
    github: "https://krajawat007.github.io/weather/",
  },
  {
    id:4,
    name:"Weather App",
    technologies: "frontend",
    Image: weather,
    github: "https://krajawat007.github.io/weather/",
  }
]


const Projects = () => {
  return (
<>
<div className='bg-black text-white py-20 '>
  <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'> Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{projects.map(projects =>(




<div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>

  <img src={weather} alt=" project-img" className='rounded-lg mb-4 w-full h-48 object-cover' />
  <h3 className='text-2xl font-bold mb-2'>{projects.name}</h3>
  <p className='text-gray-400 mb-4'>
    Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, qui?
  </p>
  <a href={projects.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full ' target='_blank' rel='noreferrer'>github</a>

 

</div>

))}
    </div>

  </div>
</div>

</>
  )
}

export default Projects