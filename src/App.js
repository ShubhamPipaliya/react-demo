import React from 'react'
import Cards from './component/Cards'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Toogle from './component/Toogle'
// import News from './News'
import {BrowserRouter} from "react-router-dom"
import GallaryCard from './component/GallaryCard'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <GallaryCard/>
    {/* <Cards/> */}
    </BrowserRouter>
    {/* <Toogle/> */}
      {/* <Navbar /> */}
      {/* <Toogle/> */}
      {/* <Hero/> */}
      
      {/* <News/> */}
     
     
    </>
  )
}

export default App