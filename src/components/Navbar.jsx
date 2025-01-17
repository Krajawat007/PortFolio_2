import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
   
  <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-2xl font-bold hidden md:inline'>Komal</div>
      <div className='space-x-6'>
        <Link to="/" className='hover:text-gray-500'>Home</Link>
        <Link to="/about" className='hover:text-gray-500'>About</Link>
        <Link to="/projects" className='hover:text-gray-500'>Projects</Link>
        <Link to="/contact" className='hover:text-gray-500'>Contact Me</Link>
      
      </div>

<Link to='/contact'>
<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
</Link>

     
    </div>
  </nav>
   
   </>
  )
}

export default Navbar