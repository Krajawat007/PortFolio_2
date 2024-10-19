import React from 'react'
import mypic from '../img/my-pic.jpg'

const About = () => {
  return (
   <>
   <div className='bg-black text-white py-20 justify-center flex flex-col min-h-screen'>
   <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
    <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
      <img src={mypic} alt=""  className='w-72 h-80 rounded object-cover mb-8 md:mb-0 '/>
<div className='flex-1'>
<p className='text-lg mb-8'>I’m <span className='text-transparent bg-clip-text  bg-gradient-to-r from-green-400 to-blue-500'>Komal Rajawat</span>, a Frontend Developer with a B.Tech in Information Technology from Government Engineering College, Ajmer.
 <p>  I have hands-on experience in building responsive web applications using React.js, Redux, and JavaScript.</p>
      </p>
      <div className='space-y-4'>
<div></div>
      </div>
</div>

     
    </div>

   </div>
   </div>
   </>
  )
}

export default About