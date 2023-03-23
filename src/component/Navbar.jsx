import React, { useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react"
import Toogle from './Toogle'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

    const handleClose = () => setNav(!nav)

    return (
        <>
            {/* <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-2xl '> */}
            <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-2xl dark:bg-slate-800 dark:text-white  duration-100'>

                <div className="px-2 flex justify-between items-center w-full h-full">


                    <div className="flex items-center">
                        <h1 className='uppercase font-light  px-5 text-xl bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 inline-block text-transparent font-bold bg-clip-text sm:text-4xl '>Gresi's .</h1>

                        <ul className='hidden md:flex '>
                            <li>Home</li>
                            <li>About</li>
                            <li>Support</li>
                            <li>Pricing</li>


                        </ul>

                    </div>

                    <div className='hidden md:flex  pr-4' >
                        <button className='border-none bg-transparent text-black mr-4'> Sign In</button>
                        <button className='px-8 py-3'> Sign Up</button>
                    </div>
                    <div className="md:hidden text-purple-400" onClick={handleClick} role="button">
                        {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" onClick={handleClose} />
                        </svg>
                        }


                    </div>

                    <Toogle/>
                </div>


                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 shadow-2xl rounded-xl'}>
                    <li className='border-b-2 border-zinc-300 w-100 font-sans uppercase'>Home</li>
                    <li className='border-b-2 border-zinc-300 w-100 font-sans uppercase'>About</li>
                    <li className='border-b-2 border-zinc-300 w-100 font-sans uppercase'>Support</li>
                    <li className='border-b-2 border-zinc-300 w-100 font-sans uppercase'>Pricing</li>

                    <div className='flex flex-col my-2 '>
                        <button className='bg-transparent text-black mb-5 mt-5 px-5 py-2'> Sign In </button>
                        <button className='mb-5  px-5 py-2 '> Sign Up </button>
                    </div>
                </ul>


            </div>
        </>
    )
}

export default Navbar