import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Cards = (props) => {
    // const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleShow =() =>{
        setShow(true)
    }

    const handleClose = () => {
        console.log("-calllllllllllllll")
        setShow(false)
    };

   


    return (
        <>
           { show && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" show={show} onHide={handleClose} >

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto" >
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>

                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto" onClick={() => handleClose()}>Add</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-5 p-3 mt-10">
                {props.card?.map((ele, i) => {
                    return (
                        <>
                            <div className="shadow-2xl  bg-zinc-200 rounded-md transition duration-300 ease-in-out hover:scale-95">
                                <div className='object-cover rounded-md ' >
                                    <img className="rounded-md" src={ele?.img} alt="Picture" style={{ height: "400px", width: "500px" }} />
                                </div>

                                <div className='text-left text-2xl text-pink-600 py-2 mx-2'>
                                    <p className='capitalize'>{ele?.title}</p>
                                </div>
                                <div className='text-start text-gray-400 text-base mx-2'>
                                    <p >{ele?.category}</p>
                                </div>
                                <button className='w-50 mb-10 ml-5 p-2 mt-2' onClick={handleShow}> Play Game </button>

                            </div>

                        </>
                    )
                })}
            </div>

           
        </>
    )
}

export default Cards