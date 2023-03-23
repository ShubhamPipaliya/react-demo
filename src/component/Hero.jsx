import React from 'react'


const Hero = () => {
  return (
    <>


      {/* <div className="h-50 container mx-auto grid md:grid-cols-3 sm:grid-cols-1 sm:justify-center "> */}
      {/* <div className="h-[50%] container mx-auto grid md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 sm:justify-center "> */}
        <div className="h-70 container mx-auto grid md:grid-cols-3 sm:grid-cols-1 dark:text-gray-100 dark:bg-slate-900 duration-100">

        <div className="mt-32 ml-3">
          <img src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif" style={{height:"250px"}} alt="" />
        </div>
        <div className=" mt-32 col-span-2 lg:ml-5 md:pl-16">
          <p className='text-pink-500 md:text-3xl text-xl my-4 font-semibold  sm:text-center md:text-start'>Lorem ipsum dolor sit amet . Nostrum, doloribus!</p>
          <h1 className='md:text-start text-purple-600 md:text-5xl text-2xl capitalize font-bold sm:text-center'> Lorem ipsum dolor sit Doloribus, officiis?
          </h1>
          <p className='mt-5 text-lg font-semibold md:text-3xl text-1xl md:text-start sm:text-center text-indigo-300   drop-shadow-lg shadow-black '>This is Gresi Tech</p>
          <button className='mt-4 p-2 px-3 sm:w-[60%] sm:ml-28 md:ml-0 md:w-[30%]' >Get Started</button>
        </div>
      </div>

    </>

  )
}

export default Hero