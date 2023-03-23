import React, { useState } from 'react'
import Cards from './Cards';
import Menu from "./Menu"

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), 'all'];
console.log('allCatValues', allCatValues)

const GallaryCard = () => {

    const [card, setCard] = useState(Menu)
    const [catItems, setCatItems] = useState(allCatValues)



    const filterMenu = (category) => {
        if (category === "all") {
            setCard(Menu)
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setCard(updatedItems)
    }
    return (
        <>

            {/* <div className='text-center mt-5 text-purple-400 text-2xl'>Filter By Category</div> */}
            <div className='container mt-10 flex items-center ml-32' >
                {
                    catItems.map((curElem, index) => {
                        return (
                            <>
                                {/* <button className='mt-3 inline-flex w-full justify-center  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                 key={index}   onClick={() => filterMenu(curElem)}
                                >{curElem}</button> */}

                                <button className='mt-3 mx-5 inline-flex w-full justify-center   px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset  sm:mt-0 sm:w-auto'
                                    key={index} onClick={() => filterMenu(curElem)}
                                >{curElem}</button>
                            </>
                        )
                    })
                }

                <div className="text-left text-white bg-white-200  px-6 rounded-lg ">
                    <div className="flex items-center cursor-pointer">
                        {/* <img src={profileimg} alt="profile" width={20} height={20} className="rounded-full bg-body mr-2" /> */}
                        <span className="hidden lg:block mr-3 text-sm text-white">Button 1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    {/* {dropdownOpen && (
                            <ul className="text-white text-xl font-bold absolute dropdown-menu  py-2 w-48 mt-4 right-0 bg-white shadow-main border border-skin-main rounded-md z-10 divide-y">
                                {profileoptions.map((option, i) => (
                                    <li onClick={() => onOptionClicked(option)} key={i} id={i} className={`flex items-center cursor-pointer px-4 py-2 text-sm capitalize hover:text-primary text-skin-main ${selectedOption === option.name && 'text-black'}`}>
                                        {
                                            option.name === 'Edit Profile' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                </svg>

                                        }
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        )} */}
                </div>
                <div className="text-left text-white bg-white-200  px-6 rounded-lg ">
                    <div className="flex items-center cursor-pointer">
                        {/* <img src={profileimg} alt="profile" width={20} height={20} className="rounded-full bg-body mr-2" /> */}
                        <span className="hidden lg:block mr-3 text-sm text-white">Button 2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>

                    {/* {dropdownOpen && (
                            <ul className="text-white text-xl font-bold absolute dropdown-menu  py-2 w-48 mt-4 right-0 bg-white shadow-main border border-skin-main rounded-md z-10 divide-y">
                                {profileoptions.map((option, i) => (
                                    <li onClick={() => onOptionClicked(option)} key={i} id={i} className={`flex items-center cursor-pointer px-4 py-2 text-sm capitalize hover:text-primary text-skin-main ${selectedOption === option.name && 'text-black'}`}>
                                        {
                                            option.name === 'Edit Profile' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                </svg>

                                        }
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        )} */}
                </div>
                {/* <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('cards')}
                >Card Game</button>
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('casino')}
                >Casino Game</button>
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('dics')}
                >Dics Game</button>
              
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setCard(Menu)}
                >All Game</button> */}

            </div>

            <Cards card={card} />

        </>
    )
}

export default GallaryCard