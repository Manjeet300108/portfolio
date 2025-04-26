import React from 'react'
import Navbar from './components/Navbar'
import Detail from './components/Detail'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Achive from './components/achive'



const App = () => {
  return (
    <div className='bg-[#0f172a] text-white min-h-screen font-sans'>
      <Navbar/>
      <Detail/>
      <Skills/>
      <Achive/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App