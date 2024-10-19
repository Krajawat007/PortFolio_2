import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../pdf/resume.pdf'
import mypic from '../img/my-pic.jpg'

const Home = () => {
  return (
   <>
   
   <div className='bg-black text-white text-center py-16 justify-center flex flex-col min-h-screen'>
    <img src={mypic} alt="" className='mx-auto mb-8 w-56 h-56 rounded-full object-cover transform transition-transform duration-300     hover:scale-105' />
<h1 className='text-4xl font-bold'>
  I'm {""}
  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-green-400 to-blue-500'>Komal Rajawat</span>
  ,Frontend Developer
</h1>
<p className='mt-4 text-lg text-gray-300 '>
 I specialize in building modern and responsive web applications.
</p>
<div className='mt-8 space-x-4'>
  


<Link to='/contact'>
<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
</Link>


 

{
/*

 <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>

    <a href=""  download="Komal_Rajawat_Resume.pdf"></a>
    
    Resume</button>

*/ 
}
 
    <a 
            href={resume}  // Path to your resume file
            download="Komal_Rajawat_Resume.pdf"  // Name for the downloaded file
            className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          >
            Resume
          </a>

</div>

   </div>
   
   
   
   </>
  )
}

export default Home
