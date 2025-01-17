import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
   <>
   <div className='bg-black text-white py-20 '>
  <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'> Contact Me</h2>
    <div className='flex flex-col md:flex-row items-center md:space-x-12'>
      <div className='flex-1'>
        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rerum.</p>
        <div className='mb-4 mt-8'>
          <IoMdMail className='inline-block text-green-400 mr-2'></IoMdMail>
          <a href="krajawat411@gmail.com" className='hover:underline'>Krajawat411@gmail.com</a>
        </div>

        <div className='mb-4 mt-8'>
          <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
         <span>+91 7023808004</span>
        </div>

        <div className='mb-4 mt-8'>
          <FaLinkedin className='inline-block text-green-400 mr-2'></FaLinkedin>
         <a href="https://www.linkedin.com/in/komal007/" className='hover:underline'>Linkedin</a>
        </div>

      </div>

      <div className='flex-1 w-full'>

<form className='space-y-4'>
  <div>
    <label htmlFor="name" className='block mb-2'>Your name</label>
    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your name' />
  </div>
  <div>
    <label htmlFor="name" className='block mb-2'>Email</label>
    <input type="email" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your email' />
  </div>
  <div>
    <label htmlFor="message" className='block mb-2'>Message</label>
    <input type="email" rows='5' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'   
    
    placeholder='Enter your message' />
  </div>
<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full' >Send</button>

</form>

      </div>
    </div>
    </div>

    </div>
   
   </>
  )
}

export default Contact