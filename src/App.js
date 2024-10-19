import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
  <>
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/projects' element={<Projects/>}></Route>

  </Routes>

  </BrowserRouter>


  </>
  )
}

export default App
