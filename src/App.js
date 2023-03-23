import React from 'react'
import Cards from './component/Cards'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Toogle from './component/Toogle'
// import News from './News'
import {BrowserRouter} from "react-router-dom"
import GallaryCard from './component/GallaryCard'
import { AppBar } from './component/AppBar'
import SideBar from './component/SideBar'
import Slider from './component/Slider'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <SideBar/>
    <div className='content-right'>
    <AppBar/>
    <Slider/>
    <GallaryCard/>
    </div>
    
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